import './styles.css';

interface FeiAvatarProps {
  className?: string
}

function FeiAvatar(props: FeiAvatarProps) {
  return (
    <div className={`fei-avatar__container ${props.className || ''}`}>
      <svg 
        viewBox="0 0 400 500" 
        xmlns="http://www.w3.org/2000/svg"
        className="fei-avatar__svg"
      >
        {/* Geometric frame background */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9EFF00" />
            <stop offset="100%" stopColor="#3CBA54" />
          </linearGradient>
        </defs>

        {/* Circular frame */}
        <circle cx="200" cy="250" r="150" fill="none" stroke="#6B4E3D" strokeWidth="2" />
        
        {/* Square frame */}
        <rect x="50" y="175" width="300" height="200" fill="none" stroke="#6B4E3D" strokeWidth="2" />

        {/* Wizard Hat */}
        <g className="fei-avatar__wizard-hat">
          {/* Hat cone */}
          <path 
            d="M 200 80 L 140 180 L 260 180 Z" 
            fill="#3B5875" 
            stroke="#2A3F55" 
            strokeWidth="2"
          />
          {/* Hat brim */}
          <ellipse cx="200" cy="180" rx="70" ry="12" fill="#3B5875" stroke="#2A3F55" strokeWidth="2" />
          
          {/* Stars and moons decorations */}
          <circle cx="170" cy="120" r="8" fill="#F4D03F" />
          <circle cx="230" cy="120" r="8" fill="#F4D03F" />
          <path d="M 200 100 L 202 108 L 210 108 L 204 113 L 206 121 L 200 116 L 194 121 L 196 113 L 190 108 L 198 108 Z" fill="#F4D03F" />
          {/* Crescent moons */}
          <path d="M 160 150 Q 165 145 170 150 Q 165 145 160 150" fill="#F4D03F" />
          <path d="M 230 150 Q 235 145 240 150 Q 235 145 230 150" fill="#F4D03F" />
        </g>

        {/* Screen/Monitor Body */}
        <g className="fei-avatar__screen-body">
          {/* Outer brown frame */}
          <rect x="130" y="180" width="140" height="120" rx="8" fill="#8B6F47" stroke="#6B4E3D" strokeWidth="3" />
          
          {/* Inner green screen with Vite logo area */}
          <rect x="145" y="195" width="110" height="85" rx="4" fill="url(#screenGradient)" />
          
          {/* Screen highlights */}
          <path d="M 155 205 L 240 205 Q 235 240 155 230 Z" fill="rgba(255,255,255,0.2)" />
          
          {/* Vite Logo simplified representation in the screen */}
          <g transform="translate(180, 220) scale(0.15)">
            <path fill="rgba(189, 52, 254, 0.8)" d="M-80 -40 L 0 80 L 80 -40 L 0 -20 Z" />
            <path fill="rgba(255, 221, 53, 0.9)" d="M 20 -35 L -10 15 L 5 20 L 0 35 L 30 -25 L 10 -20 Z" />
          </g>

          {/* Bottom control button */}
          <circle cx="200" cy="290" r="8" fill="#D4A574" stroke="#6B4E3D" strokeWidth="2" />
        </g>

        {/* Arms */}
        <g className="fei-avatar__arms">
          {/* Left upper arm */}
          <line x1="130" y1="230" x2="90" y2="260" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Left lower arm */}
          <line x1="90" y1="260" x2="70" y2="290" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Left hand */}
          <g transform="translate(50, 285)">
            <ellipse cx="0" cy="0" rx="18" ry="15" fill="#F5F5F5" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="-8" y1="-10" x2="-8" y2="8" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="-3" y1="-12" x2="-3" y2="10" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="3" y1="-12" x2="3" y2="10" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="8" y1="-10" x2="8" y2="8" stroke="#2C2C2C" strokeWidth="2" />
          </g>

          {/* Right upper arm */}
          <line x1="270" y1="230" x2="310" y2="260" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Right lower arm */}
          <line x1="310" y1="260" x2="330" y2="290" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Right hand */}
          <g transform="translate(350, 285)">
            <ellipse cx="0" cy="0" rx="18" ry="15" fill="#F5F5F5" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="-8" y1="-10" x2="-8" y2="8" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="-3" y1="-12" x2="-3" y2="10" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="3" y1="-12" x2="3" y2="10" stroke="#2C2C2C" strokeWidth="2" />
            <line x1="8" y1="-10" x2="8" y2="8" stroke="#2C2C2C" strokeWidth="2" />
          </g>
        </g>

        {/* Lower Body/Torso */}
        <g className="lower-body">
          <rect x="160" y="300" width="80" height="50" rx="8" fill="#8B6F47" stroke="#6B4E3D" strokeWidth="3" />
          {/* Body panel */}
          <rect x="170" y="310" width="60" height="30" rx="4" fill="#A68A5C" />
        </g>

        {/* Legs */}
        <g className="legs">
          {/* Left leg */}
          <line x1="175" y1="350" x2="175" y2="390" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Left foot */}
          <ellipse cx="175" cy="400" rx="20" ry="15" fill="#6B4E3D" stroke="#4A3528" strokeWidth="2" />
          
          {/* Right leg */}
          <line x1="225" y1="350" x2="225" y2="390" stroke="#2C2C2C" strokeWidth="8" strokeLinecap="round" />
          {/* Right foot */}
          <ellipse cx="225" cy="400" rx="20" ry="15" fill="#6B4E3D" stroke="#4A3528" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default FeiAvatar;
