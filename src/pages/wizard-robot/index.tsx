import WizardRobot from '../../components/WizardRobot'

function WizardRobotPage() {
  return (
    <div className='wizard-robot-page__container w-full min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='page__header mb-8'>
        <h1 className='page__title text-4xl font-bold mb-2'>Wizard Robot</h1>
        <p className='page__subtitle text-lg text-gray-400'>
          A magical AI companion with retro charm
        </p>
      </div>

      <WizardRobot size={500} />

      <div className='page__description mt-8 max-w-2xl text-center'>
        <p className='text-base text-gray-300'>
          This wizard robot combines the mystical powers of ancient wizardry with
          cutting-edge technology. With its vintage monitor display and celestial
          wizard hat adorned with stars and moons, it's ready to help you with
          your coding magic!
        </p>
      </div>
    </div>
  )
}

export default WizardRobotPage
