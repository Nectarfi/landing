import first from "../assets/spot-first.png";
import second from "../assets/spot-second.png";
import third from "../assets/spot-third.png";
import fourth from "../assets/spot-fourth.png";
import fifth from "../assets/spot-fifth.png";
import sixth from "../assets/spot-sixth.png";

const SpotlightSection = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16 relative">
      {/* Background element - Similar to the previous section */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="text-[#F0B67F] text-[200px] font-bold transform rotate-12 whitespace-nowrap">
          Stablecoins USDC
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Blog Tag */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-gray-700 rounded-full px-4 py-2">
            <span className="text-gray-300 mr-2">✏️</span>
            <span className="text-white">Blog</span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
          Spotlight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={first}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl"
          />
          <img
            src={second}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl shadow-sm border"
          />
          <img
            src={third}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl"
          />
          <img
            src={fourth}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl border"
          />
          <img
            src={fifth}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl"
          />
          <img
            src={sixth}
            alt="Spotlight"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
