import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, githubLink, liveLink, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="tech">🔧 {tech.join(', ')}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
