import { useAppContext } from "../context/appContext";

import { useState } from "react"

const ServiceCard = ({ service }) => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <section className="card-container">
      <div className={isActive ? "service-price active" : "service-price"} onClick={handleClick}>
        <h2>{service.price}</h2>
        <p>{service.name}</p>
      </div>
      <div className={isActive ? "bottom-card active" : "bottom-card"}>
        <div className="service-desc">
          <ul>
            {service.desc.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <a className="btn" href="/">
          Schedule
        </a>
      </div>
    </section>
  );
};

export default ServiceCard;
