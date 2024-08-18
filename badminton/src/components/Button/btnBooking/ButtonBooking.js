import PropTypes from "prop-types";
import "./ButtonBooking.css";

const ButtonBooking = ({ className = "" }) => {
  return (
    <div className={`button-booking1 ${className}`}>
      <div className="booking-shape" />
      <b className="find-court-now">{`Find court now -> `}</b>
      <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
    </div>
  );
};

ButtonBooking.propTypes = {
  className: PropTypes.string,
};

export default ButtonBooking;
