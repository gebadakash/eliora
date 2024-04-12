import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-xxl position-relative p-0" id="hero">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
        <a href="/" className="navbar-brand p-0">
          {/* <h1 className="m-0">DGital</h1> */}
          <img src="images/elioralogo.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <a
              href="mailto:info@elioratechno.com"
              className="nav-item nav-link"
            >
              <IoIosMail className="me-2" style={{ fontSize: "22px" }} />
              info@elioratechno.com
            </a>
            <a href="#contact" className="nav-item nav-link">
              <FaLocationDot className="me-2" />
              Trimurti Nagar,Nagpur
            </a>
            <a href="tel:+91 8830826434" className="nav-item nav-link">
              <FaPhoneAlt className="me-2" />
              +91 8830826434
            </a>
          </div>
          <a
            href="#contact"
            className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
          >
            Get Started
          </a>
        </div>
      </nav>
      <div className="container-xxl bg-primary hero-header head">
        <div></div>
        <div className="container px-lg-5">
          <div className="row g-6 align-items-end">
            <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center text-center text-lg-start">
            <div>
              <img
                className="imagesSpecialOffer"
                src="images/SpecialOffer.png"
                style={{
                  width: "200px",
                }}
              />
              </div>
              <div className="justify-content-center">
              <h1
                className="animated fadeInUp  animate-charcter zoom-in-out-box"
                style={{
                  position: "relative",
                  bottom: "25px",
                  fontSize: "60px",
                }}
              >
                <span style={{ display: "inline-block",right: "169px",position: "relative" }}>₹6999/-</span>
              </h1>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-start">
              <img
                className="img-fluid animated zoomIn"
                src="images/hero.png"
                alt=""
              />
            </div>
            <div className="col-lg-12 text-center justify-content-center mt-5">
              <h1 className="text-white mb-4 animated slideInDown">
                Are You Looking For a Website?
              </h1>
              <h1 className="text-warning mb-4 animated slideInDown">Our Offerings</h1>
              <ul className="text-white pb-3 animated slideInDown list-unstyled" style={{fontSize:"25px"}}>
                <li style={{ fontWeight: 800 }}>Domain</li>
                <li style={{ fontWeight: 800 }}>Hosting</li>
                <li style={{ fontWeight: 800 }}>SSL Certificate</li>
                <li style={{ fontWeight: 800 }}>5 page Website Design</li>
                <li style={{ fontWeight: 800 }}>SEO Friendly Website</li>
                <li style={{ fontWeight: 800 }}>Responsive Design</li>
                <li style={{ fontWeight: 800 }}>WhatsApp Integration</li>
              </ul>
              <a
                href="#services"
                className="btn btn-warning py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
              >
                Read More
              </a>
              <a
                href="https://elioratechno.com/contact"
                target="_blank"
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
