import { useContext, useEffect} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { ProfilContext } from '../../shared/profil_context';
import { useCookies } from 'react-cookie';
import {  useNavigate } from 'react-router-dom';

export function Login() {
    const { setProfil } = useContext(ProfilContext);
    const [cookie, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(2);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);

        if (validateCaptcha(jsonData.captcha) === true) {
            //console.log("captcha ok envoie de la requete login");
            await fetch('http://localhost:5000/auth/login', {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body,
            })
                .then(response => response.json())
                .then((jsonData) => {
                    //console.log("réponse ", jsonData);
                    if (jsonData.email) {
                        let result = ({
                            "logged": true,
                            "profil": {
                                "user": {
                                    "name": jsonData.email,
                                    "role": jsonData.role,
                                    "token": jsonData.token
                                }
                            }
                        })
                        //const cookieStr = "token=" + jsonData.token + "; max-age=" + 60 * 60 * 24
                        //console.log("cookiestr",cookieStr);
                        if (!cookie.token){
                            setCookie("token",jsonData.token);
                        }
                        setProfil(result.profil);
                        navigate("/account");
                    }
                })
                .catch(console.log);
        }
        else {
            console.log("catptcha does not match")
            //alert('Captcha Does Not Match');
        }

    }

    return (
        <>
            <div>login page</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='mail'>adresse email</label>
                <input type="mail" name="email"></input>
                <input type="text" name="password"></input>
                < LoadCanvasTemplate />
                <input name="captcha"></input>
                <button>Se connecter</button>
            </form>
        </>
    )
}