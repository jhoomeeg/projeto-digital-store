import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import "./Footer.css";

const Information = ({ title, informations = [] }) => (
  <div className="footer-information">
    <h3>{title}</h3>
    {informations.map((item) => <Link key={item.text} to={item.link}>{item.text}</Link>)}
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-brand">
        <Logo variant="footer" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook"><img src={facebookIcon} alt="" /></a>
          <a href="https://instagram.com" aria-label="Instagram"><img src={instagramIcon} alt="" /></a>
          <a href="https://twitter.com" aria-label="Twitter"><img src={twitterIcon} alt="" /></a>
        </div>
      </div>
      <Information title="Informação" informations={[
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Segurança", link: "/seguranca" },
        { text: "Wishlist", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
      ]} />
      <Information title="Categorias" informations={[
        { text: "Camisetas", link: "/produtos" },
        { text: "Calças", link: "/produtos" },
        { text: "Bonés", link: "/produtos" },
        { text: "Headphones", link: "/produtos" },
        { text: "Tênis", link: "/produtos" },
      ]} />
      <div className="footer-contact">
        <h3>Contato</h3>
        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <a href="tel:+558530303030">(85) 3059-3030</a>
      </div>
    </div>
    <div className="container">
      <hr />
      <p className="footer-copy">© 2024 Digital Store</p>
    </div>
  </footer>
);

export { Information };
export default Footer;
