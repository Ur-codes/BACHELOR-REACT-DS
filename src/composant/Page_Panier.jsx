import { useState } from "react";
import { useNavigate } from "react-router-dom"



export const Panier = () => {
 
 
    const [ListeArticles, setListeArticles] = useState(JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [])
    
    function viderPanier() {
        localStorage.removeItem("Panier")
    }

    function supprimerArticle(a) {
        const index = a.target.value
        const rep = ListeArticles.filter(article => article.index != index)
        setListeArticles(rep)
        localStorage.setItem("Panier", JSON.stringify(rep))
    }

    const Navigation = useNavigate()

    const [Formulaire,setFormulaire] = useState({nom:"",email:"",adresse:"",commentaire:""})
  
    function handleChange(a) {
        const {name,value} = a.target;
        setFormulaire({...Formulaire, [name]: value})
    }

    function handleSubmit(a) {
        a.preventDefault();
        console.log("bouton appuyé")
        if(Formulaire.login != "" && Formulaire.password != "" && Formulaire.adresse != "") {
           localStorage.setItem("client",JSON.stringify({nom:Formulaire.nom,email:Formulaire.email,adresse:Formulaire.adresse,commentaire:Formulaire.commentaire}))
           console.log(localStorage.getItem("client"))
        Navigation('/commande')
        }
    }



    return (<>
        <table>
            <thead>
                <tr>
                <th >id</th>
                <th >nom</th>
                <th >prix</th>
                <th >action</th>
                </tr>
            </thead>
            <tbody>
                {ListeArticles.map((value,index) => {
                    return <tr key={index}>
                        <th>{value.id}</th>
                        <td>{value.nom}</td>
                        <td>{value.prix}</td>
                        <button onClick={supprimerArticle} value={value.id}>Supprimer</button>
                    </tr>
                })}
            </tbody>
        </table>
        <button onClick={viderPanier}>Vider panier</button>
        <h2>Profil</h2>
        <form>
            <h4>votre Nom</h4>
            <input type="text" name="nom" value={Formulaire.nom} onChange={handleChange}></input>
            <h4>votre Email</h4>
            <input type="text" name="email" value={Formulaire.email} onChange={handleChange} ></input>
            <h4>votre Adresse</h4>
            <input type="text" name="adresse" value={Formulaire.adresse} onChange={handleChange} ></input>
            <h4>Commentaires</h4>
            <textarea cols="30" rows="10" name="commentaire" onChange={handleChange} value={Formulaire.commentaire}></textarea>
            <button type="submit" onClick={handleSubmit}>Commander</button>
        </form>
        
    </>)
}