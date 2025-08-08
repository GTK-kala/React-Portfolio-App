import './Hero.css';
import HeroImage from '../../assets/Images/img.png';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
        <img src={HeroImage} alt="" />
        <div className="hero-section">
            <h1>Khalid Daniel</h1>
            <p>I'm a professional <strong>Software Engineer</strong> and <strong>Fullstack Developer</strong> from Addis Ababa, Ethiopia.</p>
            <button className="hero-button" onClick={() => navigate('/about')}>About Me</button>
        </div>
    </div>
  )
}

export default Hero