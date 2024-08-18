import { useCallback } from "react";
import PropTypes from "prop-types";
import "./ButtonBooking1.css";

const ButtonBooking1 = ({ className = "" }) => {
  const onButtonBookingContainerClick = useCallback(() => {
    // Please sync "BookingPage" to the project
  }, []);

  return (
    <div
      className={`button-booking ${className}`}
      onClick={onButtonBookingContainerClick}
    >
      <div className="button-booking-child" />
      <a className="booking">Booking</a>
    </div>
  );
};

ButtonBooking1.propTypes = {
  className: PropTypes.string,
};

export default ButtonBooking1;
