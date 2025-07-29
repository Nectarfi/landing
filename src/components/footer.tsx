

const BottomFooter = () => {
  return (
    <div className="bg-black pt-8 pb-24 px-4 md:px-8 lg:px-16 relative">
      {/* Giant background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="text-[200px] text-gray-700 font-bold">
          NectarFi
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left column - App download */}
          <div>
            <div className="flex gap-4 mb-6">
              <img 
                src="/images/app-screenshot.jpg" 
                alt="NectarFi App" 
                className="w-32 h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/piggy-bank.jpg" 
                alt="Savings" 
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Download App</h3>
            
            <div className="flex gap-3">
              {/* iOS App Store Button */}
              <a 
                href="#" 
                className="flex items-center bg-white rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="black">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-600">Download on the</span>
                  <span className="text-sm font-bold">APP STORE</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a 
                href="#" 
                className="flex items-center bg-white rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#00C853">
                  <path d="M3 20.5V3.5c0-.83.44-1.61 1.15-2.05L11.67 12 4.15 22.55C3.44 22.11 3 21.33 3 20.5zm11.33-8.5L3.85 1.15C4.06 1.05 4.28 1 4.5 1h15c.22 0 .44.05.65.15L9.33 12zm6.52 9.05C20.56 21.61 21 20.83 21 20V4c0-.83-.44-1.61-1.15-2.05L15.33 12l5.52 9.5zM8.33 12l7.5 9h-15c-.83 0-1.5-.67-1.5-1.5v-15L8.33 12z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-600">Download on the</span>
                  <span className="text-sm font-bold">GOOGLE PLAY</span>
                </div>
              </a>
            </div>
          </div>

          {/* Middle column - Site navigation */}
          <div className="md:px-8">
            <h3 className="text-2xl font-bold text-white mb-6">NectarFi</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#spotlights" className="text-gray-400 hover:text-white transition-colors">
                  Spotlights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right column - Info and social */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Info</h3>
            
            {/* Social media icons */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://twitter.com/nectarfi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F0B67F] rounded-full flex items-center justify-center hover:bg-[#E0A66F] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://medium.com/nectarfi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F0B67F] rounded-full flex items-center justify-center hover:bg-[#E0A66F] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" viewBox="0 0 24 24">
                  <path d="M13.5 19.5a6 6 0 0 0 6-6v-4a2 2 0 0 1 2-2V7a4 4 0 0 0-4-4C13.955 3 12 4.611 12 8v5.5a6 6 0 0 1-6 6H4v2h3.5a6 6 0 0 0 6-6v-5.5c0-2.122.716-3.5 2.5-3.5 1.73 0 2.5 1.689 2.5 3.5v5a4 4 0 0 1-4 4z" />
                </svg>
              </a>
              <a 
                href="https://t.me/nectarfi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F0B67F] rounded-full flex items-center justify-center hover:bg-[#E0A66F] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm3.566 8.16c.14-.072 1.34-.678 2.45-1.158 1.11-.48 2.026-.723 2.332-.678.136.02.396.156.34.594-.18.115-.08.417-.107.645-.16 1.27-.42 4.286-.595 5.726-.08.634-.223 1.1-.45 1.394-.232.302-.596.396-1.032.396-.428 0-1.213-.395-2.307-1.18-1.1-.787-1.71-1.22-2.743-1.973-1.28-.932-1.5-1.5-.064-2.67 1.446-1.175 3.92-3.196 4.116-3.48.16-.24.032-.36-.136-.302-1.12.39-2.88 1.825-3.884 2.483-.466.302-1.013.575-1.317.575-.304 0-.643-.08-1.03-.24-.417-.16-1.812-.725-2.093-.85-.288-.126-.756-.352-.686-.7.035-.17.24-.324.624-.47.8-.303 1.908-.706 2.73-.982.82-.277 2.79-.858 3.202-.982 1.553-.47 2.722-.47 3.058-.438z" />
                </svg>
              </a>
              
              {/* Active users indicator */}
              <div className="ml-2 pl-2 border-l border-gray-700 flex items-center">
                <div className="text-sm">
                  <div className="text-white font-bold">200+</div>
                  <div className="text-gray-400 text-xs">Active Community</div>
                </div>
                <div className="ml-2">
                  <div className="flex">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mx-0.5"></span>
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mx-0.5"></span>
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mx-0.5"></span>
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mx-0.5"></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Email */}
            {/* <div className="mb-8">
              <div className="text-gray-400 text-sm">E:</div>
              <a href="mailto:hello@nectarfi.com" className="text-white hover:text-[#F0B67F] transition-colors">
                hello@nectarfi.com
              </a>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Legal links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="/legal" className="text-gray-400 hover:text-white transition-colors">
              Legal Centre
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
          
          {/* Platform info */}
          <div className="bg-black border border-gray-800 rounded-lg px-6 py-2 flex items-center justify-center text-center mb-4 md:mb-0">
            <span className="text-[#F0B67F] mr-2">✨</span>
            <span className="text-white">NectarFi - Stablecoin Platform_USDC -</span>
            <span className="text-[#F0B67F] ml-2">✨</span>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            C'Node Technology solutions ltd
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;