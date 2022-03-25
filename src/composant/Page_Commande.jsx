import { Navigate } from "react-router-dom";

export const Commande = () => {


    const ClientData = JSON.parse(localStorage.getItem("Client"))
    const ListeArticles = JSON.parse(localStorage.getItem("Panier"))
    
    console.log(ListeArticles)
    
    
    localStorage.setItem("Commande","Acheté!")
  
  
  
  return (<>
  
        {ClientData ? <><h2>Commande n°1</h2>
        <table>
            <thead>
                <tr>
                <th>id</th>
                <th>nom</th>
                <th>prix</th>
                </tr>
            </thead>
            <div>
                {ListeArticles.map((value,index) => {
                    return <tr key={index}>
                        <th>{value.id}</th>
                        <td>{value.titre}</td>
                        <td>{value.prix}</td>       
                    </tr>
                })}
            </div>
        </table>
        <h2>Livraison</h2>
        <ul>
            <li>nom : {ClientData.nom}</li>
            <li>email : {ClientData.email}</li>
            <li>adresse : {ClientData.adresse}</li>
            <li>commentaire : {ClientData.commentaire}</li>
        </ul>
       </> : <Navigate to="/commande"/>}
    </>)
}