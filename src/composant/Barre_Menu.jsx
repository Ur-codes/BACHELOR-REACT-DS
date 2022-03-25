
import { Link} from "react-router-dom"

export const Menu = () => {
    
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand" >Mini E Commerce</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to='/'>Catalogue</Link>
        </li>
      </ul>
      
        <Link to='/panier' className='tabsMenu Panier-tab'>Panier</Link>
        
    </div>
  </nav>
}