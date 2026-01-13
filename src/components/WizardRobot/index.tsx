interface WizardRobotProps {
  size?: number
}

function WizardRobot(props: WizardRobotProps) {
  const size = props.size || 400

  return (
    <div className='wizard-robot__container flex items-center justify-center w-full p-8'>
      <style>
        {`
          @keyframes dance {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-10px) rotate(-5deg);
            }
            50% {
              transform: translateY(0) rotate(0deg);
            }
            75% {
              transform: translateY(-10px) rotate(5deg);
            }
          }

          @keyframes wave-left {
            0%, 100% {
              transform: rotate(-20deg);
            }
            50% {
              transform: rotate(-40deg);
            }
          }

          @keyframes wave-right {
            0%, 100% {
              transform: rotate(20deg);
            }
            50% {
              transform: rotate(40deg);
            }
          }

          @keyframes bounce-legs {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes wiggle-hat {
            0%, 100% {
              transform: rotate(-2deg);
            }
            50% {
              transform: rotate(2deg);
            }
          }

          .wizard-robot {
            animation: dance 1.5s ease-in-out infinite;
          }

          #wizard-hat {
            transform-origin: 200px 140px;
            animation: wiggle-hat 0.5s ease-in-out infinite;
          }

          #robot-legs {
            animation: bounce-legs 0.75s ease-in-out infinite;
          }

          #left-arms {
            transform-origin: 130px 240px;
            animation: wave-left 0.6s ease-in-out infinite;
          }

          #right-arms {
            transform-origin: 270px 240px;
            animation: wave-right 0.6s ease-in-out infinite;
          }
        `}
      </style>
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
          <linearGradient id="viteGrad1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
            <stop offset="0%" stopColor="#41D1FF"></stop>
            <stop offset="100%" stopColor="#BD34FE"></stop>
          </linearGradient>
          <linearGradient id="viteGrad2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
            <stop offset="0%" stopColor="#FFEA83"></stop>
            <stop offset="8.333%" stopColor="#FFDD35"></stop>
            <stop offset="100%" stopColor="#FFA800"></stop>
          </linearGradient>
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

          {/* Vite Logo */}
          <g transform="translate(75, 210)">
            {/* Vite logo background glow */}
            <defs>
              <linearGradient id="vite-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#41D1FF" />
                <stop offset="100%" stopColor="#BD34FE" />
              </linearGradient>
              <linearGradient id="vite-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFEA83" />
                <stop offset="100%" stopColor="#FFDD35" />
              </linearGradient>
            </defs>
            
            {/* Lightning bolt (back part - purple/blue gradient) */}
            <path
              d="M 12 1 L 4 13 L 9 13 L 8 23 L 18 9 L 13 9 L 15 1 Z"
              fill="url(#vite-gradient-1)"
              stroke="#1F2937"
              strokeWidth="0.8"
            />
            
            {/* Lightning bolt (front part - yellow gradient) */}
            <path
              d="M 13 1 L 9 10 L 11 10 L 8 17 L 14 9 L 12 9 L 14 1 Z"
              fill="url(#vite-gradient-2)"
              stroke="#1F2937"
              strokeWidth="0.6"
            />
          </g>

          {/* Left upper hand with Vite logo */}
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
            
            {/* Vite Logo in left hand */}
            <g transform="translate(-12, -25) scale(0.15)">
              <path fill="url(#viteGrad1)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path>
              <path fill="url(#viteGrad2)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path>
            </g>
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

          {/* Right upper hand with Vite logo */}
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
            
            {/* Vite Logo in right hand */}
            <g transform="translate(-12, -25) scale(0.15)">
              <path fill="url(#viteGrad1)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path>
              <path fill="url(#viteGrad2)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path>
            </g>
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
