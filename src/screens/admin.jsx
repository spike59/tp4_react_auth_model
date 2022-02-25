import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import LeftPanel from '../components/tab_panel';
export function Admin(){
    const [cookie] = useCookies(['token']);
    const [status,setStatus] = useState("loading");
    useEffect(()=>{
        const token = cookie.token;
        let my_headers =new Headers();
        my_headers.append("Authorization" , 'Bearer ' + token )
        const fetchParams = {
          method:"get",
          headers:my_headers
        }
        fetch('http://localhost:5000/auth/users', fetchParams)
              .then(response => {
                if( response.status === 200){
                    return response.json();
                }
                else{
                    return "error";
                }
              })
              .then((response) => {
                  console.log("reponse ",response);
                  setStatus(response.status);        
              })
              .catch(console.log);

    })
    
    return (
        <>
            <h1 className="text-center">AdminPage</h1>
            <h2>status {status}</h2>
            <LeftPanel className="h-100"></LeftPanel>
        </>
    )
}