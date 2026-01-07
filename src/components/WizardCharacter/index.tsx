interface WizardCharacterProps {
  size?: number;
  className?: string;
}

function WizardCharacter(props: WizardCharacterProps) {
  const size = props.size || 400;
  
  return (
    <div className={`wizardcharacter__container flex items-center justify-center ${props.className || ''}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wizardcharacter__svg"
      >
        {/* Background circle */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="#E8DCC8"
          stroke="#6B4E3D"
          strokeWidth="2"
        />
        
        {/* Inner rectangle frame */}
        <rect
          x="50"
          y="130"
          width="300"
          height="140"
          fill="none"
          stroke="#6B4E3D"
          strokeWidth="2"
        />

        {/* Wizard Hat */}
        <g className="wizardcharacter__hat">
          {/* Hat brim */}
          <ellipse
            cx="200"
            cy="140"
            rx="90"
            ry="20"
            fill="#3D5A80"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          
          {/* Hat cone */}
          <path
            d="M 120 140 Q 160 20, 200 10 Q 240 20, 280 140 Z"
            fill="#3D5A80"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          
          {/* Stars and moons on hat */}
          <g className="wizardcharacter__hat-decorations">
            {/* Star 1 */}
            <path
              d="M 160 100 L 163 108 L 172 108 L 165 113 L 168 121 L 160 116 L 152 121 L 155 113 L 148 108 L 157 108 Z"
              fill="#F4C430"
            />
            
            {/* Moon 1 */}
            <path
              d="M 180 70 Q 175 75, 180 80 Q 185 75, 180 70"
              fill="#F4C430"
            />
            
            {/* Star 2 */}
            <path
              d="M 220 60 L 223 68 L 232 68 L 225 73 L 228 81 L 220 76 L 212 81 L 215 73 L 208 68 L 217 68 Z"
              fill="#F4C430"
            />
            
            {/* Moon on brim */}
            <path
              d="M 140 135 Q 135 140, 140 145 Q 145 140, 140 135"
              fill="#F4C430"
            />
            
            {/* Star on brim right */}
            <path
              d="M 260 135 L 262 141 L 268 141 L 263 145 L 265 151 L 260 147 L 255 151 L 257 145 L 252 141 L 258 141 Z"
              fill="#F4C430"
            />
          </g>
        </g>

        {/* TV Screen Head */}
        <g className="wizardcharacter__head">
          {/* TV frame outer */}
          <rect
            x="140"
            y="140"
            rx="8"
            ry="8"
            width="120"
            height="90"
            fill="#8B6F47"
            stroke="#5D4E37"
            strokeWidth="3"
          />
          
          {/* TV screen */}
          <rect
            x="150"
            y="150"
            rx="4"
            ry="4"
            width="100"
            height="70"
            fill="#7CB342"
          />
          
          {/* Screen glare/content */}
          <ellipse
            cx="180"
            cy="170"
            rx="30"
            ry="20"
            fill="#A5D6A7"
            opacity="0.7"
          />
          
          <ellipse
            cx="210"
            cy="190"
            rx="25"
            ry="18"
            fill="#C5E1A5"
            opacity="0.6"
          />
          
          {/* Screen highlight */}
          <path
            d="M 155 155 L 175 155 L 165 165 Z"
            fill="#FFFFFF"
            opacity="0.4"
          />
        </g>

        {/* Body */}
        <g className="wizardcharacter__body">
          <rect
            x="165"
            y="230"
            rx="4"
            ry="4"
            width="70"
            height="50"
            fill="#A0826D"
            stroke="#5D4E37"
            strokeWidth="2"
          />
          
          {/* Control button */}
          <circle
            cx="200"
            cy="255"
            r="8"
            fill="#D4A574"
            stroke="#5D4E37"
            strokeWidth="1"
          />
        </g>

        {/* Arms - Left Top */}
        <g className="wizardcharacter__arm-left-top">
          <line
            x1="165"
            y1="240"
            x2="110"
            y2="220"
            stroke="#2C3E50"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="165" cy="240" r="4" fill="#5D4E37" />
          
          {/* Hand */}
          <g transform="translate(85, 210)">
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#FFFFFF" stroke="#2C3E50" strokeWidth="1.5" />
            {/* Fingers */}
            <path d="M -8 -10 L -10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 -12 L 0 -20" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 -10 L 10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Arms - Left Bottom */}
        <g className="wizardcharacter__arm-left-bottom">
          <line
            x1="170"
            y1="260"
            x2="100"
            y2="260"
            stroke="#2C3E50"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="170" cy="260" r="4" fill="#5D4E37" />
          
          {/* Hand */}
          <g transform="translate(75, 260)">
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#FFFFFF" stroke="#2C3E50" strokeWidth="1.5" />
            {/* Fingers */}
            <path d="M -8 -10 L -10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 -12 L 0 -20" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 -10 L 10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Arms - Right Top */}
        <g className="wizardcharacter__arm-right-top">
          <line
            x1="235"
            y1="240"
            x2="290"
            y2="220"
            stroke="#2C3E50"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="235" cy="240" r="4" fill="#5D4E37" />
          
          {/* Hand */}
          <g transform="translate(315, 210)">
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#FFFFFF" stroke="#2C3E50" strokeWidth="1.5" />
            {/* Fingers */}
            <path d="M -8 -10 L -10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 -12 L 0 -20" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 -10 L 10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Arms - Right Bottom */}
        <g className="wizardcharacter__arm-right-bottom">
          <line
            x1="230"
            y1="260"
            x2="300"
            y2="260"
            stroke="#2C3E50"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="230" cy="260" r="4" fill="#5D4E37" />
          
          {/* Hand */}
          <g transform="translate(325, 260)">
            <ellipse cx="0" cy="0" rx="18" ry="14" fill="#FFFFFF" stroke="#2C3E50" strokeWidth="1.5" />
            {/* Fingers */}
            <path d="M -8 -10 L -10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 -12 L 0 -20" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 -10 L 10 -18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Legs */}
        <g className="wizardcharacter__legs">
          {/* Left leg */}
          <line
            x1="185"
            y1="280"
            x2="185"
            y2="310"
            stroke="#5D4E37"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Left foot */}
          <rect
            x="175"
            y="310"
            rx="4"
            ry="4"
            width="20"
            height="15"
            fill="#6B4E3D"
            stroke="#5D4E37"
            strokeWidth="2"
          />
          
          {/* Right leg */}
          <line
            x1="215"
            y1="280"
            x2="215"
            y2="310"
            stroke="#5D4E37"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Right foot */}
          <rect
            x="205"
            y="310"
            rx="4"
            ry="4"
            width="20"
            height="15"
            fill="#6B4E3D"
            stroke="#5D4E37"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

export default WizardCharacter;