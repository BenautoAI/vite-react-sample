interface WizardTVProps {
  size?: number;
  className?: string;
}

function WizardTV({ size = 400, className = '' }: WizardTVProps) {
  return (
    <div className={`wizard-tv__container ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        {/* Textured Background */}
        <defs>
          <pattern id="paperTexture" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <rect width="400" height="400" fill="#E8DCC8"/>
            <circle cx="50" cy="50" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="150" cy="80" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="250" cy="120" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="350" cy="150" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="100" cy="200" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="300" cy="250" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="200" cy="300" r="0.5" fill="#D4C4A8" opacity="0.5"/>
            <circle cx="80" cy="350" r="0.5" fill="#D4C4A8" opacity="0.5"/>
          </pattern>
          
          {/* Screen glow gradient */}
          <radialGradient id="screenGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#DFFF94" stopOpacity="1"/>
            <stop offset="50%" stopColor="#9FD356" stopOpacity="1"/>
            <stop offset="100%" stopColor="#6B9B37" stopOpacity="1"/>
          </radialGradient>
          
          {/* Screen reflection gradient */}
          <linearGradient id="screenReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4"/>
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Background with texture */}
        <rect width="400" height="400" fill="url(#paperTexture)"/>
        
        {/* Outer circular frame */}
        <circle 
          cx="200" 
          cy="200" 
          r="180" 
          fill="none" 
          stroke="#6B4743" 
          strokeWidth="2"
        />
        
        {/* Inner rectangular frame */}
        <rect 
          x="40" 
          y="130" 
          width="320" 
          height="190" 
          fill="none" 
          stroke="#6B4743" 
          strokeWidth="1.5"
          opacity="0.3"
        />
        
        {/* Body (TV chassis) */}
        <g id="body">
          <rect 
            x="145" 
            y="210" 
            width="110" 
            height="70" 
            rx="8" 
            fill="#8B6F54" 
            stroke="#4A3829" 
            strokeWidth="3"
          />
          
          {/* Center button */}
          <circle 
            cx="200" 
            cy="245" 
            r="12" 
            fill="#D4A574" 
            stroke="#4A3829" 
            strokeWidth="2"
          />
          <circle 
            cx="200" 
            cy="245" 
            r="8" 
            fill="#B8956A"
          />
        </g>
        
        {/* Legs */}
        <g id="legs">
          {/* Left front leg */}
          <line x1="160" y1="280" x2="160" y2="300" stroke="#4A3829" strokeWidth="6" strokeLinecap="round"/>
          <ellipse cx="160" cy="305" rx="12" ry="8" fill="#5C4A3A" stroke="#4A3829" strokeWidth="2"/>
          
          {/* Left back leg */}
          <line x1="175" y1="280" x2="175" y2="295" stroke="#4A3829" strokeWidth="6" strokeLinecap="round"/>
          <ellipse cx="175" cy="299" rx="11" ry="7" fill="#5C4A3A" stroke="#4A3829" strokeWidth="2"/>
          
          {/* Right back leg */}
          <line x1="225" y1="280" x2="225" y2="295" stroke="#4A3829" strokeWidth="6" strokeLinecap="round"/>
          <ellipse cx="225" cy="299" rx="11" ry="7" fill="#5C4A3A" stroke="#4A3829" strokeWidth="2"/>
          
          {/* Right front leg */}
          <line x1="240" y1="280" x2="240" y2="300" stroke="#4A3829" strokeWidth="6" strokeLinecap="round"/>
          <ellipse cx="240" cy="305" rx="12" ry="8" fill="#5C4A3A" stroke="#4A3829" strokeWidth="2"/>
        </g>
        
        {/* Arms */}
        <g id="arms">
          {/* Left outer arm */}
          <line x1="145" y1="230" x2="100" y2="245" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          <line x1="100" y1="245" x2="85" y2="240" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          {/* Left outer hand */}
          <ellipse cx="75" cy="237" rx="14" ry="16" fill="#FFFFFF" stroke="#4A3829" strokeWidth="2"/>
          <path d="M 68 237 Q 68 227 72 225" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 75 237 Q 75 225 78 223" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 82 237 Q 82 227 85 225" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Left inner arm */}
          <line x1="145" y1="240" x2="115" y2="260" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          <line x1="115" y1="260" x2="105" y2="265" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          {/* Left inner hand */}
          <ellipse cx="97" cy="268" rx="13" ry="15" fill="#FFFFFF" stroke="#4A3829" strokeWidth="2"/>
          <path d="M 91 268 Q 91 258 94 256" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 97 268 Q 97 256 100 254" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 103 268 Q 103 258 106 256" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Right inner arm */}
          <line x1="255" y1="240" x2="285" y2="260" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          <line x1="285" y1="260" x2="295" y2="265" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          {/* Right inner hand */}
          <ellipse cx="303" cy="268" rx="13" ry="15" fill="#FFFFFF" stroke="#4A3829" strokeWidth="2"/>
          <path d="M 297 268 Q 297 258 294 256" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 303 268 Q 303 256 300 254" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 309 268 Q 309 258 306 256" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Right outer arm */}
          <line x1="255" y1="230" x2="300" y2="245" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          <line x1="300" y1="245" x2="315" y2="240" stroke="#4A3829" strokeWidth="5" strokeLinecap="round"/>
          {/* Right outer hand */}
          <ellipse cx="325" cy="237" rx="14" ry="16" fill="#FFFFFF" stroke="#4A3829" strokeWidth="2"/>
          <path d="M 319 237 Q 319 227 315 225" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 325 237 Q 325 225 322 223" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 332 237 Q 332 227 328 225" fill="none" stroke="#4A3829" strokeWidth="2" strokeLinecap="round"/>
        </g>
        
        {/* TV Head */}
        <g id="tvHead">
          {/* TV frame */}
          <rect 
            x="145" 
            y="155" 
            width="110" 
            height="75" 
            rx="6" 
            fill="#8B6F54" 
            stroke="#4A3829" 
            strokeWidth="3"
          />
          
          {/* Inner screen bezel */}
          <rect 
            x="155" 
            y="165" 
            width="90" 
            height="55" 
            rx="4" 
            fill="#6B5544" 
            stroke="#4A3829" 
            strokeWidth="2"
          />
          
          {/* Screen with glow */}
          <rect 
            x="160" 
            y="170" 
            width="80" 
            height="45" 
            rx="3" 
            fill="url(#screenGlow)"
          />
          
          {/* Screen content/static */}
          <ellipse cx="180" cy="185" rx="15" ry="12" fill="#DFFF94" opacity="0.7"/>
          <ellipse cx="220" cy="195" rx="20" ry="15" fill="#B8D96F" opacity="0.6"/>
          
          {/* Screen reflection */}
          <rect 
            x="160" 
            y="170" 
            width="80" 
            height="45" 
            rx="3" 
            fill="url(#screenReflection)"
          />
          
          {/* Screen highlight */}
          <ellipse 
            cx="175" 
            cy="178" 
            rx="18" 
            ry="10" 
            fill="#FFFFFF" 
            opacity="0.4"
          />
        </g>
        
        {/* Wizard Hat */}
        <g id="wizardHat">
          {/* Hat brim */}
          <ellipse 
            cx="200" 
            cy="165" 
            rx="65" 
            ry="14" 
            fill="#3D5A7C" 
            stroke="#2A3F5F" 
            strokeWidth="3"
          />
          
          {/* Hat cone */}
          <path 
            d="M 140 165 Q 170 70 200 50 Q 230 70 260 165 Z" 
            fill="#455E82" 
            stroke="#2A3F5F" 
            strokeWidth="3"
          />
          
          {/* Hat tip droop */}
          <path 
            d="M 200 50 Q 220 55 235 65 Q 240 75 235 85" 
            fill="#3D5A7C" 
            stroke="#2A3F5F" 
            strokeWidth="3"
          />
          
          {/* Stars and moons decorations */}
          {/* Star 1 - top right */}
          <path 
            d="M 225 80 L 228 86 L 234 86 L 229 90 L 231 96 L 225 92 L 219 96 L 221 90 L 216 86 L 222 86 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Moon 1 - left side */}
          <path 
            d="M 160 100 Q 155 105 160 110 Q 150 107 150 100 Q 150 93 160 90 Q 155 95 160 100 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Star 2 - brim left */}
          <path 
            d="M 155 155 L 157 159 L 161 159 L 158 162 L 159 166 L 155 163 L 151 166 L 152 162 L 149 159 L 153 159 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Moon 2 - right side */}
          <path 
            d="M 210 115 Q 206 119 210 123 Q 202 121 202 115 Q 202 109 210 107 Q 206 111 210 115 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Star 3 - brim right */}
          <path 
            d="M 245 155 L 247 159 L 251 159 L 248 162 L 249 166 L 245 163 L 241 166 L 242 162 L 239 159 L 243 159 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Moon 3 - center */}
          <path 
            d="M 190 130 Q 186 134 190 138 Q 182 136 182 130 Q 182 124 190 122 Q 186 126 190 130 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
          
          {/* Small triangle on tip */}
          <path 
            d="M 230 70 L 235 75 L 233 80 Z" 
            fill="#F4C430" 
            stroke="#2A3F5F" 
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}

export default WizardTV;
