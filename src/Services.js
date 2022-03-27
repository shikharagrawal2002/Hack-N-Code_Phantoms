import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Info from "./Info.png";
import GPS from "./gps.png";

const Services = () => {
  return (
    <div className="services-container" id="#services">
      <h1>WHAT SERVICES WE PROVIDE? </h1>
      <div className="services-content">
        <div className="services-content-item">
          <img src={GPS} width="200" alt="GPS" />
          <p>
            The location of nearby doctors and hospitals for the treatment and
            well-being of your pet
          </p>
        </div>
        <div className="services-content-item">
          <img src={Info} width="300" alt="GPS" />
          <p>
            We provide every information regarding your pet on how to take his
            care and what are his needs.
          </p>
        </div>
        <div className="services-content-item">
          <img src={GPS} width="200" alt="GPS" />
          <p>
            The location of nearby doctors and hospitals for the treatment and
            well-being of your pet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
