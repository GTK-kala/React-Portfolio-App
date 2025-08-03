import profile_image from "../../assets/profile-img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p className="about-description">
        I'm a passionate Software Engineer with a strong background in
        developing scalable web applications.
      </p>
      <hr />
      <div className="main-container">
        <div className="image-container">
          <img src={profile_image} alt="Profile" className="profile-image" />
        </div>
        <div className="description">
          <h2>Software Engineer and Full Stack Developer</h2>
          <p>
            I specialize in building robust and efficient web applications using
            modern technologies. My expertise includes both front-end and
            back-end development.
          </p>
          <div className="info-container">
            <ul>
              <li>
                <strong>Birthday:</strong>27 May 2004
              </li>
              <li>
                <strong>Website:</strong>www.example.com
              </li>
              <li>
                <strong>Phone:</strong>+251 910 090 754
              </li>
              <li>
                <strong>City:</strong>Addis Ababa
              </li>
            </ul> 
            <ul>
              <li>
                <strong>Age:</strong>22
              </li>
              <li>
                <strong>Degree:</strong>Bachelor's in Software Engineering
              </li>
              <li>
                <strong>Email:</strong>gtkkala1110@gmail.com
              </li>
              <li>
                <strong>Freelance:</strong>Available
              </li>
            </ul>
          </div>
          <p>
            I believe in the power of collaboration and communication in
            software development. I enjoy working in agile environments and
            contributing to all phases of the development lifecycle.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
