
const TopShadowDemo = () => {
  return (
    <div className="bg-black min-h-screen text-white p-8">
      {/* Option 1: Custom box-shadow with arbitrary value */}
      <div className="mb-12">
        <h2 className="text-xl mb-4">Option 1: Custom box-shadow (arbitrary value)</h2>
        <div className="bg-gray-900 p-6 rounded shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
          This element has a shadow only at the top using custom box-shadow
        </div>
      </div>

      {/* Option 2: Using border-t with a gradient */}
      <div className="mb-12">
        <h2 className="text-xl mb-4">Option 2: Border-t with gradient</h2>
        <div className="bg-gray-900 p-6 rounded border-t border-t-gray-700/50">
          This element has a subtle top border that creates a shadow-like effect
        </div>
      </div>

      {/* Option 3: Using a pseudo-element */}
      <div className="mb-12">
        <h2 className="text-xl mb-4">Option 3: Pseudo-element approach</h2>
        <div className="relative bg-gray-900 p-6 rounded">
          <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-transparent to-gray-800 blur-sm"></div>
          This element has a shadow at the top using a pseudo-element with gradient
        </div>
      </div>

      {/* Option 4: For the Hero Section specifically */}
      <div>
        <h2 className="text-xl mb-4">Option 4: For Hero Section with top shadow</h2>
        <div className="relative mt-16">
          {/* Top shadow effect */}
          <div className="absolute -top-4 inset-x-0 h-4 bg-gradient-to-b from-black to-transparent"></div>
          
          {/* Hero content */}
          <div className="relative pt-6 flex flex-col items-center bg-gray-900 rounded">
            <div className="h-16 w-16 rounded-2xl border border-gray-700 flex items-center justify-center mb-8">
              <span className="text-white text-3xl font-bold">u</span>
            </div>
            <h1 className="text-5xl font-bold text-amber-200">NectarFi</h1>
            <p className="mt-4 text-xl">Save, Invest, and earn in USDC without risk!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopShadowDemo;