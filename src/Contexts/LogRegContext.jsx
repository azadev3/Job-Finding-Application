import { createContext, useEffect, useState } from "react";

export const LoginRegisterContext = createContext();

export const LoginRegisterProvider = ({children}) => {
     const [workBtn, setWorkBtn] = useState(true);
     const [workerBtn, setWorkerBtn] = useState(true);
     const handleControlPressedBtn = (value) => {
          if (value === 'searchwork') {
               setWorkBtn(true);
               setWorkerBtn(false);
          } else if (value === 'searchworker') {
               setWorkerBtn(true);
               setWorkBtn(false); 
          }
     };
     useEffect (() => {
          if (workBtn){
               setWorkBtn(true);
               console.log(workBtn)
               setWorkerBtn(false);
          } else if (workerBtn){
               setWorkBtn(false);
               console.log(workerBtn)
               setWorkerBtn(true)
          }
     }, [])

     
  


         
          

          
             

     return (
          <LoginRegisterContext.Provider value={{workBtn, workerBtn, setWorkBtn, handleControlPressedBtn}}>
          {children}
          </LoginRegisterContext.Provider>
     )
}