import WizardCharacter from '../../components/WizardCharacter';

function WizardPage() {
  return (
    <div className="wizardpage__container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#E8DCC8] to-[#D4C5B0]">
      <div className="wizardpage__content flex flex-col items-center">
        <div className="wizardpage__character mb-8">
          <WizardCharacter size={500} />
        </div>
        
        <div className="wizardpage__texts text-center">
          <h1 className="text__title text-5xl font-bold mb-4 text-[#3D5A80]">
            Welcome to Code Wizardry
          </h1>
          
          <p className="text__description text-xl text-[#6B4E3D] max-w-2xl mx-auto">
            Meet your friendly coding assistant - a magical blend of technology and wizardry, 
            ready to help you conjure up amazing code!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WizardPage;