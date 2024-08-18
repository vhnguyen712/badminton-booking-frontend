import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ className = "" }) => {
  return (
    <div className={`login ${className}`}>
      <div className="login1">
        <a className="loginsign-up">Login/Sign Up</a>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
