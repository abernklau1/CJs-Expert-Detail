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
      <div className="btn-container">
        <button className="btn">Schedule</button>
      </div>
    </section>
  );
};

export default ServiceCard;
