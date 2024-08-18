import PropTypes from "prop-types";
import "./ButtonContact.css";

const ButtonContact = ({ className = "" }) => {
  return (
    <div className={`button-contact ${className}`}>
      <div className="button-contact-child" />
      <a className="contact-us">Contact us</a>
    </div>
  );
};

ButtonContact.propTypes = {
  className: PropTypes.string,
};

export default ButtonContact;
