import WizardMascot from '../../components/WizardMascot';

function WizardPage() {
  return (
    <div className='
      wizard-page
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      p-8
    '>
      <div className='wizard-page__header mb-8'>
        <h1 className='text-4xl font-bold mb-4'>AutonomyAI Wizard</h1>
        <p className='text-xl text-gray-400'>Your magical AI coding assistant</p>
      </div>
      
      <div className='wizard-page__mascot flex justify-center items-center'>
        <WizardMascot size={500} />
      </div>

      <div className='wizard-page__footer mt-8'>
        <p className='text-lg text-gray-400'>Ready to help you with your code!</p>
      </div>
    </div>
  );
}

export default WizardPage;
