import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilContext } from '../../shared/profil_context';

export function Logout(){
    const navigate = useNavigate();
    const {profil, setProfil} = useContext(ProfilContext);
    const cookieStr = "token=na ; max-age=0";
    document.cookie = cookieStr;
    

    useEffect(() => {
        setTimeout(() => {
            setProfil({});
            navigate("/");
        }, 1000);
    }, [navigate,setProfil])

    return (
        <div>déconnection...</div>
    )
}