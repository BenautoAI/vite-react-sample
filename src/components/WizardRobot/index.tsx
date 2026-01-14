interface WizardRobotProps {
  size?: number;
  className?: string;
}

function WizardRobot(props: WizardRobotProps) {
  const size = props.size || 400;
  const className = props.className || '';
  
  return (
    <div 
      className={`wizard-robot__container inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Textured background */}
        <defs>
          <filter id="paperTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#E8DCC8" surfaceScale="1">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
          
          <pattern id="speckles" patternUnits="userSpaceOnUse" width="800" height="800">
            <rect width="800" height="800" fill="#E8DCC8" />
            <circle cx="120" cy="80" r="1.5" fill="#C4A57B" opacity="0.4" />
            <circle cx="240" cy="150" r="1" fill="#8B7355" opacity="0.3" />
            <circle cx="450" cy="200" r="1.2" fill="#C4A57B" opacity="0.4" />
            <circle cx="650" cy="120" r="1" fill="#8B7355" opacity="0.3" />
            <circle cx="180" cy="380" r="1.5" fill="#C4A57B" opacity="0.4" />
            <circle cx="580" cy="450" r="1" fill="#8B7355" opacity="0.3" />
            <circle cx="320" cy="580" r="1.2" fill="#C4A57B" opacity="0.4" />
            <circle cx="720" cy="680" r="1" fill="#8B7355" opacity="0.3" />
            <circle cx="90" cy="720" r="1.5" fill="#C4A57B" opacity="0.4" />
            <circle cx="480" cy="650" r="1" fill="#8B7355" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background with texture */}
        <rect width="800" height="800" fill="url(#speckles)" />

        {/* Circular frame */}
        <circle 
          cx="400" 
          cy="400" 
          r="320" 
          fill="none" 
          stroke="#6B4E4E" 
          strokeWidth="3"
        />
        <line 
          x1="80" 
          y1="350" 
          x2="720" 
          y2="350" 
          stroke="#6B4E4E" 
          strokeWidth="2"
        />

        {/* Robot body (brown/tan) */}
        <g id="robot-body">
          {/* Main torso */}
          <rect
            x="280"
            y="320"
            width="240"
            height="200"
            rx="15"
            fill="#9B7B5C"
            stroke="#5C4A3A"
            strokeWidth="3"
          />
          
          {/* Wood grain effect */}
          <line x1="300" y1="330" x2="300" y2="510" stroke="#8B6B4C" strokeWidth="2" opacity="0.3" />
          <line x1="340" y1="330" x2="340" y2="510" stroke="#8B6B4C" strokeWidth="1.5" opacity="0.3" />
          <line x1="380" y1="330" x2="380" y2="510" stroke="#8B6B4C" strokeWidth="2" opacity="0.3" />
          <line x1="420" y1="330" x2="420" y2="510" stroke="#8B6B4C" strokeWidth="1.5" opacity="0.3" />
          <line x1="460" y1="330" x2="460" y2="510" stroke="#8B6B4C" strokeWidth="2" opacity="0.3" />
          <line x1="500" y1="330" x2="500" y2="510" stroke="#8B6B4C" strokeWidth="1.5" opacity="0.3" />

          {/* TV Screen frame (brown border) */}
          <rect
            x="300"
            y="180"
            width="200"
            height="160"
            rx="10"
            fill="#7D5D3B"
            stroke="#5C4A3A"
            strokeWidth="3"
          />

          {/* TV Screen (green display) */}
          <rect
            x="315"
            y="195"
            width="170"
            height="130"
            rx="5"
            fill="url(#screenGradient)"
          />

          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#90C948" />
              <stop offset="50%" stopColor="#B8E665" />
              <stop offset="100%" stopColor="#D4F19C" />
            </linearGradient>
          </defs>

          {/* Screen reflections */}
          <ellipse
            cx="360"
            cy="220"
            rx="40"
            ry="30"
            fill="white"
            opacity="0.4"
          />
          <ellipse
            cx="440"
            cy="280"
            rx="50"
            ry="35"
            fill="white"
            opacity="0.3"
          />

          {/* Chest button */}
          <circle
            cx="400"
            cy="460"
            r="20"
            fill="#D4A574"
            stroke="#5C4A3A"
            strokeWidth="2"
          />
          <circle
            cx="400"
            cy="460"
            r="12"
            fill="#C4955B"
          />
        </g>

        {/* Legs and feet */}
        <g id="legs-feet">
          {/* Left leg */}
          <rect
            x="330"
            y="515"
            width="30"
            height="40"
            rx="5"
            fill="#7D5D3B"
            stroke="#5C4A3A"
            strokeWidth="2"
          />
          {/* Left foot */}
          <rect
            x="320"
            y="550"
            width="50"
            height="35"
            rx="8"
            fill="#6B4E3A"
            stroke="#4A3528"
            strokeWidth="2"
          />
          <rect
            x="325"
            y="555"
            width="40"
            height="25"
            rx="5"
            fill="#8B6342"
          />

          {/* Right leg */}
          <rect
            x="440"
            y="515"
            width="30"
            height="40"
            rx="5"
            fill="#7D5D3B"
            stroke="#5C4A3A"
            strokeWidth="2"
          />
          {/* Right foot */}
          <rect
            x="430"
            y="550"
            width="50"
            height="35"
            rx="8"
            fill="#6B4E3A"
            stroke="#4A3528"
            strokeWidth="2"
          />
          <rect
            x="435"
            y="555"
            width="40"
            height="25"
            rx="5"
            fill="#8B6342"
          />
        </g>

        {/* Arms (four arms) */}
        <g id="arms">
          {/* Back left arm */}
          <g transform="translate(-20, 10)">
            <line x1="280" y1="360" x2="180" y2="400" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
            <circle cx="180" cy="400" r="8" fill="#3A3A3A" />
            {/* Hand */}
            <g transform="translate(180, 400)">
              <ellipse cx="0" cy="0" rx="35" ry="30" fill="white" stroke="#2A2A2A" strokeWidth="2" />
              <line x1="-15" y1="-5" x2="-15" y2="-25" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="-8" x2="0" y2="-30" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
              <line x1="15" y1="-5" x2="15" y2="-25" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          {/* Front left arm */}
          <g>
            <line x1="285" y1="380" x2="200" y2="440" stroke="#3A3A3A" strokeWidth="14" strokeLinecap="round" />
            <circle cx="200" cy="440" r="9" fill="#3A3A3A" />
            {/* Hand */}
            <g transform="translate(200, 440)">
              <ellipse cx="0" cy="0" rx="38" ry="32" fill="white" stroke="#2A2A2A" strokeWidth="2.5" />
              <line x1="-18" y1="-5" x2="-18" y2="-28" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              <line x1="0" y1="-8" x2="0" y2="-32" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              <line x1="18" y1="-5" x2="18" y2="-28" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              {/* Wrist band */}
              <ellipse cx="0" cy="10" rx="25" ry="8" fill="#2A2A2A" opacity="0.3" />
            </g>
          </g>

          {/* Back right arm */}
          <g transform="translate(20, 10)">
            <line x1="520" y1="360" x2="620" y2="400" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
            <circle cx="620" cy="400" r="8" fill="#3A3A3A" />
            {/* Hand */}
            <g transform="translate(620, 400)">
              <ellipse cx="0" cy="0" rx="35" ry="30" fill="white" stroke="#2A2A2A" strokeWidth="2" />
              <line x1="-15" y1="-5" x2="-15" y2="-25" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="-8" x2="0" y2="-30" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
              <line x1="15" y1="-5" x2="15" y2="-25" stroke="#2A2A2A" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          {/* Front right arm */}
          <g>
            <line x1="515" y1="380" x2="600" y2="440" stroke="#3A3A3A" strokeWidth="14" strokeLinecap="round" />
            <circle cx="600" cy="440" r="9" fill="#3A3A3A" />
            {/* Hand */}
            <g transform="translate(600, 440)">
              <ellipse cx="0" cy="0" rx="38" ry="32" fill="white" stroke="#2A2A2A" strokeWidth="2.5" />
              <line x1="-18" y1="-5" x2="-18" y2="-28" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              <line x1="0" y1="-8" x2="0" y2="-32" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              <line x1="18" y1="-5" x2="18" y2="-28" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
              {/* Wrist band */}
              <ellipse cx="0" cy="10" rx="25" ry="8" fill="#2A2A2A" opacity="0.3" />
            </g>
          </g>
        </g>

        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat brim */}
          <ellipse
            cx="400"
            cy="185"
            rx="140"
            ry="30"
            fill="#3D5A80"
            stroke="#2A3F5F"
            strokeWidth="3"
          />
          <ellipse
            cx="400"
            cy="185"
            rx="140"
            ry="25"
            fill="#4A6FA5"
          />

          {/* Hat cone */}
          <path
            d="M 310 185 Q 350 80, 400 50 Q 450 80, 490 185 Z"
            fill="#3D5A80"
            stroke="#2A3F5F"
            strokeWidth="3"
          />
          <path
            d="M 315 185 Q 355 85, 400 55 Q 445 85, 485 185 Z"
            fill="#4A6FA5"
          />

          {/* Hat tip curve */}
          <path
            d="M 400 50 Q 480 65, 520 90"
            fill="none"
            stroke="#2A3F5F"
            strokeWidth="3"
          />
          <path
            d="M 400 50 Q 485 68, 525 95"
            fill="#3D5A80"
          />

          {/* Stars on hat */}
          <g id="star1" transform="translate(360, 130)">
            <path
              d="M 0,-12 L 3,-4 L 12,-4 L 5,2 L 8,10 L 0,5 L -8,10 L -5,2 L -12,-4 L -3,-4 Z"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>
          <g id="star2" transform="translate(480, 160)">
            <path
              d="M 0,-10 L 2.5,-3 L 10,-3 L 4,1.5 L 6.5,8 L 0,4 L -6.5,8 L -4,1.5 L -10,-3 L -2.5,-3 Z"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>
          <g id="star3" transform="translate(440, 100)">
            <path
              d="M 0,-8 L 2,-2.5 L 8,-2.5 L 3.5,1 L 5.5,7 L 0,3.5 L -5.5,7 L -3.5,1 L -8,-2.5 L -2,-2.5 Z"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>

          {/* Crescent moons on hat */}
          <g id="moon1" transform="translate(320, 160)">
            <path
              d="M 0,-15 A 12 12 0 1 0 0,15 A 15 15 0 1 1 0,-15"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>
          <g id="moon2" transform="translate(400, 90)">
            <path
              d="M 0,-12 A 10 10 0 1 0 0,12 A 12 12 0 1 1 0,-12"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>
          <g id="moon3" transform="translate(420, 170)">
            <path
              d="M 0,-10 A 8 8 0 1 0 0,10 A 10 10 0 1 1 0,-10"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>

          {/* Star on top of hat tip */}
          <g id="top-star" transform="translate(520, 95)">
            <path
              d="M 0,-15 L 4,-5 L 15,-5 L 6,2 L 10,13 L 0,6 L -10,13 L -6,2 L -15,-5 L -4,-5 Z"
              fill="#F4D03F"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
          </g>
        </g>

        {/* Shadow/shading details */}
        <ellipse
          cx="400"
          cy="180"
          rx="100"
          ry="10"
          fill="black"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}

export default WizardRobot;
