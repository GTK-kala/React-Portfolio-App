import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import './Contact.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
        <h1>Contact</h1>
        <p className="contact-description">
          If you have any questions or feedback, feel free to reach out to us at
        </p>
        <div className="address-info">
           <div className="contact-info">
           <label><CiLocationOn /></label>
            <p>
              <strong>Address</strong> <br /> 
              Addis Ababa , Ethiopia
            </p>

           <label><IoCallOutline /></label>
            <p>
              <strong>Call Us</strong> <br /> 
              +251 909 100 754
            </p>

           <label><MdOutlineMail /></label>
           <p>
            <strong>Email Us</strong> <br /> 
             gtkkala1110@gmail.com
           </p>
           </div>

           <div className="input-info">
            <form action="">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Your Message</label>
              <textarea placeholder="Enter your message"></textarea>
              <button type="submit">Send Message</button>
            </form>
           </div>
        </div>
    </div>
  )
}

export default ContactPage