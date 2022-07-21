import { GiSpray } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoSparklesSharp } from "react-icons/io5";

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
    </section>
  );
};

export default Home;
