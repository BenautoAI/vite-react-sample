import FeiViteLogo from '../../components/FeiViteLogo';

function FeiViteLogoDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Fei Avatar Vite Logo
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          The magical Vite mascot - a wizard character with monitor head
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Default Size */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Default Size</h2>
            <div className="flex justify-center items-center h-48">
              <FeiViteLogo />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">150x180 pixels</p>
          </div>
          
          {/* Small Size */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Small Size</h2>
            <div className="flex justify-center items-center h-48">
              <FeiViteLogo width={100} height={120} />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">100x120 pixels</p>
          </div>
          
          {/* Large Size */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Large Size</h2>
            <div className="flex justify-center items-center h-48">
              <FeiViteLogo width={120} height={140} />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">120x140 pixels</p>
          </div>
          
          {/* Dark Background */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-white mb-4">Dark Background</h2>
            <div className="flex justify-center items-center h-48">
              <FeiViteLogo />
            </div>
            <p className="text-sm text-gray-300 mt-4 text-center">Looks great on dark backgrounds</p>
          </div>
          
          {/* Gradient Background */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-white mb-4">Gradient Background</h2>
            <div className="flex justify-center items-center h-48">
              <FeiViteLogo />
            </div>
            <p className="text-sm text-white mt-4 text-center">Works with colorful gradients</p>
          </div>
          
          {/* Extra Small for Icons */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Icon Size</h2>
            <div className="flex justify-center items-center h-48 gap-4">
              <FeiViteLogo width={64} height={76} />
              <FeiViteLogo width={48} height={58} />
              <FeiViteLogo width={32} height={38} />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">64px, 48px, 32px</p>
          </div>
        </div>
        
        {/* Usage Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Component Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✨</span>
              <span>Combines the iconic Vite logo with a magical wizard character</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🎨</span>
              <span>Features a retro monitor/TV screen with green gradient display</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🧙</span>
              <span>Wizard hat decorated with stars and crescent moons</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🤖</span>
              <span>Four cartoon arms with white gloves for a friendly appearance</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">👢</span>
              <span>Mechanical legs with brown boots complete the robot-wizard look</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">📏</span>
              <span>Customizable size with width and height props</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🎯</span>
              <span>Optional className prop for additional styling</span>
            </li>
          </ul>
          
          <div className="mt-6 bg-gray-50 rounded p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Example</h3>
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`import { FeiViteLogo } from './components/FeiViteLogo';

// Default size
<FeiViteLogo />

// Custom size
<FeiViteLogo width={200} height={240} />

// With custom className
<FeiViteLogo className="hover:scale-110 transition-transform" />`}
            </pre>
          </div>
        </div>
        
        {/* Hero Display */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-xl p-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Meet Fei - The Vite Wizard!
          </h2>
          <FeiViteLogo width={200} height={240} />
          <p className="text-white text-lg mt-6 text-center max-w-2xl">
            A whimsical mascot that combines cutting-edge technology with magical charm. 
            Perfect for representing the speed and magic of Vite development!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeiViteLogoDemo;
