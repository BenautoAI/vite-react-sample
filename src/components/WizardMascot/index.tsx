interface WizardMascotProps {
  width?: number;
  height?: number;
  className?: string;
}

function WizardMascot(props: WizardMascotProps) {
  const width = props.width || 600;
  const height = props.height || 600;

  return (
    <div 
      className={`
        wizard-mascot__container 
        flex 
        items-center 
        justify-center
        ${props.className || ''}
      `}
    >
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg"
        className="wizard-mascot__svg"
      >
        {/* Background with texture */}
        <defs>
          <pattern id="texturePattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#D4B896" opacity="0.3"/>
            <circle cx="7" cy="6" r="0.5" fill="#D4B896" opacity="0.3"/>
            <circle cx="5" cy="8" r="0.5" fill="#D4B896" opacity="0.3"/>
          </pattern>
          
          {/* TV Screen Gradient */}
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#A8D84E', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7CB342', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9CCC65', stopOpacity: 1 }} />
          </linearGradient>

          {/* Screen Glare */}
          <radialGradient id="screenGlare" cx="30%" cy="30%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="600" height="600" fill="#F5E6D3"/>
        <rect width="600" height="600" fill="url(#texturePattern)"/>

        {/* Geometric Frame - Circle */}
        <circle cx="300" cy="300" r="240" fill="none" stroke="#6B4E3D" strokeWidth="3"/>
        
        {/* Geometric Frame - Rectangle */}
        <rect x="60" y="180" width="480" height="300" fill="none" stroke="#6B4E3D" strokeWidth="2"/>

        {/* Robotic Feet */}
        <g className="wizard-mascot__feet">
          {/* Left Foot */}
          <rect x="230" y="480" width="45" height="30" fill="#8B6F47" stroke="#5D4A33" strokeWidth="2"/>
          <rect x="230" y="505" width="45" height="20" fill="#6B5538" stroke="#5D4A33" strokeWidth="2"/>
          
          {/* Right Foot */}
          <rect x="325" y="480" width="45" height="30" fill="#8B6F47" stroke="#5D4A33" strokeWidth="2"/>
          <rect x="325" y="505" width="45" height="20" fill="#6B5538" stroke="#5D4A33" strokeWidth="2"/>
        </g>

        {/* Character Body Frame */}
        <g className="wizard-mascot__body">
          {/* Main Body */}
          <rect x="220" y="320" width="160" height="160" rx="10" fill="#9B7F5F" stroke="#5D4A33" strokeWidth="3"/>
          
          {/* Control Button */}
          <circle cx="300" cy="450" r="15" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
          <circle cx="300" cy="450" r="10" fill="#C9965E"/>
        </g>

        {/* TV Screen Display */}
        <g className="wizard-mascot__screen">
          {/* Screen Frame */}
          <rect x="240" y="240" width="120" height="90" rx="5" fill="#9B7F5F" stroke="#5D4A33" strokeWidth="3"/>
          
          {/* Screen */}
          <rect x="250" y="250" width="100" height="70" rx="3" fill="url(#screenGradient)"/>
          
          {/* Screen Glare Effects */}
          <ellipse cx="270" cy="265" rx="25" ry="15" fill="url(#screenGlare)"/>
          <ellipse cx="310" cy="290" rx="20" ry="25" fill="url(#screenGlare)" opacity="0.5"/>
          
          {/* Abstract Screen Content */}
          <path d="M 260 275 Q 280 265, 300 280 Q 320 295, 340 275" 
                fill="none" 
                stroke="#E8F5D8" 
                strokeWidth="3" 
                opacity="0.6"/>
        </g>

        {/* Mechanical Arms */}
        <g className="wizard-mascot__arms">
          {/* Left Arm 1 */}
          <line x1="230" y1="360" x2="180" y2="350" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="230" cy="360" r="6" fill="#5D4A33"/>
          <line x1="180" y1="350" x2="145" y2="310" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="180" cy="350" r="5" fill="#5D4A33"/>
          
          {/* Left Hand 1 */}
          <g transform="translate(145, 310) rotate(-30)">
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M -10 -8 L -12 -18 Q -12 -22, -8 -22 Q -4 -22, -4 -18 L -6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 0 -8 L 0 -20 Q 0 -24, 4 -24 Q 8 -24, 8 -20 L 6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 10 -8 L 12 -18 Q 12 -22, 16 -22 Q 20 -22, 20 -18 L 18 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
          </g>

          {/* Left Arm 2 */}
          <line x1="240" y1="380" x2="190" y2="390" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="240" cy="380" r="6" fill="#5D4A33"/>
          <line x1="190" y1="390" x2="150" y2="410" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="190" cy="390" r="5" fill="#5D4A33"/>
          
          {/* Left Hand 2 */}
          <g transform="translate(150, 410) rotate(-10)">
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M -10 -8 L -12 -18 Q -12 -22, -8 -22 Q -4 -22, -4 -18 L -6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 0 -8 L 0 -20 Q 0 -24, 4 -24 Q 8 -24, 8 -20 L 6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 10 -8 L 12 -18 Q 12 -22, 16 -22 Q 20 -22, 20 -18 L 18 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
          </g>

          {/* Right Arm 1 */}
          <line x1="370" y1="360" x2="420" y2="350" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="370" cy="360" r="6" fill="#5D4A33"/>
          <line x1="420" y1="350" x2="455" y2="310" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="420" cy="350" r="5" fill="#5D4A33"/>
          
          {/* Right Hand 1 */}
          <g transform="translate(455, 310) rotate(30)">
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M -10 -8 L -12 -18 Q -12 -22, -8 -22 Q -4 -22, -4 -18 L -6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 0 -8 L 0 -20 Q 0 -24, 4 -24 Q 8 -24, 8 -20 L 6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 10 -8 L 12 -18 Q 12 -22, 16 -22 Q 20 -22, 20 -18 L 18 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
          </g>

          {/* Right Arm 2 */}
          <line x1="360" y1="380" x2="410" y2="390" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="360" cy="380" r="6" fill="#5D4A33"/>
          <line x1="410" y1="390" x2="450" y2="410" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="410" cy="390" r="5" fill="#5D4A33"/>
          
          {/* Right Hand 2 */}
          <g transform="translate(450, 410) rotate(10)">
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M -10 -8 L -12 -18 Q -12 -22, -8 -22 Q -4 -22, -4 -18 L -6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 0 -8 L 0 -20 Q 0 -24, 4 -24 Q 8 -24, 8 -20 L 6 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
            <path d="M 10 -8 L 12 -18 Q 12 -22, 16 -22 Q 20 -22, 20 -18 L 18 -8" 
                  fill="#F5F5F5" stroke="#3A3A3A" strokeWidth="2"/>
          </g>
        </g>

        {/* Wizard Hat */}
        <g className="wizard-mascot__hat">
          {/* Hat Brim */}
          <ellipse cx="300" cy="245" rx="90" ry="18" fill="#3D5A7C" stroke="#2A3D54" strokeWidth="3"/>
          
          {/* Hat Cone */}
          <path d="M 210 245 Q 250 100, 300 60 Q 350 100, 390 245 Z" 
                fill="#4A6B8C" 
                stroke="#2A3D54" 
                strokeWidth="3"/>
          
          {/* Hat Drooping Tip */}
          <path d="M 300 60 Q 320 50, 340 65 Q 350 75, 345 90 L 340 100" 
                fill="#3D5A7C" 
                stroke="#2A3D54" 
                strokeWidth="2"/>
          
          {/* Celestial Decorations on Hat */}
          {/* Stars */}
          <g className="wizard-mascot__stars">
            {/* Star 1 */}
            <path d="M 240 180 L 245 190 L 255 192 L 247 200 L 249 210 L 240 204 L 231 210 L 233 200 L 225 192 L 235 190 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="1"/>
            
            {/* Star 2 */}
            <path d="M 340 200 L 345 210 L 355 212 L 347 220 L 349 230 L 340 224 L 331 230 L 333 220 L 325 212 L 335 210 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="1"/>
            
            {/* Star 3 - on drooping tip */}
            <path d="M 335 85 L 338 92 L 345 93 L 339 98 L 341 105 L 335 101 L 329 105 L 331 98 L 325 93 L 332 92 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="1"/>
          </g>
          
          {/* Moons */}
          <g className="wizard-mascot__moons">
            {/* Moon 1 */}
            <path d="M 270 150 Q 265 155, 265 165 Q 265 175, 270 180 Q 275 175, 275 165 Q 275 155, 270 150 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="2"/>
            <path d="M 268 153 Q 272 158, 272 165 Q 272 172, 268 177" 
                  fill="#3D5A7C"/>
            
            {/* Moon 2 */}
            <path d="M 310 120 Q 305 125, 305 135 Q 305 145, 310 150 Q 315 145, 315 135 Q 315 125, 310 120 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="2"/>
            <path d="M 308 123 Q 312 128, 312 135 Q 312 142, 308 147" 
                  fill="#3D5A7C"/>
            
            {/* Moon 3 */}
            <path d="M 360 160 Q 355 165, 355 175 Q 355 185, 360 190 Q 365 185, 365 175 Q 365 165, 360 160 Z" 
                  fill="#F4C542" 
                  stroke="#2A3D54" 
                  strokeWidth="2"/>
            <path d="M 358 163 Q 362 168, 362 175 Q 362 182, 358 187" 
                  fill="#3D5A7C"/>
          </g>

          {/* Additional decorative elements on brim */}
          <ellipse cx="245" cy="240" rx="8" ry="5" fill="#F4C542" opacity="0.8"/>
          <ellipse cx="355" cy="240" rx="8" ry="5" fill="#F4C542" opacity="0.8"/>
        </g>
      </svg>
    </div>
  );
}

export default WizardMascot;
