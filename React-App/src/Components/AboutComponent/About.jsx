import profile_image from "../../assets/profile-img.jpg";
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm a passionate Software Engineer with a strong background in
        developing scalable web applications.
      </p>
      <div className="container">
        <div className="image-container">
          <img src={profile_image} alt="Profile" />
        </div>
        <div className="description">
          <h2>Software Engineering and Full Stack Development</h2>
          <p>
            I specialize in building robust and efficient web applications using
            modern technologies. My expertise includes both front-end and
            back-end development, allowing me to create seamless user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
