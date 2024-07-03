import "./Contact.css";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container5">
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

            <div id="contact-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Contact
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <footer className="footer text-white fixed-bottom" id="footer">
      <div className="container">
        <div className="row al">
          <div className="col-md col-sm-6 text-lg-start text-center">
            <a className="navbar-brand-footer" href="Assets/images/1740216.png">
              <img src="../img/zia.jpeg" alt="" />
            </a>
            <h5 className="mt-4">About Us</h5>
            <p>
              Ziamis B. Arsenio
            </p>
          </div>
          <div className="col-md-3 col-sm-6 text-lg-start ps-lg-5 ps-0 text-center">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Services 1</a></li>
              <li><a href="#">Services 2</a></li>
              <li><a href="#">Services 3</a></li>
              <li><a href="#">Services 4</a></li>
              <li><a href="#">Services 5</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5>Contact Us</h5>
            <p>Purok 1, Brgy. Orong,<br />Kabankalan City, Philippines</p>
            <p>Email: ZiamisArsenio@gmail.com<br />Phone: +639300631125</p>
          </div>
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5>Newsletter</h5>
            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" style={{ borderRadius: '1px' }} placeholder="email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
            <p>"Ziami's Personal Information."</p>
          </div>
        </div>
      </div>
    </footer>

      
    </>
  );
};

export default Contact;
