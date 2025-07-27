
import "./Footer.css";

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
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#edeff0ff"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.5.5.5 5.5.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 .1 1.5 1 2.2 1.4.2-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.7 1 .7 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.5 18.5.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#f4f5f7ff"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.85-3.039-1.851 0-2.135 1.445-2.135 2.939v5.669H9.353V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.598 0 4.264 2.368 4.264 5.452v6.289zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07s.926-2.07 2.07-2.07c1.144 0 2.07.926 2.07 2.07s-.926 2.07-2.07 2.07zM6.793 20.452H3.88V9h2.913v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.543C0 23.228.791 24 1.771 24h20.451C23.209 24 24 23.228 24 22.271V1.729C24 .774 23.209 0 22.225 0z" />
              </svg>
            </a>

            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#edeff0ff"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm5.263 8.194l-1.65 7.789c-.125.569-.46.708-.933.44l-2.577-1.902-1.244 1.197c-.137.137-.252.252-.517.252l.186-2.645 4.822-4.358c.21-.187-.045-.291-.325-.104l-5.957 3.743-2.564-.801c-.557-.173-.568-.557.117-.823l10.033-3.872c.467-.174.876.104.729.818z" />
              </svg>
            </a>
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
        &Copy; {new Date().getFullYear()} GtkKala. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
