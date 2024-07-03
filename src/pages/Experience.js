import "./Experience.css";
import Navbar from "./Navbar";

import ojt1 from "../img/ojt.000.webp";
import ojt2 from "../img/ojt.001.webp";
import ojt3 from "../img/ojt.002.webp";
import ojt4 from "../img/ojt.003.webp";
import ojt5 from "../img/ojt.004.webp";




const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">
            <div class="bubbles">
              <span class="circle" style={{ "--i": 11 }}></span>
              <span class="circle" style={{ "--i": 12 }}></span>
              <span class="circle" style={{ "--i": 24 }}></span>
              <span class="circle" style={{ "--i": 10 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 23 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 22 }}></span>
              <span class="circle" style={{ "--i": 25 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 21 }}></span>
              <span class="circle" style={{ "--i": 15 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 22 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 12 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
            </div>

            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr />
          </div>
      
          <div class="isotope">
            <div class="row">
              <center><p className="display-6">On-Job Training and Panasiatic</p></center>
              
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojt1} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojt2} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojt3} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojt4} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr /> 
          

  

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

export default Experience;