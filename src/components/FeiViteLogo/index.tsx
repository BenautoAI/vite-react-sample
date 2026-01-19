interface FeiViteLogoProps {
  width?: number;
  height?: number;
}

function FeiViteLogo(props: FeiViteLogoProps) {
  const { width = 200, height = 200 } = props;
  return (
    <div className="fei-vite-logo__container flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 300 350"
        className="fei-vite-logo__avatar"
      >
        {/* Background Circle */}
        <circle cx="150" cy="150" r="140" fill="none" stroke="#7C4A4A" strokeWidth="2" />
        
        {/* Vitruvian Square Frame */}
        <rect x="20" y="90" width="260" height="220" fill="none" stroke="#7C4A4A" strokeWidth="2" />
        
        {/* Wizard Hat */}
        <g className="wizard-hat">
          {/* Hat brim */}
          <ellipse cx="150" cy="85" rx="70" ry="15" fill="#3B4A6B" />
          {/* Hat cone */}
          <path d="M 90 85 Q 150 10, 210 85 Z" fill="#3B4A6B" />
          {/* Stars and moons decoration */}
          <circle cx="120" cy="50" r="4" fill="#FCD34D" />
          <circle cx="180" cy="50" r="4" fill="#FCD34D" />
          <path d="M 150 35 L 152 40 L 157 41 L 152 44 L 153 49 L 150 46 L 147 49 L 148 44 L 143 41 L 148 40 Z" fill="#FCD34D" />
          <path d="M 160 65 Q 165 60, 170 65 Q 165 62, 160 65 Z" fill="#FCD34D" />
          <path d="M 135 65 Q 140 60, 145 65 Q 140 62, 135 65 Z" fill="#FCD34D" />
        </g>

        {/* Monitor Body */}
        <g className="monitor-body">
          {/* Monitor casing */}
          <rect x="95" y="90" width="110" height="95" rx="8" fill="#8B6F47" stroke="#5C4A3A" strokeWidth="2" />
          
          {/* Screen */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#9AE66E', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6BCF7E', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="105" y="100" width="90" height="65" rx="5" fill="url(#screenGradient)" />
          
          {/* Screen reflection */}
          <ellipse cx="130" cy="120" rx="25" ry="15" fill="#DAFFB3" opacity="0.5" />
          <ellipse cx="170" cy="145" rx="15" ry="10" fill="#DAFFB3" opacity="0.3" />
          
          {/* Control panel */}
          <rect x="95" y="170" width="110" height="15" rx="3" fill="#6B5638" />
          <circle cx="150" cy="177.5" r="4" fill="#D4A574" />
        </g>

        {/* Upper Left Arm */}
        <g className="arm upper-left">
          <line x1="95" y1="120" x2="65" y2="100" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          <line x1="65" y1="100" x2="45" y2="110" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          {/* Hand */}
          <ellipse cx="45" cy="110" rx="12" ry="10" fill="#FFFFFF" />
          <line x1="40" y1="105" x2="38" y2="95" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="105" x2="43" y2="93" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="105" x2="48" y2="95" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Upper Right Arm */}
        <g className="arm upper-right">
          <line x1="205" y1="120" x2="235" y2="100" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          <line x1="235" y1="100" x2="255" y2="110" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          {/* Hand */}
          <ellipse cx="255" cy="110" rx="12" ry="10" fill="#FFFFFF" />
          <line x1="250" y1="105" x2="248" y2="95" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="255" y1="105" x2="253" y2="93" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="260" y1="105" x2="258" y2="95" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Lower Left Arm */}
        <g className="arm lower-left">
          <line x1="95" y1="150" x2="70" y2="165" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          <line x1="70" y1="165" x2="55" y2="175" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          {/* Hand */}
          <ellipse cx="55" cy="175" rx="12" ry="10" fill="#FFFFFF" />
          <line x1="50" y1="170" x2="48" y2="160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="170" x2="53" y2="158" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="170" x2="58" y2="160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Lower Right Arm */}
        <g className="arm lower-right">
          <line x1="205" y1="150" x2="230" y2="165" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          <line x1="230" y1="165" x2="245" y2="175" stroke="#4A4A4A" strokeWidth="6" strokeLinecap="round" />
          {/* Hand */}
          <ellipse cx="245" cy="175" rx="12" ry="10" fill="#FFFFFF" />
          <line x1="240" y1="170" x2="238" y2="160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="245" y1="170" x2="243" y2="158" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="250" y1="170" x2="248" y2="160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Left Leg */}
        <g className="leg left">
          <line x1="130" y1="185" x2="130" y2="220" stroke="#5C4A3A" strokeWidth="8" strokeLinecap="round" />
          <line x1="130" y1="220" x2="130" y2="240" stroke="#5C4A3A" strokeWidth="8" strokeLinecap="round" />
          {/* Foot */}
          <ellipse cx="130" cy="245" rx="15" ry="8" fill="#6B5638" />
          <rect x="115" y="237" width="30" height="12" rx="3" fill="#6B5638" />
        </g>

        {/* Right Leg */}
        <g className="leg right">
          <line x1="170" y1="185" x2="170" y2="220" stroke="#5C4A3A" strokeWidth="8" strokeLinecap="round" />
          <line x1="170" y1="220" x2="170" y2="240" stroke="#5C4A3A" strokeWidth="8" strokeLinecap="round" />
          {/* Foot */}
          <ellipse cx="170" cy="245" rx="15" ry="8" fill="#6B5638" />
          <rect x="155" y="237" width="30" height="12" rx="3" fill="#6B5638" />
        </g>

        {/* Vite Logo Integration (smaller, on monitor screen) */}
        <g transform="translate(120, 115) scale(0.15)">
          <defs>
            <linearGradient id="viteGrad1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="viteGrad2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="8.333%" stopColor="#FFDD35" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>
          </defs>
          <path fill="url(#viteGrad1)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" />
          <path fill="url(#viteGrad2)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" />
        </g>
      </svg>
    </div>
  );
}

export default FeiViteLogo;
