import WizardMascot from '../../components/WizardMascot';

function WizardDemo() {
  return (
    <div 
      className="
        wizard-demo__container 
        flex 
        flex-col 
        items-center 
        w-full 
        min-h-screen
        bg-gradient-to-br 
        from-[#F5E6D3] 
        to-[#E8D4B8]
        p-[40px]
      "
    >
      <div className="wizard-demo__header text-center mb-10">
        <h1 className="
          text__title 
          text-6xl 
          font-bold 
          mb-4
          bg-gradient-to-r 
          from-[#3D5A7C] 
          via-[#4A6B8C] 
          to-[#3D5A7C]
          bg-clip-text
          text-transparent
        ">
          AutonomyAI's Wizard Mascot
        </h1>
        <p className="
          text__subtitle 
          text-xl 
          text-[#6B4E3D]
          mt-3
        ">
          The Magical Code Generation Assistant
        </p>
      </div>

      <div className="
        wizard-demo__main 
        flex 
        items-center 
        justify-center 
        w-full
        mb-10
      ">
        <WizardMascot width={600} height={600} />
      </div>

      <div className="
        wizard-demo__variants 
        flex 
        flex-row 
        items-center 
        justify-center 
        gap-10
        w-full
        mt-10
      ">
        <div className="
          variant__card 
          flex 
          flex-col 
          items-center
          bg-white
          rounded-lg
          p-[20px]
          shadow-lg
        ">
          <h3 className="
            text-xl 
            font-semibold 
            mb-4
            text-[#3D5A7C]
          ">
            Small Size
          </h3>
          <WizardMascot width={200} height={200} />
        </div>

        <div className="
          variant__card 
          flex 
          flex-col 
          items-center
          bg-white
          rounded-lg
          p-[20px]
          shadow-lg
        ">
          <h3 className="
            text-xl 
            font-semibold 
            mb-4
            text-[#3D5A7C]
          ">
            Medium Size
          </h3>
          <WizardMascot width={300} height={300} />
        </div>

        <div className="
          variant__card 
          flex 
          flex-col 
          items-center
          bg-white
          rounded-lg
          p-[20px]
          shadow-lg
        ">
          <h3 className="
            text-xl 
            font-semibold 
            mb-4
            text-[#3D5A7C]
          ">
            Tiny Size
          </h3>
          <WizardMascot width={100} height={100} />
        </div>
      </div>

      <div className="
        wizard-demo__footer 
        text-center 
        mt-16
      ">
        <p className="
          text-lg 
          text-[#6B4E3D]
          mb-3
        ">
          A whimsical tech wizard character combining retro aesthetics with magical elements
        </p>
        <p className="
          text-md 
          text-[#8B6F47]
        ">
          Perfect for branding, loading screens, and decorative elements
        </p>
      </div>
    </div>
  );
}

export default WizardDemo;
