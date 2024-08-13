import PropTypes from "prop-types";

const ButtonBooking = ({ className = "" }) => {
  return (
    <div
      className={`h-[67px] flex-1 relative text-left text-6xl text-black font-inria-serif ${className}`}
    >
      <div className="absolute h-full w-[87.77%] top-[0px] right-[0%] bottom-[0px] left-[12.23%] rounded-mini bg-gainsboro" />
      <b className="absolute h-[45.52%] w-[63.31%] top-[27.31%] left-[16.91%] inline-block z-[1] mq450:text-xl">
        Find court now
      </b>
      <img
        className="absolute h-[59.1%] w-[17.63%] top-[19.7%] right-[3.24%] bottom-[21.19%] left-[79.14%] max-w-full overflow-hidden max-h-full z-[2]"
        alt=""
        src="/arrowright-1.svg"
      />
    </div>
  );
};

ButtonBooking.propTypes = {
  className: PropTypes.string,
};

export default ButtonBooking;
