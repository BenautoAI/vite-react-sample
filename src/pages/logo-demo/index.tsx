import ViteWithFeiLogo from '../../components/ViteWithFeiLogo';
import FeiAvatar from '../../components/FeiAvatar';

function LogoDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vite + Fei Avatar Demo
          </h1>
          <p className="text-gray-600">
            Showcasing the Fei wizard robot avatar alongside the Vite logo
          </p>
        </div>

        {/* Combined Logos Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Combined Logo Variations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Horizontal Layout */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 w-full flex justify-center items-center min-h-[200px]">
                <ViteWithFeiLogo size={120} layout="horizontal" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700">Horizontal</h3>
                <p className="text-sm text-gray-500">Side by side layout</p>
              </div>
            </div>

            {/* Vertical Layout */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 w-full flex justify-center items-center min-h-[200px]">
                <ViteWithFeiLogo size={100} layout="vertical" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700">Vertical</h3>
                <p className="text-sm text-gray-500">Stacked layout</p>
              </div>
            </div>

            {/* Overlay Layout */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 w-full flex justify-center items-center min-h-[200px]">
                <ViteWithFeiLogo size={120} layout="overlay" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700">Overlay</h3>
                <p className="text-sm text-gray-500">Fei on top of Vite</p>
              </div>
            </div>
          </div>
        </section>

        {/* Standalone Fei Avatar Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Fei Avatar Sizes
          </h2>
          
          <div className="flex flex-wrap items-end justify-center gap-8">
            <div className="flex flex-col items-center space-y-2">
              <FeiAvatar size={60} />
              <span className="text-sm text-gray-600">60px</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <FeiAvatar size={100} />
              <span className="text-sm text-gray-600">100px</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <FeiAvatar size={150} />
              <span className="text-sm text-gray-600">150px</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <FeiAvatar size={200} />
              <span className="text-sm text-gray-600">200px</span>
            </div>
          </div>
        </section>

        {/* Hero Display Section */}
        <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-2xl shadow-lg p-12 text-white">
          <div className="flex flex-col items-center text-center space-y-6">
            <ViteWithFeiLogo size={180} layout="horizontal" />
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Meet Fei - Your Wizard Guide
              </h2>
              <p className="text-lg text-purple-100">
                A magical robot companion powered by Vite's lightning-fast build system
              </p>
            </div>
          </div>
        </section>

        {/* Usage Examples Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Usage Examples
          </h2>
          
          <div className="space-y-6">
            {/* Navigation Bar Example */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Navigation Bar</h3>
              <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
                <ViteWithFeiLogo size={40} layout="horizontal" />
                <div className="flex gap-4">
                  <button className="text-gray-300 hover:text-white px-3 py-2">Home</button>
                  <button className="text-gray-300 hover:text-white px-3 py-2">About</button>
                  <button className="text-gray-300 hover:text-white px-3 py-2">Contact</button>
                </div>
              </div>
            </div>

            {/* Loading State Example */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Loading State</h3>
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
                <FeiAvatar size={80} className="animate-pulse" />
                <p className="text-gray-600">Loading your magical experience...</p>
              </div>
            </div>

            {/* Card Example */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Feature Card</h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 flex items-start gap-4">
                <FeiAvatar size={60} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Powered by Vite</h4>
                  <p className="text-gray-600">
                    Experience lightning-fast hot module replacement and optimized builds 
                    with Vite's next-generation frontend tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogoDemoPage;
