import PropTypes from "prop-types";
import "./ButtonAbout.css";

const ButtonAbout = ({ className = "" }) => {
  return (
    <div className={`button-about ${className}`}>
      <div className="button-shapes" />
      <a className="about-us">About us</a>
    </div>
  );
};

ButtonAbout.propTypes = {
  className: PropTypes.string,
};

export default ButtonAbout;
