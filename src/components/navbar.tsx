import logo from "../assets/logo.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

const Navbar = () => {
  return (
    <div className="w-[88%] flex flex-row border-2 border-[#3A3A3A] bg-[#101010] lg:w-[50%] rounded-full p-2 items-center justify-between mx-auto mb-3 lg:mb-2.5 text-white box-border">
      <img src={logo} className="w-[150px] h-[35px]" alt="logo" />
      <div className="hidden lg:flex flex-row font-nunito items-center justify-between border-x-2 border-[#3A3A3A] p-3 text-sm text-[#898989] box-border lg:w-[45%]">
        <p>About</p>
        <p>Process</p>
        <p>Spotlights</p>
        <p>Contact Us</p>
      </div>
      <div className="hidden border border-[#3A3A3A] rounded-full lg:flex flex-row lg:w-[30%] gap-2 p-1">
        <img src={apple} alt="" className="w-[40px] h-[40px]" />
        <img src={google} alt="" className="w-[150px] h-[40px]" />
      </div>
    </div>
  );
};

export default Navbar;
// w-[60%] shadow-xl shadow-[#E5BF8B1F] shadow-xl shadow-[#E5BF8B1F]
