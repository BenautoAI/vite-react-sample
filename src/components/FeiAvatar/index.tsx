interface FeiAvatarProps {
  width?: number;
  height?: number;
  className?: string;
}

function FeiAvatar(props: FeiAvatarProps) {
  const { width = 200, height = 200, className = "" } = props;
  
  return (
    <div 
      className={`fei-avatar__container ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background Circle */}
        <circle cx="200" cy="200" r="190" fill="#E8DCC4" stroke="#8B4A4A" strokeWidth="2" />
        
        {/* Construction lines */}
        <line x1="10" y1="200" x2="390" y2="200" stroke="#8B4A4A" strokeWidth="1" opacity="0.3" />
        <rect x="80" y="80" width="240" height="240" fill="none" stroke="#8B4A4A" strokeWidth="1" opacity="0.3" />

        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat base */}
          <ellipse cx="200" cy="170" rx="100" ry="18" fill="#4A6B8A" stroke="#2C3E50" strokeWidth="2" />
          
          {/* Hat cone */}
          <path
            d="M 150 170 Q 180 50, 200 30 Q 220 50, 250 170 Z"
            fill="#4A6B8A"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          
          {/* Crescent moons and stars on hat */}
          <g id="celestial-symbols">
            {/* Stars */}
            <path d="M 185 90 L 188 97 L 196 97 L 189 102 L 192 110 L 185 105 L 178 110 L 181 102 L 174 97 L 182 97 Z" fill="#F4D03F" />
            <path d="M 240 120 L 243 127 L 251 127 L 244 132 L 247 140 L 240 135 L 233 140 L 236 132 L 229 127 L 237 127 Z" fill="#F4D03F" />
            <path d="M 275 165 L 278 172 L 286 172 L 279 177 L 282 185 L 275 180 L 268 185 L 271 177 L 264 172 L 272 172 Z" fill="#F4D03F" />
            
            {/* Crescent moons */}
            <path d="M 165 130 Q 170 130, 170 140 Q 165 140, 165 145 Q 160 140, 160 130 Q 162 130, 165 130 Z" fill="#F4D03F" />
            <path d="M 210 160 Q 215 160, 215 170 Q 210 170, 210 175 Q 205 170, 205 160 Q 207 160, 210 160 Z" fill="#F4D03F" />
            <path d="M 145 160 Q 150 160, 150 170 Q 145 170, 145 175 Q 140 170, 140 160 Q 142 160, 145 160 Z" fill="#F4D03F" />
          </g>
          
          {/* Hat tip/curl */}
          <path
            d="M 200 30 Q 210 25, 220 30 Q 225 35, 230 40"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Robot Body (Monitor) */}
        <g id="robot-body">
          {/* Body frame */}
          <rect x="130" y="170" width="140" height="120" rx="10" fill="#9B6B4A" stroke="#5D4037" strokeWidth="3" />
          
          {/* Screen */}
          <rect x="145" y="185" width="110" height="70" rx="5" fill="#7CB342" stroke="#5D4037" strokeWidth="2" />
          
          {/* Screen gradient overlay */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A5D6A7', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#7CB342', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#558B2F', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <rect x="145" y="185" width="110" height="70" rx="5" fill="url(#screenGradient)" opacity="0.7" />
          
          {/* Screen highlights */}
          <ellipse cx="170" cy="205" rx="15" ry="10" fill="#E8F5E9" opacity="0.5" />
          <path d="M 190 215 Q 210 220, 230 235" fill="none" stroke="#E8F5E9" strokeWidth="3" opacity="0.4" />
          
          {/* Center button */}
          <circle cx="200" cy="275" r="8" fill="#F4D03F" stroke="#5D4037" strokeWidth="2" />
        </g>

        {/* Arms */}
        <g id="arms">
          {/* Left arms (two arms on left side) */}
          <g id="left-arms">
            {/* Upper left arm */}
            <line x1="130" y1="200" x2="80" y2="190" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="200" r="4" fill="#5D4037" />
            
            {/* Upper left hand */}
            <g transform="translate(80, 190) rotate(-20)">
              <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
              <line x1="-8" y1="-3" x2="-8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="-4" y1="-4" x2="-4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="4" y1="-3" x2="4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
            </g>
            
            {/* Lower left arm */}
            <line x1="130" y1="230" x2="85" y2="250" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="230" r="4" fill="#5D4037" />
            
            {/* Lower left hand */}
            <g transform="translate(85, 250) rotate(20)">
              <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
              <line x1="-8" y1="-3" x2="-8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="-4" y1="-4" x2="-4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="4" y1="-3" x2="4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
            </g>
          </g>
          
          {/* Right arms (two arms on right side) */}
          <g id="right-arms">
            {/* Upper right arm */}
            <line x1="270" y1="200" x2="320" y2="190" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
            <circle cx="270" cy="200" r="4" fill="#5D4037" />
            
            {/* Upper right hand */}
            <g transform="translate(320, 190) rotate(20)">
              <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
              <line x1="-4" y1="-3" x2="-4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="4" y1="-4" x2="4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="8" y1="-3" x2="8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
            </g>
            
            {/* Lower right arm */}
            <line x1="270" y1="230" x2="315" y2="250" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
            <circle cx="270" cy="230" r="4" fill="#5D4037" />
            
            {/* Lower right hand */}
            <g transform="translate(315, 250) rotate(-20)">
              <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
              <line x1="-4" y1="-3" x2="-4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="4" y1="-4" x2="4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
              <line x1="8" y1="-3" x2="8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
            </g>
          </g>
        </g>

        {/* Legs and Feet */}
        <g id="legs">
          {/* Left leg */}
          <line x1="170" y1="290" x2="170" y2="310" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
          <rect x="160" y="310" width="20" height="15" rx="3" fill="#5D4037" stroke="#3E2723" strokeWidth="2" />
          
          {/* Right leg */}
          <line x1="230" y1="290" x2="230" y2="310" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
          <rect x="220" y="310" width="20" height="15" rx="3" fill="#5D4037" stroke="#3E2723" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default FeiAvatar;
