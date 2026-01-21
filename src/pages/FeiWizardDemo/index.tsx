import FeiWizardLogo from '../../components/FeiWizardLogo';

function FeiWizardDemo() {
  return (
    <div className="
      fei-wizard-demo 
      min-h-screen 
      bg-gradient-to-br 
      from-purple-100 
      via-blue-50 
      to-pink-100 
      flex 
      flex-col 
      items-center 
      justify-center 
      p-8
    ">
      <div className="
        text-center 
        mb-12
      ">
        <h1 className="
          text-5xl 
          font-bold 
          text-purple-900 
          mb-4
        ">
          Fei the Wizard
        </h1>
        <p className="
          text-xl 
          text-gray-700 
          mb-2
        ">
          Vite's Magical Assistant
        </p>
        <p className="
          text-md 
          text-gray-600
        ">
          Combining the power of Vite with a touch of magic ✨
        </p>
      </div>

      <div className="
        bg-white 
        rounded-3xl 
        shadow-2xl 
        p-12 
        mb-8
      ">
        <FeiWizardLogo size={400} />
      </div>

      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-3 
        gap-6 
        max-w-4xl
      ">
        <div className="
          bg-white 
          rounded-xl 
          shadow-lg 
          p-6 
          text-center 
          hover:shadow-2xl 
          transition-shadow
        ">
          <div className="
            text-4xl 
            mb-3
          ">⚡</div>
          <h3 className="
            text-lg 
            font-bold 
            text-purple-900 
            mb-2
          ">Lightning Fast</h3>
          <p className="
            text-gray-600 
            text-sm
          ">
            Powered by Vite's instant dev server
          </p>
        </div>

        <div className="
          bg-white 
          rounded-xl 
          shadow-lg 
          p-6 
          text-center 
          hover:shadow-2xl 
          transition-shadow
        ">
          <div className="
            text-4xl 
            mb-3
          ">🔮</div>
          <h3 className="
            text-lg 
            font-bold 
            text-purple-900 
            mb-2
          ">Magical Tools</h3>
          <p className="
            text-gray-600 
            text-sm
          ">
            Wizardry meets modern development
          </p>
        </div>

        <div className="
          bg-white 
          rounded-xl 
          shadow-lg 
          p-6 
          text-center 
          hover:shadow-2xl 
          transition-shadow
        ">
          <div className="
            text-4xl 
            mb-3
          ">🎩</div>
          <h3 className="
            text-lg 
            font-bold 
            text-purple-900 
            mb-2
          ">Enchanted Build</h3>
          <p className="
            text-gray-600 
            text-sm
          ">
            Optimized production builds with a spell
          </p>
        </div>
      </div>

      <div className="
        mt-12 
        flex 
        gap-4
      ">
        <FeiWizardLogo size={100} />
        <FeiWizardLogo size={150} />
        <FeiWizardLogo size={100} />
      </div>

      <div className="
        mt-8 
        text-center
      ">
        <p className="
          text-gray-500 
          text-sm
        ">
          Fei the Wizard mascot combines the iconic Vite logo with magical elements
        </p>
      </div>
    </div>
  );
}

export default FeiWizardDemo;
