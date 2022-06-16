import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
