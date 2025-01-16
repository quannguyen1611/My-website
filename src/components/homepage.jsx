// src/components/Homepage.jsx
import React, {useState, useRef } from 'react';
import '../styles/homepage.css';
import { FaDownload, FaGithub, FaLinkedin, FaServer, FaDesktop, FaDatabase, FaCode, FaTools, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import quanImage from '../images/quan3.jpg';
import GOPFImage from '../images/GOPF.png';
import landingPage from '../images/landingPage.png';
import mapImage from '../images/map.png';
import foodApp from '../images/foodApp.png';



const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + projectsPerPage;
      return nextIndex >= projects.length ? 0 : nextIndex; // Loop back to the start
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalculated = prevIndex - projectsPerPage;
      return prevIndexCalculated < 0 ? projects.length - projectsPerPage : prevIndexCalculated;
    });
  };

  const projects = [
    {
      title: "API",
      description: "Developed an interactive web interface using JavaScript and the Google Maps API to display nearby points of interest, featuring location autofill, proximity-based search, and asynchronous data fetching.",
      skills: ["HTML5", "CSS3", "JavaScript", "Python"],
      image: mapImage,
      liveDemo: "https://quannguyen1611.github.io/Contact-list/static/html/mycontacts.html",
      viewCode: "https://github.com/quannguyen1611/Contact-list",
    },
    {
      title: "GOPF Program",
      description: "The Global Online Pain Fellowship website serves as an informative platform to promote our program to potential attendees and provide them with comprehensive details about participation and benefits.",
      skills: ["HTML5", "CSS3", "JavaScript"],
      image: GOPFImage,
      liveDemo: "https://quannguyen1611.github.io/GOPF/",
      viewCode: "https://github.com/quannguyen1611/GOPF",
    },
    {
      title: "Recipe App Design",
      description: "UI design for a mobile recipe application.",
      skills: ["Figma"],
      image: foodApp,
      liveDemo: "https://www.figma.com/design/IFqt7GwKebmrcBkGM7JNhw/Sample-food-app-design?node-id=0-1&node-type=canvas&t=SyFP8iPAQeZOUZ3b-0",
    },
    {
      title: "Landing Page Design",
      description: "Landing page design for an interior agency using figma.",
      skills: ["Figma"],
      image: landingPage,
      liveDemo: "https://www.figma.com/design/vEsvAk2iBwre8p1KMpOOLv/Interior-Landingpage-web-design?node-id=0-1&node-type=canvas&t=EgF08AgSnqS7HjZh-0",
    },
  ];

 

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1 style={{ fontSize: "20px" }}>Quan Nguyen</h1>
        <div className="social-links">
          <a href="https://github.com/quannguyen1611" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/quannguyen1611/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="intro">
        <div className="intro-text">
          <h1 style={{ fontSize: "30px" }}>
            Hi, I'm Quan 👋 
            <br />
            Full-Stack Developer
          </h1>
          <p style={{ fontSize: "20px" }}>
            I’m a tech enthusiast and problem-solver with a passion for crafting elegant web solutions and building impactful software. 
            Whether it’s developing sleek front-end designs or diving deep into backend logic, I thrive on turning complex ideas into 
            user-friendly experiences. 
            <br /><br />
            When I’m not coding my next project (or debugging it for hours), you’ll probably find me at the gym, 
            bingeing some cringy K-drama shows, or making new recipes that may or may not turn out edible lol.
            <br /><br />
            Welcome to my corner of the internet! 😊 🚀
          </p>
          <div className='intro-buttons'>
            <a
              href="/Quan%20Nguyen's%20Resume%202024.docx (1).pdf" 
              download="Quan_Nguyen_Resume.pdf" 
              className="download-button"
            >
              <FaDownload style={{ marginRight: '5px' }} />
              Resume
            </a>
            <a
              href="mailto:nguy4359@umn.edu"
              className="contact-button"
            >
              <FaEnvelope style={{ marginRight: '5px' }} />
              Contact Me
            </a>
          </div>
        </div>
        <div className="intro-image">
          <img src={quanImage} alt="Quan Nguyen" className='Quan'/>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className='skills'>
        <h1 style={{ fontSize: "30px" }}>Skills & Technologies</h1>
        <div className='skillCards-grid'>
          <div className='skillCard-row'> 
            <div className='frontend'>
              <h2> <FaDesktop size={20}/> Frontend </h2>
              <div className='skill-element'>HTML5</div>
              <div className='skill-element'>CSS3</div>
              <div className='skill-element'>JavaScript</div>
              <div className='skill-element'>ReactJS</div>
              <div className='skill-element'>React Native</div>
              <div className='skill-element'>Tailwind CSS</div>
            </div>
            <div className='backend'>
              <h2> <FaServer size={20}/> Backend </h2>
              <div className='skill-element'>Python</div>
              <div className='skill-element'>Django REST</div>
              <div className='skill-element'>Node.js</div>
              <div className='skill-element'>NestJS</div>
              <div className='skill-element'>RESTful APIs</div>
            </div>
            <div className='database'>
              <h2> <FaDatabase size={20}/> Database </h2>
              <div className='skill-element'>MySQL</div>
              <div className='skill-element'>MongoDB</div>
              <div className='skill-element'>SQL</div>
            </div>
          </div>
          <div className='skillCard-row'>
          <div className='languages'>
              <h2> <FaCode size={20}/> Languages </h2>
              <div className='skill-element'>Python</div>
              <div className='skill-element'>Java</div>
              <div className='skill-element'>JavaScript</div>
              <div className='skill-element'>Typescript</div>
              <div className='skill-element'>C/C++</div>
            </div>
            <div className='version-control'>
              <h2> <BiGitBranch size={20}/> Version Control </h2>
              <div className='skill-element'>Git</div>
              <div className='skill-element'>Github</div>
            </div>
            <div className='tools'>
              <h2> <FaTools size={20}/> Tools </h2>
              <div className='skill-element'>VSCode</div>
              <div className='skill-element'>Linux</div>
              <div className='skill-element'>Postman</div>
              <div className='skill-element'>Docker</div>
              <div className='skill-element'>Figma</div>
              <div className='skill-element'>Canva</div>
              <div className='skill-element'>WordPress</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects">
        <h1 style={{ fontSize: "30px" }}>Featured Projects</h1>
        <div className="project-slider">
          <button onClick={handlePrevious} className="arrow-button">◀</button>
          <div className="project-list">
            {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.title} className="project-thumbnail" />
                </div>
                <div className="project-des">
                  <h3>{project.title}</h3>
                  <p style={{color: "rgb(70, 71, 71)"}}>{project.description}</p>
                  {project.skills.map((skill, i) => (
                    <div key={i} className="skill-element">{skill}</div>
                  ))}
                  <div className="project-buttons">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <FaGlobe className="button-icon" />
                      Live Demo
                    </a>
                    <a
                      href={project.viewCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <FaGithub className="button-icon" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="arrow-button">▶</button>
        </div>
      </section>
      {/* Footer */}
      <footer className='footer'>
        <p>Made with ❤️ by Quan</p>
      </footer>
    </div>
  );
};

export default Homepage;
