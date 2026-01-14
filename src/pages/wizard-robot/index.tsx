import WizardRobot from '../../components/WizardRobot';

function WizardRobotPage() {
  return (
    <div className="wizard-robot-page__container flex flex-col items-center justify-center min-h-screen p-8">
      <div className="wizard-robot-page__header mb-8">
        <h1 className="wizard-robot-page__title text-4xl font-bold text-center mb-4">
          Wizard Robot Character
        </h1>
        <p className="wizard-robot-page__subtitle text-center text-lg">
          A magical robot companion with a retro TV screen head
        </p>
      </div>

      <div className="wizard-robot-page__character-wrapper flex items-center justify-center">
        <WizardRobot size={600} />
      </div>

      <div className="wizard-robot-page__description mt-8 text-center">
        <p>
          This wizard robot character combines retro technology with magical elements, 
          featuring a vintage television screen as its head, a mystical hat adorned with 
          celestial symbols, and four welcoming arms ready to assist you on your journey.
        </p>
      </div>
    </div>
  );
}

export default WizardRobotPage;
