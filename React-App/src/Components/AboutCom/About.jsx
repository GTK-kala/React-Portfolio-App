import profile_image from "../../assets/Images/profile.jpg";
import SkillBar from "./SkillBar";
import StatsSection from "../CounterCard/StatsSection";
import "./About.css";
import "./SkillBar.css";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";

const About = () => {

  const { skills , setToggle } = useContext(DataContext);

  return (
    <div className="about" onClick={() => setToggle('')}>
      <h1 className="heading">About Me</h1>
      <p className="about-description">
        I'm a passionate Software Engineer with a strong background in
        developing scalable web applications.
      </p>
      <hr />
      <div className="about-content">
          <img src={profile_image} alt="" />       
        <div className="description-container">
          <div className="description-container-one">
            <h2>Software Engineer and Full Stack Developer</h2>
            <p>
              I specialize in building robust and efficient web applications
              using modern technologies. My expertise includes both front-end
              and back-end development.
            </p>
          </div>
          <div className="description-container-two">
            <ul className="about-list">
              <li>
                <strong>Birthday :</strong>27 May 2004
              </li>
              <li>
                <strong>Website :</strong>www.example.com
              </li>
              <li>
                <strong>Phone :</strong>+251 910 090 754
              </li>
              <li>
                <strong>City :</strong>Addis Ababa
              </li>
            </ul>

            <ul className="about-list">
              <li>
                <strong>Age :</strong>22
              </li>
              <li>
                <strong>Degree :</strong>Bachelor's in Software Engineering
              </li>
              <li>
                <strong>Email :</strong>gtkkala1110@gmail.com
              </li>
              <li>
                <strong>Freelance :</strong>Available
              </li>
            </ul>
          </div>
          <div className="description-container-three">
            <p className="about-text">
              I believe in the power of collaboration and communication in
              software development. I enjoy working in agile environments and
              contributing to all phases of the development lifecycle.
            </p>
          </div>
        </div>
      </div>
      <hr className="about-divider" />
      <section className="skills-section">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} level={skill.level} />
          ))}
        </div>
      </section>
      <hr />
      <StatsSection />
    </div>
  );
};

export default About;
