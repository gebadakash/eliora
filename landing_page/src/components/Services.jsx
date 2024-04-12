import { FaSearch, FaLaptopCode, FaFacebookF, FaMailBulk, FaThumbsUp, FaAndroid } from 'react-icons/fa';
import "./Service.css";


const Services = () => {
  const servicesData = [
    { icon: FaSearch, title: 'Domain', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaLaptopCode, title: 'Hosting', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaFacebookF, title: 'SSL Certificate', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaMailBulk, title: '5 Page Website Design', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaThumbsUp, title: 'SEO Friendly Website', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaAndroid, title: 'Responsive Design', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' },
    { icon: FaSearch, title: 'WhatsApp Integration', description: 'Our company offers comprehensive web solutions, including domain registration, reliable hosting services, SSL certificates for enhanced security, custom 5-page website designs that are SEO-friendly and responsive across all devices. Additionally, we seamlessly integrate WhatsApp into your website, ensuring effective communication channels for your business needs.' }
  ];

  return (
    <div className="container-xxl py-5" id='services'>
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <p className="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
          <h1 className="text-center mb-5">What Services We Provide</h1>
        </div>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="service-item d-flex flex-column text-center rounded icon-div"> {/* Apply inline background image */}
                <div className="service-icon flex-shrink-0">
                  <service.icon className="fa-2x" style={{fontSize:"50px"}}/>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="m-0">{service.description}</p>
                <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
