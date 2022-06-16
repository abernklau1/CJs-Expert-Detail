import { ServiceCard } from "../components";
import { useAppContext } from "../context/appContext";

const Services = () => {
  const { services } = useAppContext();

  return (
    <section className="services content-container">
      Services
      <div className="services-container">
        {services.map((service, i) => {
          return <ServiceCard key={i} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
