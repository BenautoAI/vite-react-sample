import WizardRobot from '../../components/WizardRobot'

function WizardRobotPage() {
  return (
    <div className='wizard-robot-page__container w-full min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='page__header mb-8'>
        <h1 className='page__title text-4xl font-bold mb-2'>Dancing Wizard Robot</h1>
        <p className='page__subtitle text-lg text-gray-400'>
          A magical AI companion celebrating with Vite!
        </p>
      </div>

      <WizardRobot size={500} />

      <div className='page__description mt-8 max-w-2xl text-center'>
        <p className='text-base text-gray-300'>
          Watch Fei the wizard robot dance with joy, holding Vite logos in its hands!
          This magical companion combines the mystical powers of ancient wizardry with
          cutting-edge technology. With its vintage monitor display and celestial
          wizard hat adorned with stars and moons, it celebrates the speed and
          power of Vite with an energetic dance routine!
        </p>
      </div>
    </div>
  )
}

export default WizardRobotPage
