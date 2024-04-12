import { FiMapPin, FiPhone, FiMail, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Address<span></span></p>
            <p><FiMapPin className="me-2" />Opposite Bank of Baroda, Ward <span className='ms-4'> Number 3, Parsodi,Trimurtee</span><p className='ms-4'> Nagar, Nagpur, Maharashtra 440022</p></p>
            <p><FiPhone className="me-3" />+91 8668681466 </p>
            <p><FiPhone className="me-3" /> +91 8956101181 </p>
            <p><FiMail className="me-3" />info@elioratechno.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL"><FiFacebook /></a>
              <a className="btn btn-outline-light btn-social" href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA=="><FiInstagram /></a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/eliora-it-services/"><FiLinkedin /></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
            <a className="btn btn-link" href="/" style={{textDecoration:"none"}}><FaArrowRight className="me-2"/>Home</a>
            <a className="btn btn-link" href="#hero" style={{textDecoration:"none"}}><FaArrowRight className="me-2"/>Pricing</a>
            <a className="btn btn-link" href="#services" style={{textDecoration:"none"}}><FaArrowRight className="me-2"/>Service</a>
            <a className="btn btn-link" href="#contact" style={{textDecoration:"none"}}><FaArrowRight className="me-2"/>Contact</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-1.jpg" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-2.jpg" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-3.jpg" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-4.jpg" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-5.jpg" alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="images/portfolio-6.jpg" alt="Image" />
              </div>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
            <p>Contact us to get started on your website development journey.</p>
            <div className="position-relative w-100 mt-3">
              <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><FiMail className="text-primary fs-4" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a className="" href="https://elioratechno.com/index" target='_blank' style={{textDecoration:"none"}}>Eliora Pvt. Ltd</a>, All Right Reserved. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
