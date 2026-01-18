interface WizardRobotProps {
  width?: number;
  height?: number;
}

function WizardRobot(props: WizardRobotProps) {
  const width = props.width || 400;
  const height = props.height || 400;
  
  return (
    <div 
      className="
        wizard-robot__container 
        flex 
        justify-center 
        items-center 
        p-8
      "
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="wizard-robot__svg"
      >
        {/* Textured Background */}
        <defs>
          <pattern id="paperTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#E8DCC4" />
            <circle cx="10" cy="15" r="0.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="45" cy="30" r="0.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="70" cy="20" r="0.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="25" cy="55" r="0.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="85" cy="65" r="0.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="50" cy="80" r="0.5" fill="#C4B5A0" opacity="0.3" />
          </pattern>
          
          {/* Screen gradient */}
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9FD66E" />
            <stop offset="100%" stopColor="#F4F4C8" />
          </linearGradient>
          
          {/* Screen reflection */}
          <radialGradient id="screenReflection" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="url(#paperTexture)" />

        {/* Geometric frame - Circle */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#6B4B3E"
          strokeWidth="2"
        />

        {/* Geometric frame - Rectangle */}
        <rect
          x="50"
          y="125"
          width="300"
          height="150"
          fill="none"
          stroke="#6B4B3E"
          strokeWidth="2"
        />

        {/* Robot Legs */}
        <g className="robot__legs">
          {/* Left Leg */}
          <rect x="170" y="280" width="12" height="25" fill="#5C4A3A" rx="2" />
          <rect x="167" y="303" width="18" height="12" fill="#5C4A3A" rx="3" />
          
          {/* Right Leg */}
          <rect x="218" y="280" width="12" height="25" fill="#5C4A3A" rx="2" />
          <rect x="215" y="303" width="18" height="12" fill="#5C4A3A" rx="3" />
        </g>

        {/* Robot Body */}
        <g className="robot__body">
          {/* Main body */}
          <rect x="160" y="200" width="80" height="85" fill="#9B7E6A" rx="8" />
          <rect x="165" y="205" width="70" height="75" fill="#B5997F" rx="6" />
          
          {/* Control button */}
          <circle cx="200" cy="265" r="8" fill="#D4A574" />
          <circle cx="200" cy="265" r="6" fill="#C4945C" />
        </g>

        {/* Lower Arms (back layer) */}
        <g className="robot__arms-lower">
          {/* Left lower arm */}
          <rect x="110" y="230" width="12" height="45" fill="#3A3A3A" rx="6" />
          <ellipse cx="116" cy="275" rx="14" ry="16" fill="#FFFFFF" />
          <path d="M 105,275 Q 100,270 103,265 L 109,270 Q 107,272 105,275 Z" fill="#E8E8E8" />
          <path d="M 127,275 Q 132,270 129,265 L 123,270 Q 125,272 127,275 Z" fill="#E8E8E8" />
          <path d="M 116,283 Q 112,287 108,285 L 110,279 Q 113,280 116,283 Z" fill="#E8E8E8" />
          <path d="M 116,283 Q 120,287 124,285 L 122,279 Q 119,280 116,283 Z" fill="#E8E8E8" />
          
          {/* Right lower arm */}
          <rect x="278" y="230" width="12" height="45" fill="#3A3A3A" rx="6" />
          <ellipse cx="284" cy="275" rx="14" ry="16" fill="#FFFFFF" />
          <path d="M 273,275 Q 268,270 271,265 L 277,270 Q 275,272 273,275 Z" fill="#E8E8E8" />
          <path d="M 295,275 Q 300,270 297,265 L 291,270 Q 293,272 295,275 Z" fill="#E8E8E8" />
          <path d="M 284,283 Q 280,287 276,285 L 278,279 Q 281,280 284,283 Z" fill="#E8E8E8" />
          <path d="M 284,283 Q 288,287 292,285 L 290,279 Q 287,280 284,283 Z" fill="#E8E8E8" />
        </g>

        {/* TV Screen Head */}
        <g className="robot__head">
          {/* Outer frame */}
          <rect x="155" y="140" width="90" height="75" fill="#8B6A51" rx="8" />
          <rect x="160" y="145" width="80" height="65" fill="#A0816B" rx="6" />
          
          {/* Screen */}
          <rect x="168" y="152" width="64" height="51" fill="url(#screenGradient)" rx="3" />
          
          {/* Screen content - abstract shapes */}
          <ellipse cx="190" cy="170" rx="18" ry="15" fill="#E8F4D4" opacity="0.6" />
          <path d="M 200,165 Q 210,170 215,180 L 210,185 Q 200,175 200,165 Z" fill="#D4E8B4" opacity="0.5" />
          
          {/* Screen reflection */}
          <rect x="168" y="152" width="64" height="51" fill="url(#screenReflection)" rx="3" />
          
          {/* Screen border detail */}
          <rect x="168" y="152" width="64" height="51" fill="none" stroke="#2C2C2C" strokeWidth="2" rx="3" />
        </g>

        {/* Upper Arms (front layer) */}
        <g className="robot__arms-upper">
          {/* Left upper arm */}
          <rect x="135" y="200" width="12" height="40" fill="#3A3A3A" rx="6" />
          <ellipse cx="141" cy="240" rx="14" ry="16" fill="#FFFFFF" />
          <path d="M 130,240 Q 125,235 128,230 L 134,235 Q 132,237 130,240 Z" fill="#E8E8E8" />
          <path d="M 152,240 Q 157,235 154,230 L 148,235 Q 150,237 152,240 Z" fill="#E8E8E8" />
          <path d="M 141,248 Q 137,252 133,250 L 135,244 Q 138,245 141,248 Z" fill="#E8E8E8" />
          <path d="M 141,248 Q 145,252 149,250 L 147,244 Q 144,245 141,248 Z" fill="#E8E8E8" />
          
          {/* Right upper arm */}
          <rect x="253" y="200" width="12" height="40" fill="#3A3A3A" rx="6" />
          <ellipse cx="259" cy="240" rx="14" ry="16" fill="#FFFFFF" />
          <path d="M 248,240 Q 243,235 246,230 L 252,235 Q 250,237 248,240 Z" fill="#E8E8E8" />
          <path d="M 270,240 Q 275,235 272,230 L 266,235 Q 268,237 270,240 Z" fill="#E8E8E8" />
          <path d="M 259,248 Q 255,252 251,250 L 253,244 Q 256,245 259,248 Z" fill="#E8E8E8" />
          <path d="M 259,248 Q 263,252 267,250 L 265,244 Q 262,245 259,248 Z" fill="#E8E8E8" />
        </g>

        {/* Wizard Hat */}
        <g className="wizard__hat">
          {/* Hat brim */}
          <ellipse cx="200" cy="145" rx="55" ry="12" fill="#2F4A6F" />
          <ellipse cx="200" cy="143" rx="55" ry="10" fill="#3A5A88" />
          
          {/* Hat cone */}
          <path
            d="M 155,143 Q 175,60 200,40 Q 225,60 245,143 Z"
            fill="#3A5A88"
          />
          <path
            d="M 160,143 Q 178,65 200,47 Q 222,65 240,143 Z"
            fill="#4A6A98"
          />
          
          {/* Hat tip curve */}
          <path
            d="M 200,40 Q 240,45 260,75"
            fill="none"
            stroke="#3A5A88"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 200,47 Q 238,52 258,80"
            fill="none"
            stroke="#4A6A98"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Stars on hat */}
          {/* Star 1 - on brim */}
          <g transform="translate(230, 140)">
            <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#F4C542" />
          </g>
          
          {/* Star 2 - on cone */}
          <g transform="translate(210, 90)">
            <path d="M 0,-5 L 1.5,-1.5 L 5,0 L 1.5,1.5 L 0,5 L -1.5,1.5 L -5,0 L -1.5,-1.5 Z" fill="#F4C542" />
          </g>
          
          {/* Star 3 - on tip */}
          <g transform="translate(245, 85)">
            <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#F4C542" />
          </g>
          
          {/* Crescent moons */}
          {/* Moon 1 */}
          <g transform="translate(175, 100)">
            <path d="M 2,0 A 5,5 0 1,1 2,10 A 4,4 0 1,0 2,0 Z" fill="#F4C542" />
          </g>
          
          {/* Moon 2 - on brim */}
          <g transform="translate(165, 138)">
            <path d="M 1.5,0 A 4,4 0 1,1 1.5,8 A 3,3 0 1,0 1.5,0 Z" fill="#F4C542" />
          </g>
          
          {/* Moon 3 */}
          <g transform="translate(220, 115)">
            <path d="M 1,0 A 3.5,3.5 0 1,1 1,7 A 2.5,2.5 0 1,0 1,0 Z" fill="#F4C542" />
          </g>
        </g>

        {/* Joint connectors */}
        <circle cx="141" cy="220" r="4" fill="#2C2C2C" />
        <circle cx="259" cy="220" r="4" fill="#2C2C2C" />
        <circle cx="116" cy="230" r="4" fill="#2C2C2C" />
        <circle cx="284" cy="230" r="4" fill="#2C2C2C" />
      </svg>
    </div>
  );
}

export default WizardRobot;
