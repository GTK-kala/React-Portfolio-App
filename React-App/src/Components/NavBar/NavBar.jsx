import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    
    <div className="container">
{/*-----------------------NavBar Left Side---------------------- */}
        <div className="Left-container">
           <h1><Link to='/'>KHALID</Link></h1>
        </div>
{/*-----------------------NavBar Right Side---------------------- */}
        <div className="Right-container">
           <ul className="list-items">
            <li  className="list-item">
                <Link to='/'>HOME</Link>
            </li>
            <li  className="list-item">
                <a href="#">ABOUT</a>
            </li>
            <li  className="list-item">
                <a href="#">SKILL</a>
            </li>
            <li  className="list-item">
                <Link to="/contact">CONTACT</Link>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default NavBar