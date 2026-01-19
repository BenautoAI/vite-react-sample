interface FeiAvatarProps {
  width?: number;
  height?: number;
  className?: string;
}

function FeiAvatar(props: FeiAvatarProps) {
  const { width = 256, height = 256, className = '' } = props;
  return (
    <div className={`fei-avatar__container ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={width}
        height={height}
        className="fei-avatar"
      >
        {/* Background Circle */}
        <circle cx="128" cy="128" r="120" fill="#E8DCC8" stroke="#8B6F5C" strokeWidth="2" />
        
        {/* Wizard Hat */}
        <g className="wizard-hat">
          {/* Hat Brim */}
          <ellipse cx="128" cy="100" rx="65" ry="12" fill="#3E5A7D" stroke="#2C3E50" strokeWidth="2" />
          
          {/* Hat Cone - curved */}
          <path
            d="M 75,100 Q 80,30 145,25 Q 145,30 145,100 Z"
            fill="#4A6FA5"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          
          {/* Hat decorations - stars and moons */}
          {/* Star 1 */}
          <path
            d="M 100,70 L 102,75 L 107,75 L 103,78 L 105,83 L 100,80 L 95,83 L 97,78 L 93,75 L 98,75 Z"
            fill="#F4D03F"
          />
          
          {/* Moon 1 */}
          <path
            d="M 125,50 Q 120,50 120,55 Q 120,60 125,60 Q 128,60 130,55 Q 128,50 125,50 Z"
            fill="#F4D03F"
          />
          
          {/* Star 2 */}
          <path
            d="M 160,80 L 162,85 L 167,85 L 163,88 L 165,93 L 160,90 L 155,93 L 157,88 L 153,85 L 158,85 Z"
            fill="#F4D03F"
          />
          
          {/* Moon 2 on brim */}
          <path
            d="M 85,95 Q 82,95 82,98 Q 82,101 85,101 Q 87,101 88,98 Q 87,95 85,95 Z"
            fill="#F4D03F"
          />
          
          {/* Star 3 on brim */}
          <path
            d="M 170,95 L 171,97 L 173,97 L 171,98 L 172,100 L 170,99 L 168,100 L 169,98 L 167,97 L 169,97 Z"
            fill="#F4D03F"
          />
        </g>

        {/* Robot Body - Monitor Head */}
        <g className="robot-body">
          {/* Monitor Frame */}
          <rect x="88" y="105" width="80" height="60" rx="5" fill="#8B6F47" stroke="#5D4E37" strokeWidth="2" />
          
          {/* Inner Monitor Frame */}
          <rect x="93" y="110" width="70" height="50" rx="3" fill="#6B5435" />
          
          {/* Screen */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A8D08D', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#7FB069', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6B9F5C', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="98" y="115" width="60" height="40" rx="2" fill="url(#screenGradient)" />
          
          {/* Screen Content - abstract shapes */}
          <ellipse cx="115" cy="130" rx="12" ry="8" fill="#DFFFD6" opacity="0.6" />
          <path d="M 135,125 Q 145,130 140,140" stroke="#DFFFD6" strokeWidth="3" fill="none" opacity="0.5" />
          
          {/* Screen Reflection */}
          <ellipse cx="110" cy="120" rx="8" ry="5" fill="#FFFFFF" opacity="0.4" />
          
          {/* Body/Torso */}
          <rect x="103" y="165" width="50" height="35" rx="3" fill="#8B6F47" stroke="#5D4E37" strokeWidth="2" />
          
          {/* Central Button */}
          <circle cx="128" cy="182" r="6" fill="#D4A574" stroke="#5D4E37" strokeWidth="1" />
        </g>

        {/* Mechanical Arms */}
        <g className="robot-arms">
          {/* Left Arms */}
          {/* Arm 1 - upper left */}
          <line x1="103" y1="175" x2="75" y2="165" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="75" cy="165" r="2" fill="#3A3A3A" />
          
          {/* Hand 1 */}
          <g transform="translate(65, 160)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="-3" y1="-4" x2="-3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="3" y1="-4" x2="3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
          </g>

          {/* Arm 2 - lower left */}
          <line x1="103" y1="185" x2="75" y2="195" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="75" cy="195" r="2" fill="#3A3A3A" />
          
          {/* Hand 2 */}
          <g transform="translate(65, 200)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="-3" y1="-4" x2="-3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="3" y1="-4" x2="3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
          </g>

          {/* Right Arms */}
          {/* Arm 3 - upper right */}
          <line x1="153" y1="175" x2="181" y2="165" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="181" cy="165" r="2" fill="#3A3A3A" />
          
          {/* Hand 3 */}
          <g transform="translate(191, 160)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="-3" y1="-4" x2="-3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="3" y1="-4" x2="3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
          </g>

          {/* Arm 4 - lower right */}
          <line x1="153" y1="185" x2="181" y2="195" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="181" cy="195" r="2" fill="#3A3A3A" />
          
          {/* Hand 4 */}
          <g transform="translate(191, 200)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="-3" y1="-4" x2="-3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#3A3A3A" strokeWidth="1" />
            <line x1="3" y1="-4" x2="3" y2="4" stroke="#3A3A3A" strokeWidth="1" />
          </g>
        </g>

        {/* Legs */}
        <g className="robot-legs">
          {/* Left Leg */}
          <line x1="115" y1="200" x2="110" y2="220" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="110" cy="220" r="2" fill="#3A3A3A" />
          {/* Left Foot */}
          <rect x="102" y="220" width="16" height="10" rx="2" fill="#6B5435" stroke="#5D4E37" strokeWidth="1" />
          
          {/* Right Leg */}
          <line x1="141" y1="200" x2="146" y2="220" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="146" cy="220" r="2" fill="#3A3A3A" />
          {/* Right Foot */}
          <rect x="138" y="220" width="16" height="10" rx="2" fill="#6B5435" stroke="#5D4E37" strokeWidth="1" />
        </g>

        {/* Border Frame */}
        <rect x="10" y="10" width="236" height="236" rx="15" fill="none" stroke="#8B6F5C" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default FeiAvatar;
