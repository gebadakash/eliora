import React from 'react';
import { FiSend } from 'react-icons/fi';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-xxl py-5" id='contact'>
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
          <h1 className="text-center mb-5">Contact For Any Query</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit"><FiSend /> Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
