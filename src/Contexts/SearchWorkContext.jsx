import { useState, useEffect, useRef, createContext } from "react";

export const SearchWorkContext = createContext();

export const SearchWorkContextProvider = ({children}) => {

     const [openedMenu, setOpenedMenu] = useState("");
     const [selectedValueAltCategory, setSelectedValueAltCategory] = useState('');
     const [trimValue, setTrimValue] = useState('');
     const menuRef = useRef(null);

     const handleMenu = (value) => {
              setOpenedMenu(value);
       };
     const closeMenu = (subValue) => {
          setSelectedValueAltCategory(subValue);
          setTrimValue(subValue.slice(0, 8) + "...");
          setOpenedMenu(false);
          if (menuRef.current) {
               menuRef.current.style.display = "none";
          }
       };
     return (
          <SearchWorkContext.Provider value={{
               openedMenu, closeMenu, menuRef, handleMenu, selectedValueAltCategory, trimValue, setSelectedValueAltCategory
          }}>
               {children}
          </SearchWorkContext.Provider>
     )
}