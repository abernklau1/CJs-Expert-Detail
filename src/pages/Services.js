import { ServiceCard } from "../components";


const services = [
  {
    name: "Interior",
    price: "$200",
    desc: ["Vacuum", "Shampoo", "Wipe down"],
  },
  {
    name: "Full Detail",
    price: "$350",
    desc: [
      "Everything Interior offers plus...",
      "Polish",
      "Engine bay wipe down",
      "Wheel clean and shine",
    ],
  },
]

const Services = () => {

  return (
    <section className="services content-container">
      <h2>
        Have a car that needs a bit of a shine?
      </h2>
      <p>We offer a few different services to clean your car.
        If you find one you like go ahead and click the 'schedule' button on the card of the service you desire.</p>
      <div className="services-container">
        {services.map((service, i) => {
          return <ServiceCard key={i} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
