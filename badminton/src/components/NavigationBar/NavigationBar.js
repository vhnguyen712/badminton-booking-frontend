import { useCallback } from "react";
import ButtonAbout from "../Button/btnAbout/ButtonAbout";
import ButtonBooking1 from "../Button/btnBooking1/ButtonBooking1";
import ButtonContact from "../Button/btnContact/ButtonContact";
import Login from "../Button/btnLogin/Login";
import PropTypes from "prop-types";
import "./NavigationBar.css";

const NavigationBar = ({ className = "" }) => {
  const onNavigationBarContainerClick = useCallback(() => {
    // Please sync "AboutUs" to the project
  }, []);

  return (
    <div
      className={`navigation-bar ${className}`}
      onClick={onNavigationBarContainerClick}
    >
      <ButtonAbout />
      <ButtonBooking1 />
      <ButtonContact />
      <div className="login-wrapper">
        <Login />
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;
