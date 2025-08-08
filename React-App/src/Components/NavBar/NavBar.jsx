import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { use, useState } from 'react';
import './NavBar.css'

const NavBar = () => {

 const [toggle , setToggle] = useState('');
    // Function to handle the toggle state for the navigation menu
   const ToggleHandel = () => {
     if (toggle === '') {
       setToggle('clicked');
     } else {
       setToggle('');
     }
  }
  return (
    
    <div className="container">
{/*-----------------------NavBar Left Side---------------------- */}
        <div className="Left-container">
           <h1><Link to='/'>KHALID</Link></h1>
        </div>
{/*-----------------------NavBar Center Side---------------------- */}
        <div className={`Right-container ${toggle}`}>
           <ul className="list-items">
            <li onClick={ () => setToggle('')}  className={`list-item`}>
                <Link to='/'>HOME</Link>
            </li>
            <li onClick={ () => setToggle('')} className={`list-item`}>
                <Link to='/About'>ABOUT</Link>
            </li>
            <li onClick={ () => setToggle('')} className={`list-item`}>
                <Link to="/projects">PROJECTS</Link>
            </li>
            <li onClick={ () => setToggle('')} className={`list-item`}>
                <Link to="/contact">CONTACT</Link>
            </li>
           </ul>
        </div>
{/*-----------------------NavBar Right Side---------------------- */}
        <div className="burger-icon">
            <h1 onClick={()=> ToggleHandel()} className='icon'><RxHamburgerMenu /></h1>
        </div>
    </div>
  )
}

export default NavBar