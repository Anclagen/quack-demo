import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
