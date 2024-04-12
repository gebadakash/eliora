import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Letter = () => {
  return (
    <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
            <h1 className="text-center text-white mb-4">Let's Build Your Website</h1>
            <p className="text-white mb-4">Contact us to get started on your website development journey.</p>
            <div className="position-relative w-100 mt-3">
              <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: '48px' }} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><FaPaperPlane className="text-primary fs-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
