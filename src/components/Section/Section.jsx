import { Link } from "react-router-dom";
import "./Section.css";

const Section = ({ title, titleAlign = "left", link, children }) => (
  <section className="section">
    <div className={`section-header section-header-${titleAlign}`}>
      <h2>{title}</h2>
      {link && (/^(https?:)?\/\//i.test(link.href) ? (
        <a className="section-link" href={link.href} target="_blank" rel="noreferrer">
          {link.text}
        </a>
      ) : (
        <Link className="section-link" to={link.href}>{link.text}</Link>
      ))}
    </div>
    <div className="section-content">{children}</div>
  </section>
);

export default Section;
