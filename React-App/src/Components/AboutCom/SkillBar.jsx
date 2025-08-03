import "./SkillBar.css";
import { useState , useEffect } from "react";

const SkillBar = ({ skill, level }) => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(level);
    }, 100);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{skill}</span>
        <span>{width}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
