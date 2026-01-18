interface WizardRobotProps {
  className?: string;
}

function WizardRobot(props: WizardRobotProps) {
  return (
    <div className={`
      wizard-robot__container 
      flex 
      justify-center 
      items-center 
      w-full 
      p-4 
      ${props.className || ''}
    `}>
      <div className="relative w-96 h-96">
        {/* Background with texture effect */}
        <div className="absolute inset-0 bg-[#E8DCC4] rounded-lg" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
        }}>
        </div>

        {/* Geometric frames */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="400" cy="400" r="350" fill="none" stroke="#8B6F47" strokeWidth="3" opacity="0.6" />
          
          {/* Inner rectangle */}
          <rect x="100" y="320" width="600" height="360" fill="none" stroke="#8B6F47" strokeWidth="2" opacity="0.4" />
        </svg>

        {/* Main robot character */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          {/* Wizard Hat */}
          <g id="wizard-hat">
            {/* Hat brim */}
            <ellipse cx="400" cy="370" rx="180" ry="40" fill="#4A5F7F" />
            <ellipse cx="400" cy="370" rx="180" ry="40" fill="#3D4F68" opacity="0.5" />
            
            {/* Hat cone */}
            <path d="M 220 370 Q 380 80 400 80 Q 420 80 580 370 Z" fill="#4A5F7F" />
            <path d="M 220 370 Q 380 80 400 80 Q 420 80 580 370 Z" fill="#3D4F68" opacity="0.3" />
            
            {/* Hat tip curve */}
            <path d="M 400 80 Q 520 90 560 150" fill="none" stroke="#3D4F68" strokeWidth="4" />
            <ellipse cx="570" cy="160" rx="25" ry="30" fill="#4A5F7F" transform="rotate(-30 570 160)" />
            
            {/* Stars on hat */}
            <g fill="#F4C542">
              <polygon points="480,150 485,165 500,167 490,177 493,192 480,184 467,192 470,177 460,167 475,165" />
              <polygon points="320,220 323,230 333,232 326,239 328,249 320,244 312,249 314,239 307,232 317,230" />
              <polygon points="530,300 533,310 543,312 536,319 538,329 530,324 522,329 524,319 517,312 527,310" />
            </g>
            
            {/* Moons on hat */}
            <g fill="#F4C542">
              <path d="M 360 170 A 20 20 0 1 1 360 210 A 15 15 0 1 0 360 170 Z" />
              <path d="M 430 260 A 18 18 0 1 1 430 296 A 13 13 0 1 0 430 260 Z" />
              <path d="M 320 310 A 15 15 0 1 1 320 340 A 11 11 0 1 0 320 310 Z" />
            </g>
          </g>

          {/* Monitor/Screen Body */}
          <g id="monitor-body">
            {/* Monitor frame - outer */}
            <rect x="250" y="340" width="300" height="240" rx="20" fill="#8B6F47" />
            {/* Monitor frame - inner */}
            <rect x="265" y="355" width="270" height="210" rx="15" fill="#A0826D" />
            
            {/* Screen */}
            <rect x="285" y="375" width="230" height="170" rx="10" fill="#6B8E4E" />
            
            {/* Screen gradient overlay */}
            <defs>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8FBC5A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4A6B2E" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="screenGlow">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="285" y="375" width="230" height="170" rx="10" fill="url(#screenGradient)" />
            
            {/* Screen reflections */}
            <ellipse cx="340" cy="420" rx="40" ry="30" fill="url(#screenGlow)" />
            <path d="M 450 480 Q 480 490 490 520" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.3" />
            <path d="M 460 500 Q 475 505 485 515" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
            
            {/* Chest button */}
            <circle cx="400" cy="560" r="18" fill="#D4A574" />
            <circle cx="400" cy="560" r="12" fill="#8B6F47" opacity="0.5" />
          </g>

          {/* Arms */}
          <g id="arms">
            {/* Left upper arm */}
            <rect x="160" y="420" width="80" height="30" rx="15" fill="#3D3D3D" />
            {/* Left lower arm */}
            <rect x="100" y="435" width="80" height="30" rx="15" fill="#2D2D2D" />
            {/* Left hand */}
            <ellipse cx="90" cy="450" rx="35" ry="40" fill="#F5F5F5" />
            {/* Left hand fingers */}
            <path d="M 70 430 Q 60 425 55 430 L 60 445" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 75 420 Q 65 415 60 420 L 65 435" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 85 415 Q 75 410 70 415 L 75 430" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 105 425 Q 115 420 120 425 L 115 440" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            
            {/* Right upper arm */}
            <rect x="560" y="420" width="80" height="30" rx="15" fill="#3D3D3D" />
            {/* Right lower arm */}
            <rect x="620" y="435" width="80" height="30" rx="15" fill="#2D2D2D" />
            {/* Right hand */}
            <ellipse cx="710" cy="450" rx="35" ry="40" fill="#F5F5F5" />
            {/* Right hand fingers */}
            <path d="M 730 430 Q 740 425 745 430 L 740 445" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 725 420 Q 735 415 740 420 L 735 435" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 715 415 Q 725 410 730 415 L 725 430" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 695 425 Q 685 420 680 425 L 685 440" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />

            {/* Left second upper arm */}
            <rect x="180" y="470" width="80" height="30" rx="15" fill="#3D3D3D" />
            {/* Left second lower arm */}
            <rect x="120" y="485" width="80" height="30" rx="15" fill="#2D2D2D" />
            {/* Left second hand */}
            <ellipse cx="110" cy="500" rx="35" ry="40" fill="#F5F5F5" />
            {/* Left second hand fingers */}
            <path d="M 90 480 Q 80 475 75 480 L 80 495" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 95 470 Q 85 465 80 470 L 85 485" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 105 465 Q 95 460 90 465 L 95 480" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 125 475 Q 135 470 140 475 L 135 490" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            
            {/* Right second upper arm */}
            <rect x="540" y="470" width="80" height="30" rx="15" fill="#3D3D3D" />
            {/* Right second lower arm */}
            <rect x="600" y="485" width="80" height="30" rx="15" fill="#2D2D2D" />
            {/* Right second hand */}
            <ellipse cx="690" cy="500" rx="35" ry="40" fill="#F5F5F5" />
            {/* Right second hand fingers */}
            <path d="M 710 480 Q 720 475 725 480 L 720 495" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 705 470 Q 715 465 720 470 L 715 485" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 695 465 Q 705 460 710 465 L 705 480" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />
            <path d="M 675 475 Q 665 470 660 475 L 665 490" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2" />

            {/* Arm joints/connections */}
            <circle cx="240" cy="435" r="8" fill="#2D2D2D" />
            <circle cx="560" cy="435" r="8" fill="#2D2D2D" />
            <circle cx="260" cy="485" r="8" fill="#2D2D2D" />
            <circle cx="540" cy="485" r="8" fill="#2D2D2D" />
          </g>

          {/* Legs */}
          <g id="legs">
            {/* Left leg upper */}
            <rect x="320" y="580" width="45" height="80" rx="8" fill="#8B6F47" />
            {/* Left leg lower */}
            <rect x="320" y="650" width="45" height="50" rx="8" fill="#A0826D" />
            {/* Left foot */}
            <ellipse cx="342" cy="700" rx="30" ry="20" fill="#6B5944" />
            <rect x="312" y="690" width="60" height="25" rx="10" fill="#6B5944" />
            
            {/* Right leg upper */}
            <rect x="435" y="580" width="45" height="80" rx="8" fill="#8B6F47" />
            {/* Right leg lower */}
            <rect x="435" y="650" width="45" height="50" rx="8" fill="#A0826D" />
            {/* Right foot */}
            <ellipse cx="458" cy="700" rx="30" ry="20" fill="#6B5944" />
            <rect x="428" y="690" width="60" height="25" rx="10" fill="#6B5944" />

            {/* Leg joints */}
            <circle cx="342" cy="650" r="10" fill="#6B5944" />
            <circle cx="458" cy="650" r="10" fill="#6B5944" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WizardRobot;
