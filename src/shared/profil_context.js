
import { createContext, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
// export const ProfilContext = createContext({
//     profil:{
//         "user":{
//           "name": "anonymous0"
//         }},
//     setProfil : ()=>{}
//   });
const ProfilContext = createContext();
const ProfilProvider = ({ children }) => {
    console.log("provider!");
    //const [auth, setAuth] = useState({role:0});
    const [cookie] = useCookies(['token']);
    const [profil,setProfil] = useState({})
    useEffect(()=>{
        if (cookie.token)
        {
            console.log("fetch");
            fetch("http://localhost:5000/auth/refresh_token",
            {
                method: 'post', 
                credentials:'include'
            })
            .then(response => response.json())
            .then((jsonData) => {

                console.log("réponse app update token ", jsonData);
                //let result;
                if (jsonData.user) {
                    let profil = 
                    {
                        "user": {
                            "name": jsonData.user.email,
                            "role": jsonData.user.role,
                            "token": jsonData.user.token
                        }
                    }
                    setProfil(profil);
                }
                // const data = text.toJson();
                // console.log("data",data);
                // if(data.result){
                    
                //     //setAuth({role:data.role});
                // }
                // else{
                //     document.cookie = `token=null;max-age=0`;
                //     //setAuth({role:0})
                // }
            }).catch(console.log);
        }
    },[])
  
    return (
      <ProfilContext.Provider value={{profil, setProfil}}>
        {children}
      </ProfilContext.Provider>
    );
}

export {ProfilContext,ProfilProvider};