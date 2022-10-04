import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="footer">
      <div class="navigation">
        <div class="services-nav">
          <a href="/services"><h2>Services</h2></a>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="contacts-nav">
          <a href="/contact">Contact</a>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="about-nav">
          <a href="/about">About</a>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="contacts">
        <div class="footer-icons">
        </div>
      </div>
      <div class="copyright">
        <BiCopyright />
        Andrew Bernklau 2022
      </div>
    </section>
  );
};

export default Footer;
