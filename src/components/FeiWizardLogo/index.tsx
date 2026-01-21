interface FeiWizardLogoProps {
  size?: number;
  className?: string;
}

function FeiWizardLogo({ size = 200, className = '' }: FeiWizardLogoProps) {
  return (
    <div 
      className={`fei-wizard-logo relative inline-block ${className}`}
      style={{ 
        width: size, 
        height: size
      }}
    >
      <svg 
        viewBox="0 0 256 320" 
        width="100%" 
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Fei the Wizard - Vite Magical Assistant"
        className='block'
      >
        <defs>
          {/* Original Vite gradients */}
          <linearGradient id="viteGradient1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
            <stop offset="0%" stopColor="#41D1FF"></stop>
            <stop offset="100%" stopColor="#BD34FE"></stop>
          </linearGradient>
          <linearGradient id="viteGradient2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
            <stop offset="0%" stopColor="#FFEA83"></stop>
            <stop offset="8.333%" stopColor="#FFDD35"></stop>
            <stop offset="100%" stopColor="#FFA800"></stop>
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle 
          cx="128" 
          cy="160" 
          r="120" 
          fill="#F5F5DC" 
          stroke="#8B4513" 
          strokeWidth="2"
        />

        {/* Wizard Hat */}
        <g transform="translate(128, 20)">
          {/* Top Hat on Wizard Hat */}
          <g transform="translate(0, -15)">
            {/* Top Hat Brim */}
            <ellipse 
              cx="0" 
              cy="0" 
              rx="30" 
              ry="6" 
              fill="#1a1a1a"
              stroke="#000"
              strokeWidth="1.5"
            />
            {/* Top Hat Cylinder */}
            <rect 
              x="-20" 
              y="-25" 
              width="40" 
              height="25" 
              fill="#2d2d2d"
              stroke="#000"
              strokeWidth="1.5"
            />
            {/* Top Hat Top */}
            <ellipse 
              cx="0" 
              cy="-25" 
              rx="20" 
              ry="5" 
              fill="#1a1a1a"
              stroke="#000"
              strokeWidth="1.5"
            />
            {/* Hat Band */}
            <rect 
              x="-20" 
              y="-8" 
              width="40" 
              height="6" 
              fill="#8B0000"
              stroke="#5a0000"
              strokeWidth="1"
            />
            {/* Shine effect */}
            <ellipse 
              cx="-8" 
              cy="-18" 
              rx="6" 
              ry="4" 
              fill="rgba(255, 255, 255, 0.15)"
            />
          </g>
          
          {/* Hat Cone */}
          <path 
            d="M 0,-10 L -40,60 L 40,60 Z" 
            fill="#2C3E7A" 
            stroke="#1a2550"
            strokeWidth="2"
          />
          
          {/* Hat Brim */}
          <ellipse 
            cx="0" 
            cy="60" 
            rx="60" 
            ry="12" 
            fill="#2C3E7A"
            stroke="#1a2550"
            strokeWidth="2"
          />
          
          {/* Stars on Hat */}
          <g fill="#FFD700">
            {/* Star 1 */}
            <path d="M -15,10 L -12,18 L -20,18 L -13,23 L -16,31 L -15,23 L -8,18 L -15,18 Z" transform="scale(0.6)" />
            {/* Star 2 */}
            <path d="M 15,25 L 18,33 L 10,33 L 17,38 L 14,46 L 15,38 L 22,33 L 15,33 Z" transform="scale(0.6)" />
            {/* Star 3 */}
            <path d="M 25,45 L 28,53 L 20,53 L 27,58 L 24,66 L 25,58 L 32,53 L 25,53 Z" transform="scale(0.5)" />
          </g>

          {/* Moons on Hat */}
          <g fill="#FFD700">
            {/* Moon 1 */}
            <g transform="translate(-25, 30)">
              <circle cx="0" cy="0" r="6" />
              <circle cx="3" cy="0" r="6" fill="#2C3E7A" />
            </g>
            {/* Moon 2 */}
            <g transform="translate(5, 45)">
              <circle cx="0" cy="0" r="5" />
              <circle cx="2.5" cy="0" r="5" fill="#2C3E7A" />
            </g>
            {/* Moon 3 */}
            <g transform="translate(-5, 15)">
              <circle cx="0" cy="0" r="4" />
              <circle cx="2" cy="0" r="4" fill="#2C3E7A" />
            </g>
          </g>

          {/* Hat tip fold */}
          <path 
            d="M -5,-5 Q 10,-15 15,5" 
            fill="none"
            stroke="#1a2550"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Robot Body with TV Screen */}
        <g transform="translate(128, 160)">
          {/* Body Container */}
          <rect 
            x="-50" 
            y="-40" 
            width="100" 
            height="100" 
            rx="8"
            fill="#A0826D"
            stroke="#654321"
            strokeWidth="2"
          />

          {/* TV Screen Frame */}
          <rect 
            x="-40" 
            y="-30" 
            width="80" 
            height="50" 
            rx="4"
            fill="#654321"
            stroke="#3d2813"
            strokeWidth="2"
          />

          {/* TV Screen with Vite Logo */}
          <rect 
            x="-35" 
            y="-25" 
            width="70" 
            height="40" 
            rx="2"
            fill="#7FB069"
          />

          {/* Vite Logo inside screen - scaled down */}
          <g transform="translate(0, -5) scale(0.15)">
            <path 
              fill="url(#viteGradient1)" 
              d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
              transform="translate(-128, -128)"
            />
            <path 
              fill="url(#viteGradient2)" 
              d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
              transform="translate(-128, -128)"
            />
          </g>

          {/* Screen Reflection */}
          <ellipse 
            cx="-15" 
            cy="-15" 
            rx="15" 
            ry="10" 
            fill="rgba(255, 255, 255, 0.2)"
          />

          {/* Control Button */}
          <circle 
            cx="0" 
            cy="35" 
            r="6" 
            fill="#D4A574"
            stroke="#8B6F47"
            strokeWidth="1"
          />
        </g>

        {/* Robot Arms (4 arms) */}
        <g transform="translate(128, 160)">
          {/* Left Upper Arm */}
          <g transform="translate(-50, -10)">
            <rect x="-25" y="-3" width="30" height="6" rx="3" fill="#333" />
            {/* Hand */}
            <g transform="translate(-28, 0)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
              {/* Fingers */}
              <rect x="-10" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="-6" y="-4" width="3" height="10" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="-2" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
            </g>
          </g>

          {/* Left Lower Arm */}
          <g transform="translate(-50, 10)">
            <rect x="-25" y="-3" width="30" height="6" rx="3" fill="#333" />
            {/* Hand */}
            <g transform="translate(-28, 0)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
              {/* Fingers */}
              <rect x="-10" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="-6" y="-4" width="3" height="10" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="-2" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
            </g>
          </g>

          {/* Right Upper Arm */}
          <g transform="translate(50, -10)">
            <rect x="-5" y="-3" width="30" height="6" rx="3" fill="#333" />
            {/* Hand */}
            <g transform="translate(28, 0)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
              {/* Fingers */}
              <rect x="-1" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="3" y="-4" width="3" height="10" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="7" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
            </g>
          </g>

          {/* Right Lower Arm */}
          <g transform="translate(50, 10)">
            <rect x="-5" y="-3" width="30" height="6" rx="3" fill="#333" />
            {/* Hand */}
            <g transform="translate(28, 0)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1" />
              {/* Fingers */}
              <rect x="-1" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="3" y="-4" width="3" height="10" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
              <rect x="7" y="-2" width="3" height="8" rx="1.5" fill="white" stroke="#333" strokeWidth="1" />
            </g>
          </g>
        </g>

        {/* Robot Legs */}
        <g transform="translate(128, 220)">
          {/* Left Leg */}
          <g transform="translate(-15, 0)">
            <rect x="-6" y="0" width="12" height="30" fill="#333" />
            {/* Foot */}
            <rect x="-8" y="28" width="16" height="12" rx="3" fill="#654321" stroke="#3d2813" strokeWidth="1" />
          </g>

          {/* Right Leg */}
          <g transform="translate(15, 0)">
            <rect x="-6" y="0" width="12" height="30" fill="#333" />
            {/* Foot */}
            <rect x="-8" y="28" width="16" height="12" rx="3" fill="#654321" stroke="#3d2813" strokeWidth="1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default FeiWizardLogo;
