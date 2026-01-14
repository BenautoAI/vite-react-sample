import ViteWithFei from '../../components/ViteWithFei';
import FeiAvatar from '../../components/FeiAvatar';

function ViteFeiShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vite + Fei Avatar Integration
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          The magical wizard robot mascot meets Vite
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Vite with Fei Combined */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Combined Vite + Fei Logo</h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <ViteWithFei size={256} />
              <p className="text-sm text-gray-600 text-center">
                The Fei avatar integrated into the Vite lightning logo
              </p>
            </div>
          </div>

          {/* Standalone Fei Avatar */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Standalone Fei Avatar</h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <FeiAvatar size={256} />
              <p className="text-sm text-gray-600 text-center">
                The wizard robot character with TV screen head and four welcoming arms
              </p>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Size Variations</h2>
          <div className="flex items-end justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <ViteWithFei size={64} />
              <span className="text-xs text-gray-500">64px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ViteWithFei size={96} />
              <span className="text-xs text-gray-500">96px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ViteWithFei size={128} />
              <span className="text-xs text-gray-500">128px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ViteWithFei size={192} />
              <span className="text-xs text-gray-500">192px</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Scalable SVG</h3>
            <p className="text-gray-600 text-sm">
              Vector graphics ensure crisp rendering at any size without quality loss
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">🧙</div>
            <h3 className="font-semibold text-lg mb-2">Magical Theme</h3>
            <p className="text-gray-600 text-sm">
              Wizard hat with celestial decorations (moons and stars) adds mystical charm
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-lg mb-2">Tech Robot</h3>
            <p className="text-gray-600 text-sm">
              Retro TV screen head represents technology and developer tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViteFeiShowcase;
