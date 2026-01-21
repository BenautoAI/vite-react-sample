interface WizardMascotProps {
  size?: number;
  className?: string;
}

function WizardMascot({ size = 400, className = '' }: WizardMascotProps) {
  return (
    <div className={`wizard-mascot__container ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className='wizard-mascot'
      >
        {/* Textured background circle */}
        <defs>
          {/* Define patterns and gradients */}
          <pattern id="paperTexture" patternUnits="userSpaceOnUse" width="400" height="400">
            <rect width="400" height="400" fill="#E8DCC0" />
            <circle cx="50" cy="50" r="1" fill="#C4A875" opacity="0.3" />
            <circle cx="150" cy="100" r="1" fill="#C4A875" opacity="0.3" />
            <circle cx="250" cy="150" r="1" fill="#C4A875" opacity="0.3" />
            <circle cx="100" cy="200" r="1" fill="#C4A875" opacity="0.3" />
            <circle cx="300" cy="250" r="1" fill="#C4A875" opacity="0.3" />
          </pattern>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A8D55F" />
            <stop offset="100%" stopColor="#7AB842" />
          </linearGradient>

          <radialGradient id="screenReflection" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background with texture */}
        <rect width="400" height="400" fill="url(#paperTexture)" />

        {/* Outer circle border */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="red" strokeWidth="5" />

        {/* Inner rectangle frame */}
        <rect x="50" y="150" width="300" height="200" fill="none" stroke="#6B4A4A" strokeWidth="2" />

        {/* Robot legs */}
        <g className="robot-legs">
          {/* Left leg */}
          <rect x="160" y="300" width="20" height="30" fill="#6B4E42" rx="3" />
          <rect x="155" y="325" width="30" height="20" fill="#7D5A48" rx="4" />
          
          {/* Right leg */}
          <rect x="220" y="300" width="20" height="30" fill="#6B4E42" rx="3" />
          <rect x="215" y="325" width="30" height="20" fill="#7D5A48" rx="4" />
        </g>

        {/* Robot body */}
        <g className="robot-body">
          <rect x="145" y="220" width="110" height="85" fill="#9B7762" rx="8" />
          <rect x="150" y="225" width="100" height="75" fill="#B5896B" rx="6" />
          
          {/* Chest button */}
          <circle cx="200" cy="280" r="10" fill="#C4A875" />
          <circle cx="200" cy="280" r="7" fill="#8B6F47" />
        </g>

        {/* Arms - Back pair (behind body) */}
        <g className="robot-arms-back">
          {/* Back left arm */}
          <line x1="150" y1="240" x2="100" y2="250" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          {/* Back left hand */}
          <g transform="translate(80, 240)">
            <ellipse cx="0" cy="0" rx="15" ry="12" fill="#E8E8E8" />
            <path d="M -8,-8 L -8,8 M -4,-10 L -4,10 M 0,-10 L 0,10 M 4,-10 L 4,10" 
                  stroke="#D0D0D0" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Back right arm */}
          <line x1="250" y1="240" x2="300" y2="250" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          {/* Back right hand */}
          <g transform="translate(320, 240)">
            <ellipse cx="0" cy="0" rx="15" ry="12" fill="#E8E8E8" />
            <path d="M -4,-10 L -4,10 M 0,-10 L 0,10 M 4,-10 L 4,10 M 8,-8 L 8,8" 
                  stroke="#D0D0D0" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* TV Screen head */}
        <g className="tv-head">
          {/* Outer frame */}
          <rect x="155" y="140" width="90" height="75" fill="#8B6F47" rx="8" />
          
          {/* Inner frame */}
          <rect x="162" y="147" width="76" height="61" fill="#6B4E42" rx="6" />
          
          {/* Screen */}
          <rect x="168" y="153" width="64" height="49" fill="url(#screenGradient)" rx="4" />
          
          {/* Screen reflections */}
          <ellipse cx="185" cy="165" rx="20" ry="15" fill="url(#screenReflection)" />
          
          {/* Screen content - abstract shapes */}
          <path d="M 175,170 Q 185,180 195,170 Q 200,165 205,172" 
                fill="none" stroke="#D4E89E" strokeWidth="2" opacity="0.6" />
          <ellipse cx="190" cy="185" rx="12" ry="8" fill="#E8F5B8" opacity="0.5" />
        </g>

        {/* Wizard hat */}
        <g className="wizard-hat">
          {/* Hat brim */}
          <ellipse cx="200" cy="145" rx="65" ry="15" fill="#3D5A7C" />
          <ellipse cx="200" cy="145" rx="60" ry="12" fill="#4A6B8F" />
          
          {/* Hat cone */}
          <path d="M 145,145 Q 200,50 230,130 L 220,140 Q 205,70 145,145" 
                fill="#3D5A7C" />
          <path d="M 150,145 Q 200,55 225,132 L 218,140 Q 205,75 150,145" 
                fill="#4A6B8F" />
          
          {/* Hat tip curl */}
          <path d="M 225,132 Q 240,125 250,115 Q 260,105 265,100 Q 270,95 265,90 Q 260,88 255,95" 
                fill="#3D5A7C" stroke="#2A3F5F" strokeWidth="2" />
          <path d="M 227,133 Q 242,126 252,116 Q 260,108 263,102" 
                fill="#4A6B8F" stroke="none" />

          {/* Stars on hat */}
          <g className="star" transform="translate(200, 100)">
            <path d="M 0,-5 L 1.5,-1.5 L 5,0 L 1.5,1.5 L 0,5 L -1.5,1.5 L -5,0 L -1.5,-1.5 Z" 
                  fill="#F4C542" />
          </g>
          <g className="star" transform="translate(180, 130)">
            <path d="M 0,-4 L 1.2,-1.2 L 4,0 L 1.2,1.2 L 0,4 L -1.2,1.2 L -4,0 L -1.2,-1.2 Z" 
                  fill="#F4C542" />
          </g>
          <g className="star" transform="translate(218, 115)">
            <path d="M 0,-4 L 1.2,-1.2 L 4,0 L 1.2,1.2 L 0,4 L -1.2,1.2 L -4,0 L -1.2,-1.2 Z" 
                  fill="#F4C542" />
          </g>
          <g className="star" transform="translate(252, 100)">
            <path d="M 0,-3.5 L 1,-1 L 3.5,0 L 1,1 L 0,3.5 L -1,1 L -3.5,0 L -1,-1 Z" 
                  fill="#F4C542" />
          </g>

          {/* Moons on hat */}
          <g className="moon" transform="translate(170, 110)">
            <circle cx="0" cy="0" r="4" fill="#F4C542" />
            <circle cx="2" cy="0" r="4" fill="#4A6B8F" />
          </g>
          <g className="moon" transform="translate(190, 125)">
            <circle cx="0" cy="0" r="3.5" fill="#F4C542" />
            <circle cx="1.8" cy="0" r="3.5" fill="#4A6B8F" />
          </g>
          <g className="moon" transform="translate(210, 105)">
            <circle cx="0" cy="0" r="3.5" fill="#F4C542" />
            <circle cx="1.8" cy="0" r="3.5" fill="#4A6B8F" />
          </g>
          <g className="moon" transform="translate(235, 125)">
            <circle cx="0" cy="0" r="3" fill="#F4C542" />
            <circle cx="1.5" cy="0" r="3" fill="#4A6B8F" />
          </g>
        </g>

        {/* Arms - Front pair (in front of body) */}
        <g className="robot-arms-front">
          {/* Front left arm */}
          <line x1="160" y1="250" x2="110" y2="270" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          <circle cx="160" cy="250" r="5" fill="#5A5A5A" />
          
          {/* Front left hand */}
          <g transform="translate(90, 265)">
            <ellipse cx="0" cy="0" rx="16" ry="13" fill="#F5F5F5" />
            <ellipse cx="0" cy="0" rx="14" ry="11" fill="#E8E8E8" />
            <path d="M -8,-9 L -8,9 M -4,-11 L -4,11 M 0,-12 L 0,12 M 4,-11 L 4,11" 
                  stroke="#CCCCCC" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-2" r="2" fill="#D0D0D0" />
          </g>

          {/* Front right arm */}
          <line x1="240" y1="250" x2="290" y2="270" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          <circle cx="240" cy="250" r="5" fill="#5A5A5A" />
          
          {/* Front right hand */}
          <g transform="translate(310, 265)">
            <ellipse cx="0" cy="0" rx="16" ry="13" fill="#F5F5F5" />
            <ellipse cx="0" cy="0" rx="14" ry="11" fill="#E8E8E8" />
            <path d="M -4,-11 L -4,11 M 0,-12 L 0,12 M 4,-11 L 4,11 M 8,-9 L 8,9" 
                  stroke="#CCCCCC" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-2" r="2" fill="#D0D0D0" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default WizardMascot;
