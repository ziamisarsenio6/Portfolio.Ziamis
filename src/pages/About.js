import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import zia from "../img/zia.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container2">
            <div class="bubble">
              <span class="circled" style={{ "--i": 11 }}></span>
              <span class="circled" style={{ "--i": 12 }}></span>
              <span class="circled" style={{ "--i": 24 }}></span>
              <span class="circled" style={{ "--i": 10 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 23 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 22 }}></span>
              <span class="circled" style={{ "--i": 25 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 21 }}></span>
              <span class="circled" style={{ "--i": 15 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 22 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 12 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 13 }}></span>
              <span class="circled" style={{ "--i": 28 }}></span>
              <span class="circled" style={{ "--i": 19 }}></span>
              <span class="circled" style={{ "--i": 18 }}></span>
              <span class="circled" style={{ "--i": 20 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
              <span class="circled" style={{ "--i": 16 }}></span>
              <span class="circled" style={{ "--i": 14 }}></span>
              <span class="circled" style={{ "--i": 17 }}></span>
            </div>

            <div id="about-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      About
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary"></h4>
                  <p>
                    As a future web developer, you're embarking on an exciting journey where creativity meets technology. 
                    Your role will involve crafting immersive digital experiences that seamlessly blend aesthetics with functionality. 
                    You'll dive into coding languages like HTML, CSS, and JavaScript, mastering their intricacies to build responsive and dynamic websites that captivate users.
                     Understanding user experience (UX) principles will be crucial as you strive to create intuitive interfaces that enhance usability. 
                     Staying updated with the latest trends and technologies in web development will empower you to innovate and push boundaries in the digital landscape. 
                    Embrace the challenge of translating ideas into pixel-perfect reality, knowing that each line of code you write shapes the future of the online world.
                  As you embark on your journey as a future web developer, anticipate a dynamic career at the intersection of creativity and technology.
                   Your days will be filled with crafting elegant, user-centric interfaces and ensuring seamless functionality across various devices.
                    Embrace the evolving landscape of web development frameworks and tools, leveraging them to build responsive and visually stunning websites.
                     Collaborate closely with designers and clients to bring visions to life, mastering languages like HTML, CSS, and JavaScript to create immersive digital experiences.
                      Stay ahead by embracing new technologies such as Progressive Web Apps (PWAs) and Single Page Applications (SPAs), 
                      ensuring your skills remain cutting-edge in an ever-changing industry. 
                  Your passion for problem-solving and continuous learning will drive your success as you shape the future of the web.
                   
                  </p>
                  
                  
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={zia}
                      alt="Profile Picture of Ziamis B. Arsenio"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2>Education</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Fortress College and Kabankalan City.
                      </h4>
                      <p className="text-secondary">
                         Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Orong Elementary School</h4>
                      <p className="text-secondary">
                        Brgy.Orong, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      <section id="skill" className="bg-secondary">
        
        <div className="col skills">
          <h2 className="text-center mt-5 mb-5">Skills</h2>
          <div class="row justify-content-center">
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
              <p className="text-center">70%</p>
              <span class="bar">
                <span class="html"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
              <p className="text-center">70%</p>
              <span class="bar">
                <span class="css"></span>
              </span>
            </div>
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">JAVASCRIPT</h5>
              <p className="text-center">50%</p>
              <span class="bar">
                <span class="javascript"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
              <p className="text-center">35%</p>
              <span class="bar">
                <span class="php"></span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <br>
      </br>
      <br>
      </br>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
