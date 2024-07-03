import "./Home.css";

import zia from "../img/zia.jpeg";
import mik from "../img/mik.jpg";
import ars from "../img/ars.jpeg";
import SRS from "../img/SRS.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div class="bubbly">
              <span class="circles" style={{ "--i": 11 }}></span>
              <span class="circles" style={{ "--i": 12 }}></span>
              <span class="circles" style={{ "--i": 24 }}></span>
              <span class="circles" style={{ "--i": 10 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 23 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 22 }}></span>
              <span class="circles" style={{ "--i": 25 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 21 }}></span>
              <span class="circles" style={{ "--i": 15 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 22 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 12 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
            </div>

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold"></h1>
                      <h1 className="text display-4 fw-bold">

                      </h1>
                      <br />
                      <p className="self text-light">
                        "Hello, I'm Ziamis B. Arsenio, a passionate web designer dedicated to creating aesthetically pleasing and functional websites.
                        With a keen eye for detail and a love for innovation,
                        I specialize in crafting user-friendly interfaces that seamlessly blend creativity with practicality.
                        Whether it's designing responsive layouts, optimizing user experience, or integrating cutting-edge technologies,
                        I thrive on transforming ideas into visually captivating digital experiences. Let's collaborate to bring your vision to life and elevate your online presence."
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={zia}
                        alt="Profile Picture of Ziamis B. Arsenio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-3 shadow">
                <img src={SRS} alt="" />
                <h4 className="text-center">Designer</h4>
                <p>
                  "A designer is more than a creator; they are architects of experiences,
                  blending creativity with problem-solving to craft functional and aesthetically pleasing solutions.
            From graphics to user experiences, designers shape environments and interactions, translating  ideas into impactful realities."
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-4 shadow">
                <img src={mik} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Visual Studio Code (VS Code) is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility, extensive
                  features, and customizable nature.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-4 shadow">
                <img src={ars} alt="" />
                <h4 className="text-center">Web Developer</h4>
                <p>
                  "A web developer is a professional skilled in building and maintaining websites.
                  They use coding languages like HTML, CSS, and JavaScript to create interactive and visually appealing web pages.
                  Web developers work closely with designers to ensure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3">
              <br />
            </h3>
            <div className="col-lg-7 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3"></h4>
                <img src={ars} alt="ars.jpeg" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3"></h4>
                <img src={mik} alt="mik.jpg" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">
                </h4>
                <img src={SRS} alt="SRS.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
