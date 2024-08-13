import PropTypes from "prop-types";

const Section = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-row items-start justify-between pt-2 pb-[1116.6px] pl-[78px] pr-[71px] box-border max-w-full gap-5 text-left text-6xl text-black font-times-new-roman mq825:pl-[39px] mq825:pr-[35px] mq825:pb-[472px] mq825:box-border mq1425:flex-wrap mq1425:pt-5 mq1425:pb-[726px] mq1425:box-border ${className}`}
    >
      <div className="w-[507px] flex flex-col items-start justify-start pt-[67px] px-0 pb-0 box-border max-w-full">
        <div className="h-[121px] relative inline-block mq450:text-xl">
          <p className="m-0">
            <b>
              <span className="text-11xl">{`Find court nearby & suit for your need`}</span>
            </b>
            <span>
              <b>.</b>
            </span>
          </p>
          <p className="m-0">
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>{`Let’s play sport & stay stronger, healthy.`}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>Badminton court available near your location.</span>
            </span>
          </p>
        </div>
      </div>
      <div className="w-[278px] flex flex-col items-start justify-start pt-[94px] px-0 pb-0 box-border font-inria-serif">
        <div className="self-stretch flex flex-row items-start justify-start pt-[18.3px] px-[47px] pb-[18.2px] relative mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-full w-[244px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-mini bg-gainsboro" />
          <div className="flex flex-row items-start justify-start relative">
            <b className="relative z-[1] mq450:text-xl">Find court now</b>
            <img
              className="h-[39.6px] w-[49px] absolute !m-[0] top-[-5.1px] right-[-46px] overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="h-[255px] w-[291px] relative object-cover"
        loading="lazy"
        alt=""
        src="/1743d90f18ecb18b3d97c323a6c16e65-1@2x.png"
      />
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
