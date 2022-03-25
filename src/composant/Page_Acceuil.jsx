import { useContext} from "react";
import { PanierContext } from "../context/Context_Panier";


export const Accueil = () => {

    
    const Articles = [
      {id : 1 , nom : "Produit 1", description:"description produit 1", prix:10},
      {id : 2 , nom : "Produit 2", description:"description produit 2", prix:20},
      {id : 3 , nom : "Produit 3", description:"description produit 3", prix:30},
      {id : 4 , nom : "Produit 4", description:"description produit 4", prix:40},
      {id : 5 , nom : "Produit 5", description:"description produit 5", prix:50}]


    localStorage.removeItem("Client")
    
    if (!localStorage.getItem("Panier")) {
       localStorage.setItem("Panier",JSON.stringify([]))
     }
     if (localStorage.getItem("Commande")) {
       localStorage.setItem("Panier",JSON.stringify([]))
       localStorage.removeItem("Commande")
     }

     const panierClient = useContext(PanierContext)
    
     panierClient.panier[0] = JSON.parse(localStorage.getItem("Panier"))
     function ajoutPanier() {
           panierClient.panier[0].push(Articles)
           localStorage.setItem("Panier", JSON.stringify(panierClient.panier[0]))
      }
 

    return (<>
  
        {Articles.map((value,index) => {
          return <div key={index}>
            <h5>{value.nom}</h5>
            <div>
              <p >{value.description}</p>
              <button onClick={ajoutPanier}>Mettre dans le panier</button>
              <p>{value.prix}</p>
            </div>
          </div>
        })}
    </>)
}