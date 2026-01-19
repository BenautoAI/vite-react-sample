import FeiViteLogo from '../../components/FeiViteLogo';

function FeiLogoDemo() {
  return (
    <div className="fei-logo-demo__container min-h-screen bg-gradient-to-br from-amber-50 to-stone-200 p-8">
      <div className="fei-logo-demo__content max-w-6xl mx-auto">
        <h1 className="fei-logo-demo__title text-4xl font-bold text-center mb-8 text-gray-800">
          Fei Wizard Avatar + Vite Logo
        </h1>
        
        <div className="fei-logo-demo__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Small Size */}
          <div className="fei-logo-demo__card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Small (150x150)</h2>
            <FeiViteLogo width={150} height={150} />
          </div>

          {/* Medium Size */}
          <div className="fei-logo-demo__card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Medium (200x200)</h2>
            <FeiViteLogo width={200} height={200} />
          </div>

          {/* Large Size */}
          <div className="fei-logo-demo__card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Large (250x250)</h2>
            <FeiViteLogo width={250} height={250} />
          </div>

          {/* Dark Background */}
          <div className="fei-logo-demo__card bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-white">On Dark Background</h2>
            <FeiViteLogo width={200} height={200} />
          </div>

          {/* Gradient Background */}
          <div className="fei-logo-demo__card bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-white">On Gradient</h2>
            <FeiViteLogo width={200} height={200} />
          </div>

          {/* Extra Large */}
          <div className="fei-logo-demo__card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Extra Large (300x300)</h2>
            <FeiViteLogo width={300} height={300} />
          </div>
        </div>

        {/* Usage Info */}
        <div className="fei-logo-demo__info mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Component</h2>
          <p className="text-gray-600 mb-4">
            The Fei Wizard Avatar combines the iconic Vite logo with a magical wizard character wearing a starry hat.
            This whimsical design features a retro monitor as the character's body with the Vite logo displayed on the screen,
            four welcoming arms with white gloves, and sturdy mechanical legs with boots.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Features:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Responsive sizing with customizable width and height props</li>
              <li>Wizard hat decorated with celestial moons and stars</li>
              <li>Retro monitor screen with green gradient display</li>
              <li>Vite logo integrated on the screen</li>
              <li>Four articulated arms with welcoming gestures</li>
              <li>Geometric background frame (Vitruvian-style composition)</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Usage:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800">
{`import FeiViteLogo from './components/FeiViteLogo';

<FeiViteLogo width={200} height={200} />`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeiLogoDemo;
