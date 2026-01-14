import WizardRobot from '../../components/WizardRobot';

function WizardRobotPage() {
  return (
    <div className='
      wizard-robot-page__container
      min-h-screen
      bg-gradient-to-br
      from-gray-900
      via-purple-900
      to-violet-900
      p-8
    '>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-white mb-4'>
            Wizard Robot Mascot
          </h1>
          <p className='text-xl text-purple-200'>
            A magical retro-futuristic character combining technology and fantasy
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Large display */}
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30 shadow-2xl'>
            <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
              Main Display
            </h2>
            <div className='flex justify-center'>
              <WizardRobot size={400} />
            </div>
          </div>

          {/* Medium display */}
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30 shadow-2xl'>
            <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
              Medium Size
            </h2>
            <div className='flex justify-center'>
              <WizardRobot size={300} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Small displays */}
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 shadow-xl'>
            <h3 className='text-lg font-semibold text-white mb-4 text-center'>
              Small Icon
            </h3>
            <div className='flex justify-center'>
              <WizardRobot size={200} />
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 shadow-xl'>
            <h3 className='text-lg font-semibold text-white mb-4 text-center'>
              Thumbnail
            </h3>
            <div className='flex justify-center'>
              <WizardRobot size={150} />
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-300/30 shadow-xl'>
            <h3 className='text-lg font-semibold text-white mb-4 text-center'>
              Mini Avatar
            </h3>
            <div className='flex justify-center'>
              <WizardRobot size={100} />
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className='mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30 shadow-2xl'>
          <h2 className='text-3xl font-bold text-white mb-6 text-center'>
            Character Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-4xl mb-3'>🎩</div>
              <h3 className='text-lg font-semibold text-purple-200 mb-2'>Wizard Hat</h3>
              <p className='text-sm text-purple-300'>
                Decorated with stars and moons
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-3'>📺</div>
              <h3 className='text-lg font-semibold text-purple-200 mb-2'>TV Screen Face</h3>
              <p className='text-sm text-purple-300'>
                Retro television display
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-3'>🤖</div>
              <h3 className='text-lg font-semibold text-purple-200 mb-2'>Robot Body</h3>
              <p className='text-sm text-purple-300'>
                Wooden vintage aesthetic
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-3'>✨</div>
              <h3 className='text-lg font-semibold text-purple-200 mb-2'>Four Arms</h3>
              <p className='text-sm text-purple-300'>
                Mechanical limbs with gloves
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardRobotPage;
