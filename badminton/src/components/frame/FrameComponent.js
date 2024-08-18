import Header from "../Header/Header";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header />
      <img
        className="outdoor-badminton-court-1-icon"
        loading="lazy"
        alt=""
        src="/outdoorbadmintoncourt-1@2x.png"
      />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
