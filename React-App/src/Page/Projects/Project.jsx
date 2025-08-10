import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Project.css';
import { DataContext } from '../../Context/DataContext';
import { useContext } from 'react';

const Project = () => {
  const { projects  , setToggle} = useContext(DataContext);

  return (
    <section className="projects-section" onClick={() => setToggle('')}>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Project;
