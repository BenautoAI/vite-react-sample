interface ViteLogoProps {
  width?: number;
  height?: number;
  showFeiAvatar?: boolean;
  className?: string;
}

function ViteLogo(props: ViteLogoProps) {
  const { width = 200, height = 200, showFeiAvatar = true, className = "" } = props;
  
  return (
    <div 
      className={`vite-logo__container relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Vite logo gradients */}
          <linearGradient id="viteGradient1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="viteGradient2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
            <stop offset="0%" stopColor="#FFEA83" />
            <stop offset="8.333%" stopColor="#FFDD35" />
            <stop offset="100%" stopColor="#FFA800" />
          </linearGradient>
          
          {/* Screen gradient for Fei Avatar */}
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A5D6A7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7CB342" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#558B2F" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Vite Logo - Scaled and positioned */}
        <g transform="translate(100, 80) scale(0.9)">
          <path 
            fill="url(#viteGradient1)" 
            d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            transform="scale(0.8)"
          />
          <path 
            fill="url(#viteGradient2)" 
            d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            transform="scale(0.8)"
          />
        </g>

        {/* Fei Avatar - Positioned to overlay/integrate with Vite logo */}
        {showFeiAvatar && (
          <g transform="translate(180, 100) scale(0.35)">
            {/* Wizard Hat */}
            <g id="wizard-hat">
              {/* Hat base */}
              <ellipse cx="0" cy="0" rx="100" ry="18" fill="#4A6B8A" stroke="#2C3E50" strokeWidth="2" />
              
              {/* Hat cone */}
              <path
                d="M -50 0 Q -20 -120, 0 -140 Q 20 -120, 50 0 Z"
                fill="#4A6B8A"
                stroke="#2C3E50"
                strokeWidth="2"
              />
              
              {/* Celestial symbols on hat */}
              <g id="celestial-symbols">
                {/* Stars */}
                <path d="M -15 -80 L -12 -73 L -4 -73 L -11 -68 L -8 -60 L -15 -65 L -22 -60 L -19 -68 L -26 -73 L -18 -73 Z" fill="#F4D03F" />
                <path d="M 40 -50 L 43 -43 L 51 -43 L 44 -38 L 47 -30 L 40 -35 L 33 -30 L 36 -38 L 29 -43 L 37 -43 Z" fill="#F4D03F" />
                <path d="M 75 -5 L 78 2 L 86 2 L 79 7 L 82 15 L 75 10 L 68 15 L 71 7 L 64 2 L 72 2 Z" fill="#F4D03F" />
                
                {/* Crescent moons */}
                <path d="M -35 -40 Q -30 -40, -30 -30 Q -35 -30, -35 -25 Q -40 -30, -40 -40 Q -38 -40, -35 -40 Z" fill="#F4D03F" />
                <path d="M 10 -10 Q 15 -10, 15 0 Q 10 0, 10 5 Q 5 0, 5 -10 Q 7 -10, 10 -10 Z" fill="#F4D03F" />
                <path d="M -55 -10 Q -50 -10, -50 0 Q -55 0, -55 5 Q -60 0, -60 -10 Q -58 -10, -55 -10 Z" fill="#F4D03F" />
              </g>
              
              {/* Hat tip/curl */}
              <path
                d="M 0 -140 Q 10 -145, 20 -140 Q 25 -135, 30 -130"
                fill="none"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Robot Body (Monitor) */}
            <g id="robot-body" transform="translate(0, 30)">
              {/* Body frame */}
              <rect x="-70" y="0" width="140" height="120" rx="10" fill="#9B6B4A" stroke="#5D4037" strokeWidth="3" />
              
              {/* Screen */}
              <rect x="-55" y="15" width="110" height="70" rx="5" fill="#7CB342" stroke="#5D4037" strokeWidth="2" />
              <rect x="-55" y="15" width="110" height="70" rx="5" fill="url(#screenGradient)" opacity="0.7" />
              
              {/* Screen highlights */}
              <ellipse cx="-30" cy="35" rx="15" ry="10" fill="#E8F5E9" opacity="0.5" />
              <path d="M -10 45 Q 10 50, 30 65" fill="none" stroke="#E8F5E9" strokeWidth="3" opacity="0.4" />
              
              {/* Center button */}
              <circle cx="0" cy="105" r="8" fill="#F4D03F" stroke="#5D4037" strokeWidth="2" />
            </g>

            {/* Arms */}
            <g id="arms" transform="translate(0, 30)">
              {/* Left arms */}
              <g id="left-arms">
                <line x1="-70" y1="30" x2="-120" y2="20" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
                <circle cx="-70" cy="30" r="4" fill="#5D4037" />
                <g transform="translate(-120, 20) rotate(-20)">
                  <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
                  <line x1="-8" y1="-3" x2="-8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="-4" y1="-4" x2="-4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="4" y1="-3" x2="4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                </g>
                
                <line x1="-70" y1="60" x2="-115" y2="80" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
                <circle cx="-70" cy="60" r="4" fill="#5D4037" />
                <g transform="translate(-115, 80) rotate(20)">
                  <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
                  <line x1="-8" y1="-3" x2="-8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="-4" y1="-4" x2="-4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="4" y1="-3" x2="4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                </g>
              </g>
              
              {/* Right arms */}
              <g id="right-arms">
                <line x1="70" y1="30" x2="120" y2="20" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
                <circle cx="70" cy="30" r="4" fill="#5D4037" />
                <g transform="translate(120, 20) rotate(20)">
                  <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
                  <line x1="-4" y1="-3" x2="-4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="4" y1="-4" x2="4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="8" y1="-3" x2="8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                </g>
                
                <line x1="70" y1="60" x2="115" y2="80" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
                <circle cx="70" cy="60" r="4" fill="#5D4037" />
                <g transform="translate(115, 80) rotate(-20)">
                  <ellipse cx="0" cy="0" rx="12" ry="8" fill="#EEEEEE" stroke="#3E2723" strokeWidth="2" />
                  <line x1="-4" y1="-3" x2="-4" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="4" y1="-4" x2="4" y2="4" stroke="#3E2723" strokeWidth="1.5" />
                  <line x1="8" y1="-3" x2="8" y2="3" stroke="#3E2723" strokeWidth="1.5" />
                </g>
              </g>
            </g>

            {/* Legs and Feet */}
            <g id="legs" transform="translate(0, 30)">
              <line x1="-30" y1="120" x2="-30" y2="140" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
              <rect x="-40" y="140" width="20" height="15" rx="3" fill="#5D4037" stroke="#3E2723" strokeWidth="2" />
              
              <line x1="30" y1="120" x2="30" y2="140" stroke="#3E2723" strokeWidth="6" strokeLinecap="round" />
              <rect x="20" y="140" width="20" height="15" rx="3" fill="#5D4037" stroke="#3E2723" strokeWidth="2" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}

export default ViteLogo;
