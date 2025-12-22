import WizardCharacter from '../../components/WizardCharacter';

function WizardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-amber-900 mb-8">
          AutonomyAI Wizard
        </h1>
        
        <div className="flex justify-center mb-8">
          <WizardCharacter size="large" />
        </div>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Meet the magical wizard of code generation! This whimsical character represents
          the power of AI-driven development with a touch of enchantment.
        </p>
      </div>
    </div>
  );
}

export default WizardPage;
