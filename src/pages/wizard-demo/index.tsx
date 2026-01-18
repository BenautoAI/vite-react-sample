import WizardRobot from '../../components/WizardRobot';

function WizardDemoPage() {
  return (
    <div 
      className="
        wizard-demo__container 
        w-full 
        min-h-screen 
        flex 
        flex-col 
        items-center 
        justify-center 
        bg-gradient-to-br 
        from-slate-800 
        to-slate-900 
        p-8
      "
    >
      <div 
        className="
          wizard-demo__header 
          mb-8 
          text-center
        "
      >
        <h1 
          className="
            text-4xl 
            font-bold 
            text-white 
            mb-2
          "
        >
          🧙 Wizard Robot
        </h1>
        <p 
          className="
            text-slate-300 
            text-lg
          "
        >
          A magical AI assistant ready to help
        </p>
      </div>

      <div 
        className="
          wizard-demo__main 
          bg-white 
          rounded-2xl 
          shadow-2xl 
          p-8
        "
      >
        <WizardRobot width={400} height={400} />
      </div>

      <div 
        className="
          wizard-demo__info 
          mt-8 
          max-w-2xl 
          text-center
        "
      >
        <p 
          className="
            text-slate-300 
            text-sm
          "
        >
          This wizard robot character combines retro technology with magical elements,
          featuring a TV screen head and a starry wizard hat.
        </p>
      </div>
    </div>
  );
}

export default WizardDemoPage;
