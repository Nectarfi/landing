import { useState } from "react";
import star from "../assets/stars.png";
import target from "../assets/target.png";
import designtools from "../assets/designtools.png";
import cube from "../assets/3dcube.png";
import rocket from "../assets/rocket.png";

interface AdvantagesSectionProps {
  onJoinWaitlist?: (email: string) => void;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({
  onJoinWaitlist,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onJoinWaitlist && email) {
      onJoinWaitlist(email);
    }
  };

  return (
    <section className="bg-[#101010] lg:py-16 px-4 md:px-8 lg:px-16 relative">
      {/* Background Text/Logo (semi-transparent) */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="text-[#F0B67F] text-[200px] font-bold transform -rotate-12 whitespace-nowrap">
          NectarFi Stablecoins
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mx-auto lg:w-[12%] w-[45%]">
        <div className="inline-flex gap-1.5 items-center rounded-full py-1.5 px-2.5 border border-[#626262] bg-gradient-to-r from-[#313131] to-[#CACACA] ">
          <img src={star} alt="star" className="w-4 h-4" />
          <span className="text-[#FDFDFD] font-nunito font-bold text-sm">
            Your Advantage
          </span>
        </div>
        </div>
        

        {/* Section Title */}
        <h2 className="text-4xl lg:text-6xl text-white text-center font-sora font-extrabold lg:my-4 my-2.5">
          The NectarFi Advantage.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:mt-16 mt-8 lg:w-[94%] lg:h-[175px] mx-auto">
          <div className="border-0 lg:border-r border-[#3A3A3A] flex flex-col items-center lg:items-start lg:pr-3">
           <img src={target} className="w-[32px] h-[32px] lg:mb-2"/>
            <h3 className="lg:text-2xl text-xl font-medium text-[#F9EEE0] mb-2 font-sora lg:text-left text-center">
              Protection against currency devaluation.
            </h3>
            <p className="text-[#CACACA] font-nunito text-sm lg:text-left text-center">
              Convert your money to stablecoins (USDC) that maintain their value
              regardless of local economic conditions
            </p>
          </div>

          <div className="border-0 lg:border-r border-[#3A3A3A] flex flex-col items-center lg:px-3">
          <img src={designtools} className="w-[32px] h-[32px] lg:mb-2"/>
            <h3 className="lg:text-2xl text-xl font-medium text-[#F9EEE0] mb-2 font-sora">
              Global financial opportunities
            </h3>
            <p className="text-[#CACACA] font-nunito text-sm text-center">
              Put your stablecoins to work in Solana DeFi vaults and earn yields
              higher than traditional banks.
            </p>
          </div>

          <div className="flex flex-col lg:items-end items-center">
          <img src={cube} className="w-[32px] h-[32px] lg:mb-2"/>
            <h3 className="lg:text-2xl text-xl font-medium text-[#F9EEE0] mb-2 font-sora">
              Seamless mobile experience
            </h3>
            <p className="text-[#CACACA] font-nunito text-sm lg:text-right text-center">
              Manage everything from your mobile phone. From currency conversion
              to investing in DeFi opportunities
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-[#3A3A3A] hidden lg:block lg:my-4 w-[65%] mx-auto"></div>

        {/* Fast and Secure */}
        <div className="flex flex-col items-center lg:mt-12 lg:mb-6 mt-10 mb-3">
        <img src={rocket} className="w-[32px] h-[32px] mb-2"/>
          <h3 className="lg:text-2xl text-xl font-medium text-[#F9EEE0] lg:mb-4 text-center font-sora">
            Fast and Secure
          </h3>
          <p className="text-[#CACACA] text-center max-w-2xl font-nunito text-sm lg:text-base">
            Built on the Solana blockchain for speed. This means, you never have
            to worry about data breach, delayed transaction and the traditional
            hassle that comes with savings.
          </p>
        </div>

        {/* Email Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex lg:flex-col mx-auto border border-[#626262] rounded-full p-1 lg:w-[32%]"
        >
          <div className="relative flex-grow">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent rounded-full py-2 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F0B67F] focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#3A3A3A] border border-[#626262] text-[#FBFBFB] font-medium lg:py-3 lg:px-6 px-1.5 rounded-full transition-colors font-sora text-xs"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdvantagesSection;
