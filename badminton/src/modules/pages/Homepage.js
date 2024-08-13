import Header from "../components/Header";
import Section from "../components/Section";
import NavigationBar from "../components/NavigationBar";
import ButtonBooking from "../components/ButtonBooking";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[403.4px] box-border gap-[189.5px] leading-[normal] tracking-[normal] text-left text-6xl text-black font-inria-serif mq450:gap-6 mq825:gap-[47px] mq1425:gap-[95px]">
      <main className="w-[1440px] flex flex-col items-start justify-start shrink-0 max-w-full">
        <Header />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/adsimacontent@2x.png"
        />
        <Section />
      </main>
      <div className="h-[115px] w-[430px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border max-w-[calc(100%_-_2547px)] shrink-0 lg:max-w-full mq450:max-w-full mq825:max-w-full mq1425:max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <div className="w-[728px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border max-w-[calc(100%_-_2249px)] shrink-0 lg:max-w-[calc(100%_-_619px)] mq450:max-w-[calc(100%_-_619px)] mq825:max-w-[calc(100%_-_619px)] mq1425:max-w-[calc(100%_-_619px)]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[492px] shrink-0 max-w-full mq450:gap-[123px] mq825:gap-[246px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[43px]">
            <NavigationBar />
            <div className="h-11 w-[161px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <a className="[text-decoration:none] self-stretch flex-1 relative font-bold text-[inherit] mq450:text-xl">
                  Login/Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="w-[336px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
            <ButtonBooking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
