import { createContext, useState } from "react";

export const PanierContext = createContext()

export const PanierProvider = (props) => {

    const localStorageData = localStorage.getItem("Panier")
    let panier = useState([])
    
    if (localStorageData) panier = JSON.parse(localStorageData)
    
    return <PanierContext.Provider value={{panier}}>
        {props.children}
    </PanierContext.Provider>
}