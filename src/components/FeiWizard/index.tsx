interface FeiWizardProps {
  width?: number;
  height?: number;
  className?: string;
}

function FeiWizard(props: FeiWizardProps) {
  const width = props.width || 300;
  const height = props.height || 300;
  const className = props.className || '';
  
  return (
    <div className={`fei-wizard__container ${className}`} style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width={width}
        height={height}
        style={{ display: 'block' }}
      >
        {/* Background Circle */}
        <circle cx="200" cy="200" r="180" fill="#E8DCC8" stroke="#8B6F5C" strokeWidth="3" />
        
        {/* Guidelines (horizontal and vertical) */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="#C4B5A0" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#C4B5A0" strokeWidth="1" strokeDasharray="5,5" />
        
        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat Brim */}
          <ellipse cx="200" cy="165" rx="85" ry="15" fill="#3E5F7C" stroke="#2C3E50" strokeWidth="2" />
          
          {/* Hat Cone */}
          <path
            d="M 115 165 Q 120 80, 150 60 Q 180 40, 200 35 Q 220 40, 240 55 Q 270 75, 285 165 Z"
            fill="#3E5F7C"
            stroke="#2C3E50"
            strokeWidth="2"
          />
          
          {/* Stars on Hat */}
          <g fill="#F4C430" stroke="#D4A017" strokeWidth="1">
            <polygon points="160,110 163,118 171,118 165,123 167,131 160,126 153,131 155,123 149,118 157,118" />
            <polygon points="240,85 243,93 251,93 245,98 247,106 240,101 233,106 235,98 229,93 237,93" />
            <polygon points="270,150 272,155 277,155 273,158 275,163 270,160 265,163 267,158 263,155 268,155" />
          </g>
          
          {/* Crescent Moons on Hat */}
          <g fill="#F4C430" stroke="#D4A017" strokeWidth="1">
            <path d="M 135 140 Q 130 135, 135 130 Q 138 133, 135 140 Z" />
            <path d="M 205 70 Q 200 65, 205 60 Q 208 63, 205 70 Z" />
            <path d="M 250 130 Q 245 125, 250 120 Q 253 123, 250 130 Z" />
          </g>
        </g>
        
        {/* Monitor Body (with Vite logo inside) */}
        <g id="monitor-body">
          {/* Monitor Frame */}
          <rect x="120" y="165" width="160" height="130" rx="8" fill="#8B6F47" stroke="#5C4A2F" strokeWidth="3" />
          
          {/* Inner Screen Border */}
          <rect x="132" y="177" width="136" height="100" rx="4" fill="#6B5A3D" stroke="#4A3A25" strokeWidth="2" />
          
          {/* Screen Display (Green with Vite logo) */}
          <rect x="140" y="185" width="120" height="84" rx="3" fill="#7FB069" />
          
          {/* Vite Logo Embedded in Screen */}
          <g transform="translate(155, 200) scale(0.25)">
            <defs>
              <linearGradient id="viteGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#41D1FF" />
                <stop offset="100%" stopColor="#BD34FE" />
              </linearGradient>
              <linearGradient id="viteGrad2" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFEA83" />
                <stop offset="8.333%" stopColor="#FFDD35" />
                <stop offset="100%" stopColor="#FFA800" />
              </linearGradient>
            </defs>
            <path
              fill="url(#viteGrad1)"
              d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            />
            <path
              fill="url(#viteGrad2)"
              d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            />
          </g>
          
          {/* Screen Highlights */}
          <ellipse cx="155" cy="200" rx="15" ry="12" fill="#FFFFFF" opacity="0.3" />
          <ellipse cx="245" cy="250" rx="20" ry="15" fill="#FFFFFF" opacity="0.2" />
          
          {/* Control Button */}
          <circle cx="200" cy="280" r="8" fill="#D4A574" stroke="#8B6F47" strokeWidth="2" />
        </g>
        
        {/* Arms */}
        <g id="arms" fill="#FFFFFF" stroke="#333333" strokeWidth="2">
          {/* Left Upper Arm */}
          <rect x="95" y="200" width="25" height="10" rx="5" fill="#333333" />
          <circle cx="95" cy="205" r="3" fill="#666666" />
          <path d="M 90 200 Q 75 195, 65 200 L 70 210 Q 80 205, 90 210 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
          
          {/* Left Lower Arm */}
          <rect x="70" y="215" width="25" height="10" rx="5" fill="#333333" />
          <circle cx="70" cy="220" r="3" fill="#666666" />
          <path d="M 65 215 Q 50 210, 40 215 L 45 225 Q 55 220, 65 225 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
          
          {/* Right Upper Arm */}
          <rect x="280" y="200" width="25" height="10" rx="5" fill="#333333" />
          <circle cx="305" cy="205" r="3" fill="#666666" />
          <path d="M 310 200 Q 325 195, 335 200 L 330 210 Q 320 205, 310 210 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
          
          {/* Right Lower Arm */}
          <rect x="305" y="215" width="25" height="10" rx="5" fill="#333333" />
          <circle cx="330" cy="220" r="3" fill="#666666" />
          <path d="M 335 215 Q 350 210, 360 215 L 355 225 Q 345 220, 335 225 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
        </g>
        
        {/* Legs and Feet */}
        <g id="legs" fill="#8B6F47" stroke="#5C4A2F" strokeWidth="2">
          {/* Left Leg */}
          <rect x="165" y="295" width="20" height="25" rx="4" />
          <circle cx="175" cy="307" r="3" fill="#666666" />
          
          {/* Left Foot */}
          <rect x="155" y="320" width="30" height="15" rx="4" fill="#6B5A3D" stroke="#4A3A25" strokeWidth="2" />
          
          {/* Right Leg */}
          <rect x="215" y="295" width="20" height="25" rx="4" />
          <circle cx="225" cy="307" r="3" fill="#666666" />
          
          {/* Right Foot */}
          <rect x="215" y="320" width="30" height="15" rx="4" fill="#6B5A3D" stroke="#4A3A25" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default FeiWizard;
