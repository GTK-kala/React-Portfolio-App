import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import './NavBar.css'

const NavBar = () => {

  return (
    
    <div className="container">
{/*-----------------------NavBar Left Side---------------------- */}
        <div className="Left-container">
           <h1><Link to='/'>KHALID</Link></h1>
        </div>
{/*-----------------------NavBar Center Side---------------------- */}
        <div className="Right-container">
           <ul className="list-items">
            <li  className="list-item">
                <Link to='/'>HOME</Link>
            </li>
            <li  className="list-item">
                <Link to='/About'>ABOUT</Link>
            </li>
            <li  className="list-item">
                <Link to="/projects">PROJECTS</Link>
            </li>
            <li  className="list-item">
                <Link to="/contact">CONTACT</Link>
            </li>
           </ul>
        </div>
{/*-----------------------NavBar Right Side---------------------- */}
        <div className="burger-icon">
            <h1 className='icon'><RxHamburgerMenu /></h1>
        </div>
    </div>
  )
}

export default NavBar