import first from "../assets/about-first.png";
import second from "../assets/about-second.png";
import third from "../assets/about-third.png";
import star from "../assets/stars.png";
import aboutstars from "../assets/about-star.png";
import share from "../assets/about-share.png";
import wallet from "../assets/wallet.png";

const AboutSection = () => {
  return (
    <section className="bg-[#2D2214] py-8 lg:py-16 px-4 md:px-8 lg:px-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center bg-[#42382A] bg-gradient-to-r from-[#4B3922] to-[#B18750] rounded-full p-1 lg:p-2 border border-[#4B3922] gap-1 lg:gap-2 lg:mb-8 mb-4">
              <img src={star} alt="star" className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-[#FDFDFD] font-bold font-nunito text-sm lg:text-base">
                About Us
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-sora">
              <span className="text-white">Nectar</span>
              <span className="text-[#F0B67F]">Fi</span>
            </h1>

            <h2 className="text-2xl text-[#A2A2A2] font-semibold my-4 font-sora">
              Save in USDC, earn high yields, and shield your savings from
              inflation.
            </h2>

            <p className="text-[#CFCFCF] mb-8 font-nunito text-sm">
              NectarFi is a decentralized finance (DeFi) platform that empowers
              you to save, earn and protect your assets using stablecoins. No
              crypto volatility, and no complex tools—just simple, financial
              solutions built on Solana for crypto newbies and experts.
            </p>

            <button className="bg-transparent text-sm border border-[#705632] text-[#F9EEE0] p-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-[#F0B67F] hover:text-[#32291E] transition-colors duration-300 font-sora">
              Read more
            </button>
          </div>

          <div className="hidden lg:flex h-[420px] gap-2 rounded-3xl overflow-hidden">
            <div className="w-1/3 h-full">
              <img
                src={first}
                alt="about first"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-1/3 h-full">
              <img
                src={second}
                alt="about second"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-2/3 h-full">
              <img
                src={third}
                alt="about third"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="lg:hidden flex flex-col gap-2">
            <div className="w-full h-[100px]">
              <img
                src={first}
                alt="about first"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full h-[100px]">
              <img
                src={second}
                alt="about second"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full h-[250px]">
              <img
                src={third}
                alt="about third"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 lg:mt-20">
          <div className="flex flex-row gap-2">
            <img src={aboutstars} alt="star" className="w-8 h-8" />
            <div className="flex flex-col gap-3">
              <h3 className="text-[#FDFDFD] font-semibold font-sora text-xl lg:text-base">
                Top 2% onchain saving platform
              </h3>
              <p className="text-[#CACACA] font-nunito lg:text-[13px]">
                With NectarFi you have nothing to worry about, save in your
                local currency and have it converted to USDC for longevity.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img src={share} alt="star" className="w-8 h-8" />
            <div className="flex flex-col gap-3">
              <h3 className="text-[#FDFDFD] font-semibold font-sora text-xl lg:text-base">
                100% Dedicated team
              </h3>
              <p className="text-[#CACACA] font-nunito lg:text-[13px]">
                We are a team of seasoned experts in our respective fields, we
                are partnering with industry experts to bridge the loss-gap.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img src={wallet} alt="star" className="w-8 h-8" />
            <div className="flex flex-col gap-3">
              <h3 className="text-[#FDFDFD] font-semibold font-sora text-xl lg:text-base">
                Withdraw anytime
              </h3>
              <p className="text-[#CACACA] font-nunito lg:text-[13px]">
                Unlike other saving platforms, even though we lock/hold your
                funds, you can always withdraw it in fewer steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
