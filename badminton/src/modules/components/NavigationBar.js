import { useMemo } from "react";
import PropTypes from "prop-types";

const NavigationBar = ({
  className = "",
  propWidth,
  propOverflow,
  propFlex,
  propMinWidth,
  propHeight,
  propWidth1,
  propFlex1,
  propMinWidth1,
  propAlignSelf,
  propFlex2,
  propDisplay,
  propMinWidth2,
  propHeight1,
  propWidth2,
  propFlex3,
  propMinWidth3,
  propAlignSelf1,
  propFlex4,
  propDisplay1,
  propMinWidth4,
  propHeight2,
  propWidth3,
  propFlex5,
  propMinWidth5,
  propAlignSelf2,
  propFlex6,
  propDisplay2,
  propMinWidth6,
}) => {
  const navigationBarStyle = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propOverflow, propFlex, propMinWidth]);

  const buttonAboutStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propHeight, propWidth1, propFlex1, propMinWidth1]);

  const aboutUsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex2,
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propAlignSelf, propFlex2, propDisplay, propMinWidth2]);

  const buttonBookingStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth2,
      flex: propFlex3,
      minWidth: propMinWidth3,
    };
  }, [propHeight1, propWidth2, propFlex3, propMinWidth3]);

  const bookingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      flex: propFlex4,
      display: propDisplay1,
      minWidth: propMinWidth4,
    };
  }, [propAlignSelf1, propFlex4, propDisplay1, propMinWidth4]);

  const buttonContactStyle = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth3,
      flex: propFlex5,
      minWidth: propMinWidth5,
    };
  }, [propHeight2, propWidth3, propFlex5, propMinWidth5]);

  const contactUsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex6,
      display: propDisplay2,
      minWidth: propMinWidth6,
    };
  }, [propAlignSelf2, propFlex6, propDisplay2, propMinWidth6]);

  return (
    <div
      className={`w-[-809px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[43px] text-left text-6xl text-black font-inria-serif mq825:gap-[21px] ${className}`}
      style={navigationBarStyle}
    >
      <div
        className="h-[66px] w-[146px] flex flex-row items-start justify-start py-[18px] px-[21px] box-border relative whitespace-nowrap shrink-0"
        style={buttonAboutStyle}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gainsboro" />
        <a
          className="[text-decoration:none] self-stretch flex-1 relative font-bold text-[inherit] z-[1]"
          style={aboutUsStyle}
        >
          About us
        </a>
      </div>
      <div
        className="h-[66px] w-[146px] flex flex-row items-start justify-start py-[18px] px-[25px] box-border relative shrink-0"
        style={buttonBookingStyle}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gainsboro" />
        <a
          className="[text-decoration:none] self-stretch flex-1 relative font-bold text-[inherit] z-[1] mq450:text-xl"
          style={bookingStyle}
        >
          Booking
        </a>
      </div>
      <div
        className="h-[66px] w-[146px] flex flex-row items-start justify-start py-[18px] px-[11px] box-border relative whitespace-nowrap shrink-0"
        style={buttonContactStyle}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gainsboro" />
        <a
          className="[text-decoration:none] self-stretch flex-1 relative font-bold text-[inherit] z-[1]"
          style={contactUsStyle}
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propOverflow: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex2: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth2: PropTypes.any,
  propFlex3: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFlex4: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth4: PropTypes.any,
  propHeight2: PropTypes.any,
  propWidth3: PropTypes.any,
  propFlex5: PropTypes.any,
  propMinWidth5: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propFlex6: PropTypes.any,
  propDisplay2: PropTypes.any,
  propMinWidth6: PropTypes.any,
};

export default NavigationBar;
