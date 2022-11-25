import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar =()=>{
    return  <header className="navbar bg-black">
    <img src={"./logo_positivo.svg"}className="header__logo" width={250} alt="logo"/>
    <div className='header__nav'></div><h2 className='h2_nav'>Deportivo</h2><h2 className='h2_nav' >Urbano</h2>

    <FontAwesomeIcon  className='icon'  icon={faCartShopping}  width={100}  href='#'  /> 
    
</header>
}

export default Navbar;