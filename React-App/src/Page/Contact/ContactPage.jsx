import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p className="contact-description">
        If you have any questions or feedback, feel free to reach out to us at
      </p>
      <div className="address-info">
        <div className="contact-info">
          <div className="info-address">
            <span className="icon">
              <CiLocationOn />
            </span>
            <p>
              <strong>Address</strong> <br />
              <span>Addis Ababa , Ethiopia</span>
            </p>
          </div>

          <div className="info-address">
            <span className="icon">
              <IoCallOutline />
            </span>
            <p>
              <strong>Call Us</strong> <br />
              <span>+251 909 100 754</span>
            </p>
          </div>
          <div className="info-address">
            <span className="icon">
              <MdOutlineMail />
            </span>
            <p>
              <strong>Email Us</strong> <br />
              <span>gtkkala1110@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="input-info">
          <div className="contact-form">
            <div className="contact-input">
              <label>Your Name</label>
              <input type="text" />
            </div>
            <div className="contact-input">
              <label>Your Email</label>
              <input type="email" />
            </div>
          </div>
          <div className="contact-input-subject">
            <label>Your Subject</label>
            <input type="text" />
          </div>
          <div className="textarea-input">
            <label>Your Message</label>
            <textarea></textarea>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
