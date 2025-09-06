import FoodImage from '../Images/FoodImage.png'
import PortfolioImage from '../Images/PortfolioImage.png'
import EcommerceImage from '../Images/EcommerceImage.png'
import WeatherImage from '../Images/WeatherImage.png'
import TicToeImage from '../Images/TicToeImage.png'
import TodolistImage from '../Images/TodolistImage.png'
import PasswordImage from '../Images/PasswordImage.png'
import QuizImage from '../Images/QuizImage.png'
import BlogImage from '../Images/BlogImage.png'

export const skills = [
    { skill: "JavaScript", level: 90 },
    { skill: "React.js", level: 85 },
    { skill: "Node.js", level: 75 },
    { skill: "Bootstrap", level: 70 },
    { skill:"Mysql", level: 85},
    { skill: "HTML & CSS", level: 95 },
    { skill: "Git & GitHub", level: 80 },
    { skill: "Express.js", level: 90 },
    { skill: "Java", level: 70 },
    { skill: "C++", level: 60 },
    { skill: "Next.js", level: 65 },
    { skill: "Tailwind CSS", level: 80 }
  ];

export const stats = [
  { label: 'Clients', target: 120 },
  { label: 'Projects', target: 75 },
  { label: 'Hours Of Support', target: 3000 },
  { label: 'Workers', target: 15 },
];

export const projects = [
  {
    title: 'Food Delivery App',
    description: 'A full-stack food delivery web app using React and Plan css.',
    tech: ['React', 'Plan css', 'MongoDB' , 'Express.js' , 'Node.js'],
    githubLink: 'https://github.com/GTK-kala/React-Food-Delivery-App',
    liveLink: 'https://gtk-kala.github.io/React-Food-Delivery-App/',
    image: FoodImage,
  },
  // Food Delivery App
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React and Plan css.',
    tech: ['React', 'Plan css'],
    githubLink: 'https://github.com/GTK-kala/React-Portfolio-App',
    liveLink: 'https://GTK-kala.github.io/React-Portfolio-App/',
    image: PortfolioImage,
  }, 
  // Portfolio Website
  {
    title: 'E-Commerce-WebApp',
    description: 'An E-Commerce WebApp build Using React.js and Styled by Tailwind css.',
    tech: ['React', 'Tailwind css', 'Node.js' , 'MongoDB' , 'Express.js'],
    githubLink: 'https://github.com/GTK-kala/React-E-Commerce-WebApp',
    liveLink: 'https://GTK-kala.github.io/React-Portfolio-App/',
    image: EcommerceImage,
  }, 
  // E-Commerce-WebApp
  {
    title: 'Weather App',
    description: 'Weather app build by React.js and Fetch Api.',
    tech: ['React', 'Plan css' , 'Fetch Api'],
    githubLink: 'https://github.com/GTK-kala/React-Weather-App',
    liveLink: 'https://yourportfolio.netlify.app',
    image: WeatherImage,
  }, 
  // Weather App
  {
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe game built with React.js and Fetch API.',
    tech: ['React', 'CSS', 'Fetch API'],
    githubLink: 'https://github.com/GTK-kala/React-Tic-Tac-Game-App',
    liveLink: 'https://yourportfolio.netlify.app',
    image: TicToeImage,
  }, 
  // Tic Tac Toe game
  {
    title: 'To-Do List',
    description: 'To-Do List app built with React.js and Tailwind CSS.',
    tech: ['React', 'CSS', 'Fetch API'],
    githubLink: 'https://github.com/GTK-kala/React-Tailwind-To-Do-list-App',
    liveLink: 'https://yourportfolio.netlify.app',
    image: TodolistImage,
  }, 
  // To-Do List app
  {
    title: 'Simple Password Generator',
    description: 'Simple Password Generator app built with JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/GTK-kala/Simple-password-Generator-Javascript-',
    liveLink: 'https://yourportfolio.netlify.app',
    image: PasswordImage,
  },
  // Simple Password Generator app
  {
   title: 'Quiz App',
   description: 'Quiz App built with React.js and Tailwind CSS.',
   tech: ['React', 'Tailwind CSS'],
   githubLink: 'https://github.com/GTK-kala/React-Quiz-App',
   liveLink: 'https://yourportfolio.netlify.app',
   image: QuizImage,
  },
  // Quiz App
  {
   title: 'Blog App',
   description: 'Blog App built with JavaScript and Tailwind CSS.',
   tech: ['JavaScript', 'Tailwind CSS'],
   githubLink: 'https://github.com/GTK-kala/Tailwind-css-project-',
   liveLink: 'https://yourportfolio.netlify.app',
   image: BlogImage,
  }
  // Blog App
];