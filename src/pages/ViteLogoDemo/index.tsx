import ViteLogo from '../../components/ViteLogo';

function ViteLogoDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Vite Logo Showcase
        </h1>

        {/* Default Size */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Default Size (100px)</h2>
          <ViteLogo />
        </div>

        {/* Different Sizes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Various Sizes</h2>
          <div className="flex items-center justify-around flex-wrap gap-6">
            <div className="text-center">
              <ViteLogo size={50} />
              <p className="mt-2 text-sm text-gray-600">50px</p>
            </div>
            <div className="text-center">
              <ViteLogo size={100} />
              <p className="mt-2 text-sm text-gray-600">100px</p>
            </div>
            <div className="text-center">
              <ViteLogo size={150} />
              <p className="mt-2 text-sm text-gray-600">150px</p>
            </div>
            <div className="text-center">
              <ViteLogo size={200} />
              <p className="mt-2 text-sm text-gray-600">200px</p>
            </div>
          </div>
        </div>

        {/* With Custom Styling */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">With Custom Background</h2>
          <ViteLogo size={120} className="bg-gray-900 p-8 rounded-xl" />
        </div>

        {/* Horizontal Layout */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Horizontal Layout</h2>
          <div className="flex items-center justify-center gap-4">
            <ViteLogo size={80} />
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Vite</h3>
              <p className="text-gray-600">Next Generation Frontend Tooling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViteLogoDemo;
