import ViteFeiLogo from '../../components/ViteFeiLogo';

function ViteFeiShowcase() {
  return (
    <div className="vite-fei-showcase__container min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Vite + Fei Avatar
          </h1>
          <p className="text-xl text-gray-600">
            The magical wizard mascot for Vite ⚡✨
          </p>
        </div>

        {/* Horizontal Layout */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Horizontal Layout
          </h2>
          <div className="flex justify-center">
            <ViteFeiLogo size={300} layout="horizontal" />
          </div>
        </div>

        {/* Vertical Layout */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Vertical Layout
          </h2>
          <div className="flex justify-center">
            <ViteFeiLogo size={300} layout="vertical" />
          </div>
        </div>

        {/* Overlay Layout */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Overlay Layout
          </h2>
          <div className="flex justify-center">
            <ViteFeiLogo size={350} layout="overlay" />
          </div>
          <p className="text-center text-gray-500 mt-4">
            The Vite logo appears integrated into the wizard's screen
          </p>
        </div>

        {/* Fei Avatar Only */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Fei Avatar Only
          </h2>
          <div className="flex justify-center">
            <ViteFeiLogo size={400} showViteLogo={false} />
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Fei Avatar
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg">
              <strong>Fei Avatar</strong> is a wizard robot character that combines retro-futuristic aesthetics 
              with magical elements, perfect as a mascot for Vite's lightning-fast build tooling.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>TV Monitor Head:</strong> Features a green gradient display representing 
                Vite's fast and reactive nature
              </li>
              <li>
                <strong>Wizard Hat:</strong> Navy blue with golden stars and crescents symbolizing 
                the magical transformation and speed of Vite
              </li>
              <li>
                <strong>Four Robotic Arms:</strong> White-gloved hands in welcoming gestures 
                conveying friendliness and accessibility
              </li>
              <li>
                <strong>Retro-Futuristic Body:</strong> Bronze robotic construction with mechanical 
                feet, combining vintage charm with modern capability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViteFeiShowcase;
