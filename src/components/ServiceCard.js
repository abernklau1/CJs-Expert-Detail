const ServiceCard = ({ service }) => {
  return (
    <section className="card-container">
      <div className="service-price">
        <h2>{service.price}</h2>
        <p>{service.name}</p>
      </div>
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
    </section>
  );
};

export default ServiceCard;
