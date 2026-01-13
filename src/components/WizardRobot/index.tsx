interface WizardRobotProps {
  size?: number
}

function WizardRobot({ size = 400 }: WizardRobotProps) {
  return (
    <div className='wizard-robot__container flex items-center justify-center w-full p-8'>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className='wizard-robot'
      >
        {/* Background textured beige */}
        <defs>
          <pattern
            id="texture"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="0.5" fill="#8B7355" opacity="0.3" />
            <circle cx="7" cy="5" r="0.4" fill="#8B7355" opacity="0.2" />
            <circle cx="4" cy="8" r="0.3" fill="#8B7355" opacity="0.25" />
          </pattern>
        </defs>

        {/* Background rectangle with texture */}
        <rect width="400" height="400" fill="#E8DCC8" />
        <rect width="400" height="400" fill="url(#texture)" />

        {/* Circular frame border */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="#6B4E3D"
          strokeWidth="2.5"
        />

        {/* Horizontal line through the circle */}
        <line
          x1="60"
          y1="200"
          x2="340"
          y2="200"
          stroke="#6B4E3D"
          strokeWidth="2"
        />

        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat brim */}
          <ellipse
            cx="200"
            cy="140"
            rx="85"
            ry="15"
            fill="#3D5A7C"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Hat cone body */}
          <path
            d="M 115 140 Q 120 50, 190 40 Q 200 38, 210 40 Q 280 50, 285 140 Z"
            fill="#4A6A8F"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Stars and moons on hat */}
          {/* Star on top left */}
          <path
            d="M 165 75 L 168 82 L 176 82 L 170 87 L 172 95 L 165 90 L 158 95 L 160 87 L 154 82 L 162 82 Z"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Star on top right */}
          <path
            d="M 225 65 L 228 72 L 236 72 L 230 77 L 232 85 L 225 80 L 218 85 L 220 77 L 214 72 L 222 72 Z"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Crescent moon on left side of hat */}
          <path
            d="M 145 105 Q 140 105, 140 110 Q 140 115, 145 115 Q 142 115, 142 110 Q 142 105, 145 105"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Crescent moon on right side */}
          <path
            d="M 255 95 Q 250 95, 250 100 Q 250 105, 255 105 Q 252 105, 252 100 Q 252 95, 255 95"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Star on brim left */}
          <path
            d="M 135 130 L 137 135 L 143 135 L 138 139 L 140 145 L 135 141 L 130 145 L 132 139 L 127 135 L 133 135 Z"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Star on brim right */}
          <path
            d="M 265 130 L 267 135 L 273 135 L 268 139 L 270 145 L 265 141 L 260 145 L 262 139 L 257 135 L 263 135 Z"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Crescent moon on cone */}
          <path
            d="M 195 85 Q 190 85, 190 92 Q 190 99, 195 99 Q 192 99, 192 92 Q 192 85, 195 85"
            fill="#F59E0B"
            stroke="#1F2937"
            strokeWidth="1"
          />
        </g>

        {/* Monitor Screen Head */}
        <g id="monitor-head">
          {/* Outer brown frame */}
          <rect
            x="135"
            y="150"
            width="130"
            height="90"
            rx="5"
            fill="#8B6F47"
            stroke="#1F2937"
            strokeWidth="2.5"
          />

          {/* Inner darker bezel */}
          <rect
            x="142"
            y="157"
            width="116"
            height="76"
            rx="3"
            fill="#6B563D"
            stroke="#1F2937"
            strokeWidth="1.5"
          />

          {/* Green screen with gradient */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9ACD32" />
              <stop offset="50%" stopColor="#8BC34A" />
              <stop offset="100%" stopColor="#7CB342" />
            </linearGradient>
          </defs>

          <rect
            x="148"
            y="163"
            width="104"
            height="64"
            rx="2"
            fill="url(#screenGradient)"
            stroke="#1F2937"
            strokeWidth="1"
          />

          {/* Screen highlights/reflections */}
          <ellipse
            cx="175"
            cy="180"
            rx="25"
            ry="15"
            fill="#E8F5E9"
            opacity="0.4"
          />

          <ellipse
            cx="220"
            cy="200"
            rx="30"
            ry="20"
            fill="#F1F8E9"
            opacity="0.3"
          />
        </g>

        {/* Body Torso */}
        <g id="body-torso">
          {/* Main body rectangle */}
          <rect
            x="155"
            y="240"
            width="90"
            height="60"
            rx="5"
            fill="#A68A5C"
            stroke="#1F2937"
            strokeWidth="2.5"
          />

          {/* Darker panel below screen */}
          <rect
            x="165"
            y="265"
            width="70"
            height="20"
            rx="2"
            fill="#7A6644"
            stroke="#1F2937"
            strokeWidth="1.5"
          />

          {/* Circular button on torso */}
          <circle
            cx="200"
            cy="252"
            r="6"
            fill="#D4A574"
            stroke="#1F2937"
            strokeWidth="1.5"
          />
        </g>

        {/* Robotic Arms (4 arms total - 2 left, 2 right) */}
        <g id="robot-arms">
          {/* Left upper arm */}
          <line
            x1="155"
            y1="255"
            x2="105"
            y2="230"
            stroke="#1F2937"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Left lower arm */}
          <line
            x1="155"
            y1="270"
            x2="100"
            y2="260"
            stroke="#1F2937"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Right upper arm */}
          <line
            x1="245"
            y1="255"
            x2="295"
            y2="230"
            stroke="#1F2937"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Right lower arm */}
          <line
            x1="245"
            y1="270"
            x2="300"
            y2="260"
            stroke="#1F2937"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Left upper hand */}
          <g transform="translate(105, 230)">
            <ellipse
              cx="0"
              cy="0"
              rx="12"
              ry="8"
              fill="#FFFFFF"
              stroke="#1F2937"
              strokeWidth="2"
            />
            {/* Fingers */}
            <line x1="-8" y1="-5" x2="-10" y2="-12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="-2" y1="-6" x2="-2" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="-6" x2="4" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Left lower hand */}
          <g transform="translate(100, 260)">
            <ellipse
              cx="0"
              cy="0"
              rx="12"
              ry="8"
              fill="#FFFFFF"
              stroke="#1F2937"
              strokeWidth="2"
            />
            {/* Fingers */}
            <line x1="-8" y1="-5" x2="-10" y2="-12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="-2" y1="-6" x2="-2" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="-6" x2="4" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Right upper hand */}
          <g transform="translate(295, 230)">
            <ellipse
              cx="0"
              cy="0"
              rx="12"
              ry="8"
              fill="#FFFFFF"
              stroke="#1F2937"
              strokeWidth="2"
            />
            {/* Fingers */}
            <line x1="-4" y1="-6" x2="-4" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="-6" x2="2" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="-5" x2="10" y2="-12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Right lower hand */}
          <g transform="translate(300, 260)">
            <ellipse
              cx="0"
              cy="0"
              rx="12"
              ry="8"
              fill="#FFFFFF"
              stroke="#1F2937"
              strokeWidth="2"
            />
            {/* Fingers */}
            <line x1="-4" y1="-6" x2="-4" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="-6" x2="2" y2="-14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="-5" x2="10" y2="-12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Robotic Legs */}
        <g id="robot-legs">
          {/* Left leg upper segment */}
          <rect
            x="170"
            y="300"
            width="15"
            height="25"
            rx="2"
            fill="#8B6F47"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Left leg joint */}
          <circle
            cx="177.5"
            cy="325"
            r="4"
            fill="#6B563D"
            stroke="#1F2937"
            strokeWidth="1.5"
          />

          {/* Left leg lower segment */}
          <rect
            x="170"
            y="325"
            width="15"
            height="20"
            rx="2"
            fill="#8B6F47"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Left foot */}
          <rect
            x="165"
            y="345"
            width="25"
            height="12"
            rx="3"
            fill="#6B563D"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Right leg upper segment */}
          <rect
            x="215"
            y="300"
            width="15"
            height="25"
            rx="2"
            fill="#8B6F47"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Right leg joint */}
          <circle
            cx="222.5"
            cy="325"
            r="4"
            fill="#6B563D"
            stroke="#1F2937"
            strokeWidth="1.5"
          />

          {/* Right leg lower segment */}
          <rect
            x="215"
            y="325"
            width="15"
            height="20"
            rx="2"
            fill="#8B6F47"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Right foot */}
          <rect
            x="210"
            y="345"
            width="25"
            height="12"
            rx="3"
            fill="#6B563D"
            stroke="#1F2937"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  )
}

export default WizardRobot
