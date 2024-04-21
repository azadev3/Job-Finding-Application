import { createContext, useState } from "react";

export const InformationContext = createContext();
export const InformationContextProvider = ({ children }) => {

     const [information, setInformation] = useState('');
     const handleInformation = (informationValue) => {
          setInformation(informationValue);
        }

     return (
          <InformationContext.Provider value={{ information, handleInformation }}>
               { children }
          </InformationContext.Provider>
     )
}