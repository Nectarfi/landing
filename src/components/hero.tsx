import { useState, useEffect } from "react";
import first from "../assets/hero-first.png";
import second from "../assets/hero-second.png";
import third from "../assets/hero-third.png";
import fourth from "../assets/hero-fourth.png";
import fifth from "../assets/hero-fifth.png";
import sixth from "../assets/hero-sixth.png";
// import Cookies from './cookies';

interface HeroSectionProps {
  onJoinWaitlist?: (email: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  const [email, setEmail] = useState("");
  const [currentCryptoIndex, setCurrentCryptoIndex] = useState(0);
  const cryptoSymbols = ["U", "US", "USD", "USDT", "USDC", "SOL", "NCT"];

  // Animation for the crypto symbols
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCryptoIndex((prevIndex) =>
        prevIndex === cryptoSymbols.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onJoinWaitlist && email) {
      onJoinWaitlist(email);
    }
  };

  return (
    <div className="bg-[#101010] min-h-screen flex flex-col items-center justify-center mb-10">
      {/* <div className="h-16 lg:w-[48%] mx-auto bg-gradient-to-b from-[#f5cb8d79] via-[#E5BF8B1F] to-[#101010]">
      </div> */}
      <div className="mb-6">
        <div className="w-[100%] rounded-lg border border-[#3A3A3A] flex items-center justify-center overflow-hidden p-1">
          <div className="crypto-animate">
            <span
              className="text-white text-3xl font-bold font-sora"
              style={{ display: "inline-block" }}
            >
              {cryptoSymbols[currentCryptoIndex]}
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 font-sora">
        <span className="text-[#E6C18A]">Nectar</span>
        <span className="text-white">Fi</span>
      </h1>
      <p className="text-[#D0D0D0] mb-6 lg:mb-12 text-center font-nunito">
        Save, Invest, and earn in USDC without risk!
      </p>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[28%] w-[84%] mb-6 flex sm:flex-row gap-4 border border-[#626262] rounded-full p-1"
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
            className="w-full bg-transparent py-2.5 pl-12 pr-4 text-[#B0B0B0] text-sm focus:outline-none focus:border-transparent font-nunito"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#3A3A3A] hover:bg-[#3A3A3A] text-[#FBFBFB] rounded-full transition-colors text-xs border border-[#626262] w-[38%] lg:w-[28%] font-sora"
        >
          Join Waitlist
        </button>
      </form>
      <p className="text-[#797979] text-sm text-center mb-16 font-nunito italic">
        Join in just 2 minutes, and stay updated on
        <br />
        everything NectarFi.
      </p>
      <div className="lg:flex flex-row pb-4 items-center w-full justify-center gap-4 hidden">
        <img
          src={first}
          alt="App Screenshot 1"
          className="flex-none lg:w-[22%] md:w-[25%]"
        />
        <img
          src={second}
          alt="App Screenshot 2"
          className="flex-none lg:w-[22%] md:w-[25%]"
        />
        <img
          src={third}
          alt="App Screenshot 3"
          className="flex-none lg:w-[22%] md:w-[25%]"
        />
        <img
          src={fourth}
          alt="App Screenshot 4"
          className="flex-none lg:w-[22%] md:w-[25%]"
        />
        {/* <img src={} alt="App Screenshot 5" className="flex-none w-64 md:w-80 rounded-lg" /> */}
      </div>
      {/* <Cookies /> */}
      <div className="lg:hidden flex flex-col gap-4 ">
        <img src={fifth} className="w-[50%] mx-auto" />
        <img src={sixth} className="" />
      </div>
    </div>
  );
};

export default HeroSection;

// shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] shadow-[#E5BF8B1F]
