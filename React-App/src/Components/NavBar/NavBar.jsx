import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext , useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import './NavBar.css'

const NavBar = () => {
   
   const [click, setClick] = useState('HOME');
   const { ToggleHandel , setToggle  , toggle , isOpen } = useContext(DataContext);


  return (
    
    <div className="container" id='top'>
{/*-----------------------NavBar Left Side---------------------- */}
        <div className="Left-container">
           <h1 onClick={() => setToggle('')}><Link to='/'>KHALID</Link></h1>
        </div>
{/*-----------------------NavBar Center Side---------------------- */}
        <div className={`Right-container ${toggle}`}>
           <ul className={`list-items ${isOpen}`}>
            <li onClick={ () => {setToggle('')  , setClick('HOME')}}  className={`list-item ${click === 'HOME' ? 'active' : ''}`}>
                <Link to='/'>HOME</Link>
            </li>
            <li onClick={ () => {setToggle(''), setClick('ABOUT') }} className={`list-item ${click === 'ABOUT' ? 'active' : ''}`}>
                <Link to='/About'>ABOUT</Link>
            </li>
            <li onClick={ () =>{ setToggle('') , setClick('PROJECTS') }} className={`list-item ${click === 'PROJECTS' ? 'active' : ''}`}>
                <Link to="/projects">PROJECTS</Link>
            </li>
            <li onClick={ () => { setToggle('') , setClick('CONTACT') }} className={`list-item ${click === 'CONTACT' ? 'active' : ''}`}>
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