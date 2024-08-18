import NavigationBar from "../NavigationBar/NavigationBar";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="logo">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
      </div>
      <div className="navigation-bar-wrapper">
        <NavigationBar />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
