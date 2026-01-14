import ViteFeiAvatar from '../../components/ViteFeiAvatar';

function ViteFeiAvatarDemo() {
  return (
    <div className="
      vite-fei-avatar-demo__container 
      min-h-screen 
      flex 
      flex-col 
      items-center 
      justify-center 
      bg-gray-50 
      p-8
    ">
      <div className="vite-fei-avatar-demo__header mb-8 text-center">
        <h1 className="text__title text-4xl font-bold mb-4 text-gray-800">
          Vite + Fei Avatar
        </h1>
        <p className="text__description text-lg text-gray-600">
          A magical wizard robot mascot combining Vite branding with a whimsical character design
        </p>
      </div>
      
      <div className="vite-fei-avatar-demo__showcase flex flex-col items-center gap-8">
        {/* Large showcase */}
        <div className="vite-fei-avatar-demo__main bg-white rounded-2xl shadow-xl p-8">
          <ViteFeiAvatar size={400} />
        </div>
        
        {/* Size variations */}
        <div className="vite-fei-avatar-demo__variations flex items-center gap-6 bg-white rounded-2xl shadow-lg p-6">
          <div className="vite-fei-avatar-demo__variation">
            <p className="text__label text-sm text-gray-500 mb-2 text-center">Small</p>
            <ViteFeiAvatar size={120} />
          </div>
          <div className="vite-fei-avatar-demo__variation">
            <p className="text__label text-sm text-gray-500 mb-2 text-center">Medium</p>
            <ViteFeiAvatar size={200} />
          </div>
          <div className="vite-fei-avatar-demo__variation">
            <p className="text__label text-sm text-gray-500 mb-2 text-center">Large</p>
            <ViteFeiAvatar size={280} />
          </div>
        </div>
      </div>
      
      <div className="vite-fei-avatar-demo__about mt-12 max-w-2xl text-center">
        <h2 className="text__subtitle text-2xl font-semibold mb-4 text-gray-800">About Fei</h2>
        <p className="text__content text-gray-600 leading-relaxed">
          Fei is a whimsical wizard robot character that represents the magical powers of Vite's 
          lightning-fast build tool. With a retro CRT monitor displaying the iconic Vite logo and 
          wearing a mystical wizard hat adorned with celestial symbols, Fei embodies both the 
          technological prowess and the enchanting developer experience that Vite provides.
        </p>
      </div>
    </div>
  );
}

export default ViteFeiAvatarDemo;
