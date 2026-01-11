import WizardRobot from '../../components/WizardRobot'

function WizardRobotDemo() {
  return (
    <div className="wizard-robot-demo flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Wizard Robot Character</h1>
        <p className="text-lg opacity-80">
          A whimsical mascot combining magical and technological themes
        </p>
      </div>

      <div className="flex flex-col items-center gap-12">
        {/* Default size */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">Default Size (400px)</h2>
          <WizardRobot />
        </div>

        {/* Different sizes showcase */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold">Various Sizes</h2>
          <div className="flex gap-8 items-end">
            <div className="flex flex-col items-center gap-2">
              <WizardRobot size={150} />
              <span className="text-sm opacity-70">150px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <WizardRobot size={250} />
              <span className="text-sm opacity-70">250px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <WizardRobot size={350} />
              <span className="text-sm opacity-70">350px</span>
            </div>
          </div>
        </div>

        {/* Use case examples */}
        <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold">Use Case Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Loading state */}
            <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center gap-4">
              <h3 className="text-xl font-medium">Loading State</h3>
              <WizardRobot size={200} />
              <p className="text-center opacity-80">
                Working some magic...
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-2 rounded-full animate-pulse w-3/4"></div>
              </div>
            </div>

            {/* Empty state */}
            <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center gap-4">
              <h3 className="text-xl font-medium">Empty State</h3>
              <WizardRobot size={200} />
              <p className="text-center opacity-80">
                No content to display yet
              </p>
              <button className="mt-2">Get Started</button>
            </div>

            {/* Welcome/Onboarding */}
            <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center gap-4">
              <h3 className="text-xl font-medium">Welcome Screen</h3>
              <WizardRobot size={200} />
              <p className="text-center opacity-80">
                Welcome to the magic of technology!
              </p>
              <button className="mt-2">Start Tour</button>
            </div>

            {/* Error state */}
            <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center gap-4">
              <h3 className="text-xl font-medium">Error State</h3>
              <WizardRobot size={200} />
              <p className="text-center opacity-80">
                Oops! The spell didn't work
              </p>
              <button className="mt-2">Try Again</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardRobotDemo;
