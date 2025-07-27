import Facebook_icon from '../../assets/facebook_icon.png'
import Linkedin_icon from '../../assets/linkedin_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'
import './Footer.css'

const Footer = () => {

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>KHALID</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            natus debitis ad consequatur? Amet quae, recusandae quas
            consectetur, quasi culpa ducimus qui quaerat officiis neque, ipsum
            corporis veniam ad ullam.
          </p>
          <div className="footer-social-icons">
            <img src={Facebook_icon} alt="Facebook" />
            <img src={Linkedin_icon} alt="Linkedin" />
            <img src={Twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+251-910-0907-54</li>
            <li>gtkkala1110@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &Copy;  {new Date().getFullYear()} GtkKala. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
