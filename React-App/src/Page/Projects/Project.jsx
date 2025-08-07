
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Project.css';

const projects = [
  {
    title: 'Food Delivery App',
    description: 'A full-stack food delivery web app using React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/food-delivery-app',
    liveLink: 'https://yourfoodapp.netlify.app',
    image: '/images/food-app.png',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React.',
    tech: ['React', 'CSS'],
    githubLink: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://yourportfolio.netlify.app',
    image: '/images/portfolio.png',
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section className="projects-section">
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
