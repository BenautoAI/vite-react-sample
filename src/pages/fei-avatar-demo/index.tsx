import FeiAvatar from '../../components/FeiAvatar'

function FeiAvatarDemo() {
  return (
    <div className="fei-avatar-demo min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Fei Avatar - Vite Wizard
          </h1>
          <p className="text-xl text-gray-600">
            The Vite logo transformed into a magical wizard character
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-8">
          <div className="flex flex-col items-center justify-center space-y-12">
            {/* Large Display */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Hero Size
              </h2>
              <div className="flex justify-center">
                <FeiAvatar size={300} />
              </div>
            </div>

            {/* Medium Sizes */}
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Medium Sizes
              </h2>
              <div className="flex justify-center items-center gap-12">
                <div className="text-center">
                  <FeiAvatar size={200} />
                  <p className="text-sm text-gray-500 mt-3">200px</p>
                </div>
                <div className="text-center">
                  <FeiAvatar size={150} />
                  <p className="text-sm text-gray-500 mt-3">150px</p>
                </div>
              </div>
            </div>

            {/* Small Sizes */}
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Small Sizes
              </h2>
              <div className="flex justify-center items-center gap-8">
                <div className="text-center">
                  <FeiAvatar size={100} />
                  <p className="text-sm text-gray-500 mt-3">100px</p>
                </div>
                <div className="text-center">
                  <FeiAvatar size={80} />
                  <p className="text-sm text-gray-500 mt-3">80px</p>
                </div>
                <div className="text-center">
                  <FeiAvatar size={60} />
                  <p className="text-sm text-gray-500 mt-3">60px</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎩</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Wizard Hat
            </h3>
            <p className="text-sm text-gray-600">
              Custom wizard hat with stars and moons decoration
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Vite Logo
            </h3>
            <p className="text-sm text-gray-600">
              Original Vite branding with gradient colors
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Scalable
            </h3>
            <p className="text-sm text-gray-600">
              SVG-based design that scales to any size
            </p>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
          <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm">
{`import FeiAvatar from './components/FeiAvatar';

function MyComponent() {
  return (
    <div>
      <FeiAvatar size={200} />
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default FeiAvatarDemo
