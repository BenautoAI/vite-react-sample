interface WizardCharacterProps {
  size?: 'small' | 'medium' | 'large';
}

function WizardCharacter(props: WizardCharacterProps) {
  const size = props.size || 'medium';
  const sizeClasses = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[32rem] h-[32rem]'
  };

  return (
    <div className={`wizard__container relative ${sizeClasses[size]} flex items-center justify-center`}>
      {/* Background circle */}
      <div className="wizard__background absolute inset-0 rounded-full border-4 border-red-600 bg-gradient-to-b from-amber-50 to-stone-200" />
      
      {/* Horizontal dividing line */}
      <div className="wizard__divider absolute top-1/2 left-0 right-0 h-0.5 bg-amber-900 z-10" />
      
      {/* Character container */}
      <div className="wizard__body relative z-20 flex flex-col items-center justify-center">
        
        {/* Wizard Hat */}
        <div className="wizard__hat relative mb-4">
          {/* Hat cone */}
          <div className="hat__cone relative w-24 h-32">
            {/* Main hat body */}
            <div className="hat__body absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-800 transform rotate-3" 
                 style={{
                   clipPath: 'polygon(50% 0%, 20% 100%, 80% 100%)',
                 }}>
            </div>
            
            {/* Hat decorations - stars and moons */}
            <div className="hat__decoration absolute top-8 left-1/2 -translate-x-1/2 text-yellow-400 text-2xl">★</div>
            <div className="hat__decoration absolute top-16 left-2 text-yellow-400 text-xl">☾</div>
            <div className="hat__decoration absolute top-4 right-2 text-yellow-400 text-lg">★</div>
          </div>
          
          {/* Hat brim */}
          <div className="hat__brim absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full border-4 border-blue-900">
            {/* Brim decorations */}
            <div className="brim__decoration absolute top-1/2 -translate-y-1/2 left-4 text-yellow-400 text-sm">☾</div>
            <div className="brim__decoration absolute top-1/2 -translate-y-1/2 right-4 text-yellow-400 text-sm">★</div>
          </div>
        </div>

        {/* TV/Monitor Body */}
        <div className="wizard__monitor relative mt-8">
          {/* Outer frame */}
          <div className="monitor__frame w-40 h-32 bg-gradient-to-b from-amber-700 to-amber-900 rounded-2xl border-4 border-amber-950 p-3">
            {/* Inner screen */}
            <div className="monitor__screen w-full h-full bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-lg relative overflow-hidden">
              {/* Screen reflection effect */}
              <div className="screen__reflection absolute top-2 left-2 w-16 h-12 bg-white/30 rounded-lg" />
              <div className="screen__reflection absolute bottom-3 right-3 w-12 h-8 bg-white/20 rounded-md" />
            </div>
          </div>
          
          {/* Control button */}
          <div className="monitor__button absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full border-2 border-amber-950" />
        </div>

        {/* Arms */}
        <div className="wizard__arms absolute top-[60%] left-0 right-0 flex justify-between px-2">
          {/* Left arm set */}
          <div className="arm__left flex flex-col gap-1">
            {/* Upper arm */}
            <div className="arm__segment w-16 h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full -rotate-12 origin-right" />
            {/* Lower arm */}
            <div className="arm__segment w-16 h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full -rotate-12 origin-right ml-1" />
          </div>
          
          {/* Right arm set */}
          <div className="arm__right flex flex-col gap-1 items-end">
            {/* Upper arm */}
            <div className="arm__segment w-16 h-2 bg-gradient-to-l from-gray-800 to-gray-700 rounded-full rotate-12 origin-left" />
            {/* Lower arm */}
            <div className="arm__segment w-16 h-2 bg-gradient-to-l from-gray-800 to-gray-700 rounded-full rotate-12 origin-left mr-1" />
          </div>
        </div>

        {/* Hands */}
        <div className="wizard__hands absolute top-[65%] left-0 right-0 flex justify-between">
          {/* Left hand */}
          <div className="hand__left relative -left-12">
            <div className="flex gap-1">
              <div className="hand__finger w-3 h-6 bg-stone-200 rounded-full border-2 border-gray-700 rotate-12" />
              <div className="hand__finger w-3 h-6 bg-stone-200 rounded-full border-2 border-gray-700 rotate-6" />
              <div className="hand__finger w-3 h-5 bg-stone-200 rounded-full border-2 border-gray-700 rotate-3" />
            </div>
          </div>
          
          {/* Right hand */}
          <div className="hand__right relative -right-12">
            <div className="flex gap-1">
              <div className="hand__finger w-3 h-5 bg-stone-200 rounded-full border-2 border-gray-700 -rotate-3" />
              <div className="hand__finger w-3 h-6 bg-stone-200 rounded-full border-2 border-gray-700 -rotate-6" />
              <div className="hand__finger w-3 h-6 bg-stone-200 rounded-full border-2 border-gray-700 -rotate-12" />
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className="wizard__legs absolute top-[75%] flex gap-4">
          <div className="leg__segment w-3 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm" />
          <div className="leg__segment w-3 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-sm" />
        </div>

        {/* Feet */}
        <div className="wizard__feet absolute top-[88%] flex gap-4">
          <div className="foot__segment w-6 h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-md border-2 border-amber-950" />
          <div className="foot__segment w-6 h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-md border-2 border-amber-950" />
        </div>
      </div>
    </div>
  );
}

export default WizardCharacter;
