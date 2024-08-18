import { useCallback } from "react";
import ButtonBooking from "./ButtonBooking";
import PropTypes from "prop-types";
import "./ButtonFind.css";

const ButtonFind = ({ className = "" }) => {
  const onButtonFindContainerClick = useCallback(() => {
    // Please sync "BookingPage" to the project
  }, []);

  return (
    <div
      className={`button-find ${className}`}
      onClick={onButtonFindContainerClick}
    >
      <ButtonBooking />
    </div>
  );
};

ButtonFind.propTypes = {
  className: PropTypes.string,
};

export default ButtonFind;
