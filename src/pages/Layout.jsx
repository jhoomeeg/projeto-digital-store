import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Header key={location.search} cartCount={0} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
