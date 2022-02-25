import { useEffect } from 'react';
import LeftPanel from '../components/tab_panel';
export function Admin(){
    // useEffect(()=>{
    //     fetch('http://localhost:5000/product/new', {
    //             method:'post',
    //             headers: {
    //               "content-type": "application/json",
    //             },
    //             body,
    //           })
    //           .then(response=>response.json())
    //           .then((jsonData) => {
    //               console.log("reponse ",jsonData);
    //               //let data = await response.json();
    //               //console.log("response message",data.message);
    //                 // if (response.status === 200){
    //                 jsonData.status === 200 ? 
    //                     setSuccesReg({
    //                         "registered":true,
    //                         "token":jsonData.token
    //                     }):
    //                     setSuccesReg({
    //                         "registered":false,
    //                         "status":jsonData.status,
    //                         "message":jsonData.message
    //                     })
                    
    //             })
    //             .catch(console.log);

    // },[])
    
    return (
        <>
            <h1 className="text-center">AdminPage</h1>
            <LeftPanel className="h-100"></LeftPanel>
        </>
    )
}