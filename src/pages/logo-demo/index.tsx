import ViteLogo from '../../components/ViteLogo';
import FeiAvatar from '../../components/FeiAvatar';

function LogoDemoPage() {
  return (
    <div className="logo-demo__page min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Vite Logo with Fei Avatar
          </h1>
          <p className="text-gray-600 text-lg">
            A magical combination of Vite's lightning-fast build tool and our wizard mascot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Combined Logo */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Combined Logo
            </h2>
            <div className="flex justify-center items-center">
              <ViteLogo width={300} height={300} showFeiAvatar={true} />
            </div>
            <p className="text-gray-600 text-center mt-6">
              Vite logo integrated with Fei Avatar
            </p>
          </div>

          {/* Original Vite Logo */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Original Vite Logo
            </h2>
            <div className="flex justify-center items-center">
              <ViteLogo width={300} height={300} showFeiAvatar={false} />
            </div>
            <p className="text-gray-600 text-center mt-6">
              Classic Vite branding
            </p>
          </div>
        </div>

        {/* Standalone Fei Avatar */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Standalone Fei Avatar
          </h2>
          <div className="flex justify-center items-center">
            <FeiAvatar width={300} height={300} />
          </div>
          <p className="text-gray-600 text-center mt-6">
            The wizard robot mascot - our magical coding companion
          </p>
        </div>

        {/* Size Variations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Size Variations
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <ViteLogo width={100} height={100} showFeiAvatar={true} />
              <p className="text-gray-600 text-sm mt-2">Small (100px)</p>
            </div>
            <div className="text-center">
              <ViteLogo width={150} height={150} showFeiAvatar={true} />
              <p className="text-gray-600 text-sm mt-2">Medium (150px)</p>
            </div>
            <div className="text-center">
              <ViteLogo width={200} height={200} showFeiAvatar={true} />
              <p className="text-gray-600 text-sm mt-2">Large (200px)</p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Usage Examples
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">As a Favicon/Icon</h3>
              <div className="flex items-center gap-4">
                <ViteLogo width={64} height={64} showFeiAvatar={true} />
                <p className="text-gray-600 text-sm">Perfect for browser tabs and app icons</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">As a Header Logo</h3>
              <div className="flex items-center gap-4">
                <ViteLogo width={120} height={120} showFeiAvatar={true} />
                <p className="text-gray-600 text-sm">Ideal for navigation bars and headers</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">As a Loading Screen</h3>
              <div className="flex items-center gap-4">
                <ViteLogo width={250} height={250} showFeiAvatar={true} />
                <p className="text-gray-600 text-sm">Great for splash screens and loading states</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 mt-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Fully Customizable</h3>
              <p className="text-sm opacity-90">
                Adjust size, toggle Fei Avatar, and add custom styling
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">SVG-Based</h3>
              <p className="text-sm opacity-90">
                Scalable vector graphics ensure crisp rendering at any size
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧙</div>
              <h3 className="font-semibold mb-2">Magical Branding</h3>
              <p className="text-sm opacity-90">
                Combines Vite's speed with wizard-themed personality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoDemoPage;
