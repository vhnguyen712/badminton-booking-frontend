import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-lavenderblush overflow-hidden flex flex-row items-start justify-between pt-[39px] pb-10 pl-11 pr-12 box-border max-w-full gap-5 text-left text-6xl text-black font-inria-serif mq825:pl-[22px] mq825:pr-6 mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <img
        className="w-[430px] relative max-h-full object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className="w-[728px] flex flex-row items-start justify-start gap-[43px] max-w-full mq825:flex-wrap mq825:gap-[21px]">
        <NavigationBar
          propWidth="unset"
          propOverflow="unset"
          propFlex="1"
          propMinWidth="341px"
          propHeight="unset"
          propWidth1="unset"
          propFlex1="0.8387"
          propMinWidth1="109px"
          propAlignSelf="unset"
          propFlex2="unset"
          propDisplay="inline-block"
          propMinWidth2="103px"
          propHeight1="unset"
          propWidth2="unset"
          propFlex3="0.7742"
          propMinWidth3="109px"
          propAlignSelf1="unset"
          propFlex4="unset"
          propDisplay1="inline-block"
          propMinWidth4="95px"
          propHeight2="unset"
          propWidth3="unset"
          propFlex5="1"
          propMinWidth5="109px"
          propAlignSelf2="unset"
          propFlex6="unset"
          propDisplay2="inline-block"
          propMinWidth6="124px"
        />
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
          <div className="flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative font-bold text-[inherit] mq450:text-xl">
              Login/Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
