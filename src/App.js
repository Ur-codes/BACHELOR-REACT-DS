import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Outlet } from "react-router-dom";
import { Menu } from './composant/Barre_Menu';
import { PanierProvider } from './context/Context_Panier';


function App() {
  return (
    <div>
      <PanierProvider>
        <Menu/>
        <Outlet/>
      </PanierProvider>
    </div>
  );
}

export default App;
