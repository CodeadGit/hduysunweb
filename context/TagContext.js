"use client"
import { createContext, useContext } from "react";
const TagContext = createContext();

export const TagContextProvider = ({children}) => {


    const values = {

    }
   return(
    <TagContext.Provider value={values}>{children}</TagContext.Provider>
   )
}
export const useCategoriesContext = () => useContext(TagContext);