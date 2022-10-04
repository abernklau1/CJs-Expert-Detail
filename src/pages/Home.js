import { GiSpray } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoSparklesSharp } from "react-icons/io5";
import { ServiceCard } from "../components";

const commonServices = [
  {
    name: "Interior",
    price: "$200",
    desc: ["Vacuum", "Shampoo", "Wipe down"],
  },
  {
    name: "Exterior",
    price: "$200",
    desc: ["Wash", "Polish", "Buff"]
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

const Home = () => {

  return (
    <section className="home content-container">
      <section className="opener">
        <div className="hero">
          <h1>
            Expert quality detailing with excellent customer service, the only
            place you can get both!
          </h1>
          <div class="btn-container">
            <a className="btn home-btn1" href="/services">Get Started</a>
            <a className="btn home-btn2" href="/contact">Contact</a>
          </div>
        </div>
      </section>
      <section class="atts">
        <div class="icons-and-desc">
          <div>
            <RiCustomerServiceFill />
            <p>Excellent Customer Service</p>
          </div>
          <div>
            <GiSpray />
            <p>Quality Products</p>
          </div>
          <div>
            <IoSparklesSharp />
            <p>Spotless Shine</p>
          </div>
        </div>
      </section>
      <section class="vid">
        <div>
          <iframe>
          </iframe>
        </div>
      </section>
      <section class="com-services">
        <h3>
          Common Services
        </h3>
        <p>Providing the best services possible</p>
        <div className="services-container">
          {commonServices.map((service, i) => {
            return <ServiceCard key={i} service={service} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default Home;
