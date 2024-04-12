import { FaMailBulk, FaSearch, FaLaptopCode } from 'react-icons/fa';

const HomeCards = () => {
  const features = [
    { icon: FaMailBulk, title: 'Digital Marketing', description: 'Digital Marketing encompasses strategies and techniques aimed at promoting products or services using online channels such as social media, search engines, email, and websites to reach and engage with target audiences effectively.' },
    { icon: FaSearch, title: 'SEO', description: 'SEO, or Search Engine Optimization, is the process of enhancing a websites visibility and ranking on search engine results pages to drive organic traffic and increase online presence.' },
    { icon: FaLaptopCode, title: 'Design & Development', description: 'Design & Development: Crafting digital experiences tailored to your needs, from intuitive user interfaces to robust backend systems, bringing your vision to life online.' }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} style={{ visibility: 'visible', animationDelay: `${0.1 + index * 0.2}s`, animationName: 'fadeInUp' }}>
              <div className="feature-item bg-light rounded text-center p-4">
                <feature.icon className="fa-3x text-primary mb-4"  style={{fontSize:"42px"}}/>
                <h5 className="mb-3">{feature.title}</h5>
                <p className="m-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
