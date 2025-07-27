import React, { useState } from 'react';

interface FooterSectionProps {
  onJoinWaitlist?: (email: string) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ onJoinWaitlist }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onJoinWaitlist && email) {
      onJoinWaitlist(email);
    }
  };

  return (
    <footer className=" pt-16 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Waitlist Container */}
        <div className="bg-[#111] rounded-3xl p-8 md:p-12 mb-24 border border-gray-800">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Join waitlist</h2>
            <p className="text-gray-400">
              Be the first to know anything Nectar!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
            <div className="relative flex-grow">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F0B67F] focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            Follow Us
          </h2>

          {/* Social Links */}
          <div className="space-y-6">
            {/* X/Twitter */}
            <a 
              href="https://twitter.com/nectarfi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-6 border-b border-gray-800 group"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-white font-medium group-hover:text-[#F0B67F] transition-colors">
                  X (twitter)
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform group-hover:translate-x-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>

            {/* Medium */}
            <a 
              href="https://medium.com/nectarfi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-6 border-b border-gray-800 group"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-white font-medium group-hover:text-[#F0B67F] transition-colors">
                  Medium
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform group-hover:translate-x-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/nectarfi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-6 border-b border-gray-800 group"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-white font-medium group-hover:text-[#F0B67F] transition-colors">
                  Telegram
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform group-hover:translate-x-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;