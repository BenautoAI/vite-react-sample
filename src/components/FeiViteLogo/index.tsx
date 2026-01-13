interface FeiViteLogoProps {
  className?: string,
  width?: number,
  height?: number
}

function FeiViteLogo(props: FeiViteLogoProps) {
  const { className = '', width = 150, height = 180 } = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={width}
      height={height}
      viewBox="0 0 256 300"
      aria-label="Vite Logo with Fei Avatar"
      role="img"
    >
      <defs>
        <linearGradient id="viteGradient1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="viteGradient2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="8.333%" stopColor="#FFDD35" />
          <stop offset="100%" stopColor="#FFA800" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9AE65C" />
          <stop offset="100%" stopColor="#D9F99D" />
        </linearGradient>
      </defs>
      
      {/* Original Vite Logo */}
      <path 
        fill="url(#viteGradient1)" 
        d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
      />
      <path 
        fill="url(#viteGradient2)" 
        d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
      />
      
      {/* Fei Avatar Character with Wizard Hat */}
      <g transform="translate(80, 210)">
        {/* Wizard Hat */}
        <g id="wizardHat">
          {/* Hat body */}
          <path 
            fill="#3B5A8F" 
            stroke="#2C3E50" 
            strokeWidth="1.5" 
            d="M 50 -15 Q 48 -55, 35 -75 Q 30 -82, 20 -80 Q 15 -78, 18 -70 L 35 -20 L 15 -15 Q 10 -12, 12 -8 L 88 -8 Q 90 -12, 85 -15 Z"
          />
          
          {/* Stars on hat */}
          <path 
            fill="#FFC107" 
            d="M 25 -50 l 2 6 l 6 1 l -5 4 l 2 6 l -5 -3 l -5 3 l 2 -6 l -5 -4 l 6 -1 Z"
          />
          <path 
            fill="#FFC107" 
            d="M 70 -25 l 1.5 4.5 l 4.5 0.5 l -3.5 3 l 1.5 4.5 l -3.5 -2 l -3.5 2 l 1.5 -4.5 l -3.5 -3 l 4.5 -0.5 Z"
          />
          
          {/* Moons on hat */}
          <path 
            fill="#FFC107" 
            d="M 42 -40 Q 40 -45, 45 -43 Q 48 -40, 45 -38 Q 42 -37, 42 -40 Z"
          />
          <path 
            fill="#FFC107" 
            d="M 55 -60 Q 53 -65, 58 -63 Q 61 -60, 58 -58 Q 55 -57, 55 -60 Z"
          />
        </g>
        
        {/* Monitor/Screen Body */}
        <g id="monitorBody">
          {/* Monitor frame */}
          <rect 
            x="20" 
            y="0" 
            width="60" 
            height="50" 
            rx="4" 
            fill="#8B6F47" 
            stroke="#5C4A33" 
            strokeWidth="2"
          />
          
          {/* Screen with green gradient */}
          <rect 
            x="26" 
            y="6" 
            width="48" 
            height="36" 
            rx="2" 
            fill="url(#screenGradient)"
          />
          
          {/* Screen highlights */}
          <ellipse 
            cx="40" 
            cy="18" 
            rx="12" 
            ry="8" 
            fill="white" 
            opacity="0.3"
          />
          <ellipse 
            cx="62" 
            cy="30" 
            rx="8" 
            ry="6" 
            fill="white" 
            opacity="0.2"
          />
          
          {/* Monitor button */}
          <circle 
            cx="50" 
            cy="54" 
            r="3" 
            fill="#D4A76A" 
            stroke="#5C4A33" 
            strokeWidth="1"
          />
        </g>
        
        {/* Arms (4 arms like in the image) */}
        <g id="arms">
          {/* Left upper arm */}
          <g transform="translate(18, 20)">
            <line 
              x1="0" 
              y1="0" 
              x2="-15" 
              y2="-8" 
              stroke="#2C3E50" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Left upper hand */}
            <ellipse 
              cx="-16" 
              cy="-10" 
              rx="6" 
              ry="5" 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1"
            />
            <path 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1" 
              d="M -16 -12 q -2 -3, -1 -5 q 1 -2, 3 0 q 1 2, 0 4 M -13 -12 q -1 -4, 0 -6 q 2 -2, 3 1 q 0 3, -1 4 M -10 -11 q 0 -3, 1 -5 q 2 -1, 2 2 q -1 3, -1 4"
            />
          </g>
          
          {/* Left lower arm */}
          <g transform="translate(18, 30)">
            <line 
              x1="0" 
              y1="0" 
              x2="-18" 
              y2="5" 
              stroke="#2C3E50" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Left lower hand */}
            <ellipse 
              cx="-20" 
              cy="4" 
              rx="6" 
              ry="5" 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1"
            />
            <path 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1" 
              d="M -20 2 q -2 -3, -1 -5 q 1 -2, 3 0 q 1 2, 0 4 M -17 2 q -1 -4, 0 -6 q 2 -2, 3 1 q 0 3, -1 4 M -14 3 q 0 -3, 1 -5 q 2 -1, 2 2 q -1 3, -1 4"
            />
          </g>
          
          {/* Right upper arm */}
          <g transform="translate(82, 20)">
            <line 
              x1="0" 
              y1="0" 
              x2="15" 
              y2="-8" 
              stroke="#2C3E50" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Right upper hand */}
            <ellipse 
              cx="16" 
              cy="-10" 
              rx="6" 
              ry="5" 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1"
            />
            <path 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1" 
              d="M 16 -12 q 2 -3, 1 -5 q -1 -2, -3 0 q -1 2, 0 4 M 13 -12 q 1 -4, 0 -6 q -2 -2, -3 1 q 0 3, 1 4 M 10 -11 q 0 -3, -1 -5 q -2 -1, -2 2 q 1 3, 1 4"
            />
          </g>
          
          {/* Right lower arm */}
          <g transform="translate(82, 30)">
            <line 
              x1="0" 
              y1="0" 
              x2="18" 
              y2="5" 
              stroke="#2C3E50" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Right lower hand */}
            <ellipse 
              cx="20" 
              cy="4" 
              rx="6" 
              ry="5" 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1"
            />
            <path 
              fill="white" 
              stroke="#2C3E50" 
              strokeWidth="1" 
              d="M 20 2 q 2 -3, 1 -5 q -1 -2, -3 0 q -1 2, 0 4 M 17 2 q 1 -4, 0 -6 q -2 -2, -3 1 q 0 3, 1 4 M 14 3 q 0 -3, -1 -5 q -2 -1, -2 2 q 1 3, 1 4"
            />
          </g>
        </g>
        
        {/* Legs */}
        <g id="legs">
          {/* Left leg */}
          <rect x="35" y="56" width="8" height="18" rx="2" fill="#5C4A33" />
          {/* Left boot */}
          <ellipse cx="39" cy="76" rx="6" ry="4" fill="#3D2817" />
          <rect x="33" y="72" width="12" height="6" rx="2" fill="#3D2817" />
          
          {/* Right leg */}
          <rect x="57" y="56" width="8" height="18" rx="2" fill="#5C4A33" />
          {/* Right boot */}
          <ellipse cx="61" cy="76" rx="6" ry="4" fill="#3D2817" />
          <rect x="55" y="72" width="12" height="6" rx="2" fill="#3D2817" />
        </g>
      </g>
    </svg>
  );
}

export default FeiViteLogo;
