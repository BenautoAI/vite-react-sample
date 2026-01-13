import WizardTV from '../../components/WizardTV';

function WizardPage() {
  return (
    <div className='
      wizard-page__container 
      flex 
      flex-col 
      items-center 
      justify-center 
      min-h-screen 
      p-8
    '>
      <div className='wizard-page__content max-w-2xl w-full'>
        <h1 className='text-4xl font-bold text-center mb-8'>
          Wizard TV Character
        </h1>
        
        <div className='wizard-page__display flex justify-center'>
          <WizardTV size={500} />
        </div>
        
        <div className='wizard-page__description mt-8 text-center'>
          <p className='text-lg opacity-80'>
            A magical wizard character with a vintage television for a head,
            adorned with a celestial hat decorated with stars and moons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WizardPage;
