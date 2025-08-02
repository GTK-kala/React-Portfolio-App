import './Hero.css';
import HeroImage from '../../assets/img2.png';
const Hero = () => {

  return (
    <div className="hero">
        <img src={HeroImage} alt="" />
        <h1>Hello</h1>
    </div>
  )
}

export default Hero