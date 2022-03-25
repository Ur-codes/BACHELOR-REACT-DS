import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes, Route } from "react-router-dom"
import { Accueil } from './composant/Page_Acceuil';
import { Commande } from './composant/Page_Commande';
import { Panier } from './composant/Page_Panier';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Accueil/>}  />
            <Route path="panier" element={<Panier/>} />
            <Route path="commande" element={<Commande/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
