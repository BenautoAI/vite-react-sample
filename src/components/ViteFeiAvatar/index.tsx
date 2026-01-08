function ViteFeiAvatar() {
  return (
    <div className="
      vite-fei-avatar__container
      flex
      justify-center
      items-center
      py-10
    ">
      <div className="vite-fei-avatar__wrapper relative inline-block">
        {/* Outer circular border with Fei-themed gradient */}
        <div className="
          vite-fei-avatar__outer-circle
          rounded-full
          w-80
          h-80
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-purple-400
          via-pink-300
          to-blue-400
          p-1
          shadow-xl
          hover:scale-105
          transition-transform
          duration-300
        ">
          {/* Inner white circle for contrast */}
          <div className="
            vite-fei-avatar__inner-circle
            rounded-full
            w-full
            h-full
            bg-amber-50
            flex
            items-center
            justify-center
            p-8
          ">
            {/* Fei Avatar Character Holding Vite Logo */}
            <div className="vite-fei-avatar__character-container relative w-full h-full flex flex-col items-center justify-center">
              
              {/* Wizard Hat */}
              <div className="vite-fei-avatar__hat absolute -top-4 w-32 h-20 flex items-end justify-center">
                <svg viewBox="0 0 100 80" className="w-full h-full">
                  {/* Hat brim */}
                  <ellipse cx="50" cy="65" rx="50" ry="10" fill="#4A5568" stroke="#2D3748" strokeWidth="2"/>
                  {/* Hat cone */}
                  <path d="M 20 65 Q 30 20, 50 5 Q 70 20, 80 65 Z" fill="#5A67D8" stroke="#2D3748" strokeWidth="2"/>
                  {/* Star decoration */}
                  <polygon points="50,25 52,32 59,32 53,37 55,44 50,39 45,44 47,37 41,32 48,32" fill="#F6E05E"/>
                  {/* Moon decoration */}
                  <path d="M 30 40 Q 28 35, 32 32 Q 28 32, 28 37 Q 28 42, 32 42 Q 28 45, 30 40" fill="#F6E05E"/>
                </svg>
              </div>

              {/* Robot Head/Screen */}
              <div className="vite-fei-avatar__screen relative w-32 h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg border-4 border-amber-800 shadow-lg mt-12 flex items-center justify-center">
                <div className="vite-fei-avatar__screen-content w-full h-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded m-1 flex items-center justify-center">
                  <div className="vite-fei-avatar__screen-shine absolute top-2 left-2 right-8 h-6 bg-white opacity-30 rounded"></div>
                </div>
                {/* Button */}
                <div className="absolute -bottom-3 w-6 h-6 bg-amber-600 rounded-full border-2 border-amber-800"></div>
              </div>

              {/* Robot Body with Arms */}
              <div className="vite-fei-avatar__body relative flex items-start justify-center mt-2">
                {/* Left Arm */}
                <div className="vite-fei-avatar__left-arm absolute -left-16 top-4 w-16 h-3 bg-gray-800 rounded-full transform rotate-45 origin-right">
                  <div className="absolute -left-1 -top-2 w-5 h-5 bg-gray-800 rounded"></div>
                  {/* Left Hand */}
                  <div className="absolute -left-8 -top-4 w-10 h-8">
                    <svg viewBox="0 0 40 35" className="w-full h-full">
                      <ellipse cx="20" cy="20" rx="8" ry="12" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      {/* Fingers */}
                      <ellipse cx="14" cy="12" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      <ellipse cx="20" cy="10" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      <ellipse cx="26" cy="12" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                {/* Right Arm */}
                <div className="vite-fei-avatar__right-arm absolute -right-16 top-4 w-16 h-3 bg-gray-800 rounded-full transform -rotate-45 origin-left">
                  <div className="absolute -right-1 -top-2 w-5 h-5 bg-gray-800 rounded"></div>
                  {/* Right Hand */}
                  <div className="absolute -right-8 -top-4 w-10 h-8">
                    <svg viewBox="0 0 40 35" className="w-full h-full">
                      <ellipse cx="20" cy="20" rx="8" ry="12" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      {/* Fingers */}
                      <ellipse cx="14" cy="12" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      <ellipse cx="20" cy="10" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                      <ellipse cx="26" cy="12" rx="2" ry="5" fill="#F7FAFC" stroke="#2D3748" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                {/* Vite Logo - Held by the hands */}
                <div className="vite-fei-avatar__logo-container relative z-10 mt-8">
                  <img 
                    src="/vite.svg" 
                    alt="Vite Logo" 
                    className="vite-fei-avatar__logo w-20 h-20 object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Robot Legs */}
              <div className="vite-fei-avatar__legs flex gap-4 mt-4">
                {/* Left Leg */}
                <div className="vite-fei-avatar__left-leg flex flex-col items-center">
                  <div className="w-3 h-8 bg-gray-800 rounded"></div>
                  <div className="w-6 h-6 bg-amber-800 rounded transform rotate-45 -mt-1"></div>
                </div>
                {/* Right Leg */}
                <div className="vite-fei-avatar__right-leg flex flex-col items-center">
                  <div className="w-3 h-8 bg-gray-800 rounded"></div>
                  <div className="w-6 h-6 bg-amber-800 rounded transform rotate-45 -mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Fei avatar overlay (optional corner badge) */}
        <div className="
          vite-fei-avatar__badge
          absolute
          -bottom-2
          -right-2
          w-16
          h-16
          rounded-full
          bg-gradient-to-br
          from-teal-400
          via-blue-500
          to-purple-600
          border-4
          border-white
          shadow-lg
          flex
          items-center
          justify-center
          text-white
          font-bold
          text-xs
        ">
          <span className="vite-fei-avatar__badge-text text-center">FEI</span>
        </div>
      </div>
    </div>
  );
}

export default ViteFeiAvatar;
