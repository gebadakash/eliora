import React from 'react';
import { FaCertificate, FaUsersCog, FaUsers, FaCheck } from 'react-icons/fa';

const Facts = () => {
  const factsData = [
    { icon: FaCertificate, count: "3+", label: 'Years Experience' },
    { icon: FaUsersCog, count: 134, label: 'Team Members' },
    { icon: FaUsers, count: "103+", label: 'Satisfied Clients' },
    { icon: FaCheck, count: "135+", label: 'Complete Projects' }
  ];

  return (
    <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {factsData.map((fact, index) => (
            <div key={index} className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`} style={{ visibility: 'visible', animationDelay: `${0.1 + index * 0.2}s`, animationName: 'fadeIn' }}>
              <fact.icon className="fa-3x text-warning mb-3" style={{fontSize:"52px"}}/>
              <h1 className="text-white mb-2" data-toggle="counter-up">{fact.count}</h1>
              <p className="text-white mb-0">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
