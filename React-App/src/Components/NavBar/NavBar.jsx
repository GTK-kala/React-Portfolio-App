import './NavBar.css'

const NavBar = () => {

  return (
    
    <div className="container">
{/*-----------------------NavBar Left Side---------------------- */}
        <div className="Left-container">
           <h1><a href="#">KHALID</a></h1>
        </div>
{/*-----------------------NavBar Right Side---------------------- */}
        <div className="Right-container">
           <ul className="list-items">
            <li  className="list-item">
                <a href="#">HOME</a>
            </li>
            <li  className="list-item">
                <a href="#">ABOUT</a>
            </li>
            <li  className="list-item">
                <a href="#">SKILL</a>
            </li>
            <li  className="list-item">
                <a href="#">CONTACT</a>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default NavBar