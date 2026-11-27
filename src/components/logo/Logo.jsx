import logoFooter from "../../assets/logo-footer.svg";
import logoHeader from "../../assets/logo-header.svg";

import "./Logo.css";
// A logo pode aparecer tanto no header quanto no footer
const Logo = ({ variant = "header" }) => {
  const logoSource = variant === "footer" ? logoFooter : logoHeader;

  return (
    <img
      className="logo"
      src={logoSource}
      alt="foto da logo"
      width={253}
      height={44}
    />
  );
};

export default Logo;
