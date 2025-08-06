import profile_image from "../../assets/profile.jpg";
import SkillBar from "./SkillBar";
import StatsSection from "../CounterCard/StatsSection";
import "./About.css";
import "./SkillBar.css";

const About = () => {
  const skills = [
    { skill: "JavaScript", level: 90 },
    { skill: "React.js", level: 85 },
    { skill: "Node.js", level: 75 },
    { skill: "HTML & CSS", level: 95 },
    { skill: "Git & GitHub", level: 80 },
    { skill: "Java", level: 70 },
    { skill: "C++", level: 60 },
    { skill: "Next.js", level: 65 },
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <p className="about-description">
        I'm a passionate Software Engineer with a strong background in
        developing scalable web applications.
      </p>
      <hr />
      <div className="about-content">
        <div className="image-contanier">
          <img src={profile_image} alt="" />
        </div>
        <div className="description-contanier">
          <div className="description-contanier-one">
            <h2>Software Engineer and Full Stack Developer</h2>
            <p>
              I specialize in building robust and efficient web applications
              using modern technologies. My expertise includes both front-end
              and back-end development.
            </p>
          </div>
          <div className="description-contanier-two">
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
          <div className="description-contanier-three">
            <p className="about-text">
              I believe in the power of collaboration and communication in
              software development. I enjoy working in agile environments and
              contributing to all phases of the development lifecycle.
            </p>
          </div>
        </div>
      </div>
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
