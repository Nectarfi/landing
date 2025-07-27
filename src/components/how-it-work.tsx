import { useState } from "react";
import first from "../assets/works-first.png";
import second from "../assets/works-second.png";
import third from "../assets/works-third.png";
import google from "../assets/google.png";
import apple from "../assets/apple-store.png";
import star from "../assets/stars.png";

const HowItWorks = () => {
  const [step, setStep] = useState<number>(1);

  const moveForward = () => {
    if (step === 3) {
      return;
    }
    setStep(step + 1);
  };

  const moveBack = () => {
    if (step === 1) {
      return;
    }
    setStep(step - 1);
  };

  return (
    <section className="bg-[#101010] py-8 lg:py-16 px-4 md:px-8 lg:px-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center lg:mb-7">
          <div className="inline-flex gap-1.5 items-center rounded-full py-1.5 px-2.5 border border-[#626262] bg-gradient-to-r from-[#313131] to-[#CACACA]">
            <img src={star} alt="star" className="w-4 h-4" />
            <span className="text-[#FDFDFD] font-nunito font-bold text-sm">
              Process
            </span>
          </div>
        </div>

        <h2 className="lg:text-6xl text-4xl font-bold text-[#FDFDFD] text-center font-sora mt-3.5 lg:mt-0">
          How it works
        </h2>
        <p className="text-[#797979] text-center font-nunito lg:my-6 my-2">
          Install mobile app, to experience it firsthand.
        </p>

        <div className="flex flex-row items-center gap-1.5 border-[#3A3A3A] p-1.5 border rounded-full box-border lg:w-[21%] w-[78%] mx-auto my-6 lg:my-0">
          <img src={apple} alt="Apple" className="w-[120px] h-[40px]" />
          <img src={google} alt="Google" className="w-[130px] h-[40px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-[#040404] p-2.5 lg:p-2 lg:mt-14 lg:w-[75%] mx-auto">
          <div className="relative lg:w-[88%]">
            <img
              src={step == 1 ? first : step == 2 ? second : third}
              alt="NectarFi App"
              className="w-full lg:h-[450px] rounded-2xl h-[200px]"
            />
          </div>

          <div className="">
            <div className="flex items-center mb-8 font-nunito gap-2 w-[80%] text-sm lg:text-base">
              <div
                className={`w-2 h-2 rounded-full ${
                  step === 1 ? "bg-[#FDFDFD]" : "bg-[#626262]"
                }`}
              ></div>

              <p
                className={`${
                  step === 1 ? "text-[#FDFDFD]" : "text-[#626262]"
                }`}
              >
                Download
              </p>
              <div className="flex-1 h-px bg-[#3A3A3A]"></div>

              <div
                className={`w-2 h-2 rounded-full ${
                  step === 2 ? "bg-[#FDFDFD]" : "bg-[#626262]"
                }`}
              ></div>
              <p
                className={`${
                  step === 2 ? "text-[#FDFDFD]" : "text-[#626262]"
                }`}
              >
                Add funds
              </p>
              <div className="flex-1 h-px bg-[#3A3A3A]"></div>
              <div
                className={`w-2 h-2 rounded-full ${
                  step === 3 ? "bg-[#FDFDFD]" : "bg-[#626262]"
                }`}
              ></div>

              <p
                className={`${
                  step === 3 ? "text-[#FDFDFD]" : "text-[#626262]"
                }`}
              >
                Earn
              </p>
            </div>
            <hr className="border border-[#3A3A3A]" />

            <div className="lg:my-6 font-bold font-sora my-3">
              <h3 className="text-[#3A3A3A] lg:text-6xl text-5xl">
                {step === 1 ? "01" : step === 2 ? "02" : "03"}
              </h3>
              <h4 className="text-[#CACACA] lg:text-4xl mt-2 text-2xl">
                {step === 1
                  ? "Download App."
                  : step === 2
                  ? "Easily Top-up funds."
                  : "Save and earn."}
              </h4>
            </div>

            <div className="flex flex-col text-white font-nunito lg:gap-5 gap-3">
              <div className="flex flex-row items-center gap-2 lg:py-3.5 border-b border-[#3A3A3A]">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <p className="">
                  {step === 1
                    ? "NectarFi on your Android or Apple store."
                    : step === 2
                    ? "Top up your Nectar wallet with your local currency."
                    : "Choose from our DeFi vaults."}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:py-3.5 border-b border-[#3A3A3A]">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <p className="">
                  {step === 1
                    ? "Connect your TipLink account."
                    : step === 2
                    ? "Converts to stablecoin (USDC, USDT) with best rates."
                    : "Earn and monitor your yields from the app in real-time."}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:py-3.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <p className="">
                  {step === 1
                    ? "Complete verification and setup security measures."
                    : step === 2
                    ? "Safe from local currency fluctuations."
                    : "Withdraw anytime you want."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:mt-10 space-x-4 mt-5">
          <button
            className={`w-12 h-12 rounded-full ${
              step === 1
                ? "border-[#3A3A3A] text-[#3A3A3A]"
                : "text-[#E5BA7F] border-[#E5BA7F] hover:bg-[#E5BA7F] hover:text-black"
            } border  flex items-center justify-center transition-colors`}
            onClick={moveBack}
            disabled={step === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`w-12 h-12 rounded-full ${
              step === 3
                ? "border-[#3A3A3A] text-[#3A3A3A]"
                : "text-[#E5BA7F] border-[#E5BA7F] hover:bg-[#E5BA7F] hover:text-black"
            } border border-[#3A3A3A] flex items-center justify-center transition-colors`}
            onClick={moveForward}
            disabled={step === 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
