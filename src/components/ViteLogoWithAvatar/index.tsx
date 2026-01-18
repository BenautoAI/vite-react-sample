interface ViteLogoWithAvatarProps {
  size?: number;
}

function ViteLogoWithAvatar(props: ViteLogoWithAvatarProps) {
  const size = props.size ?? 400;
  return (
    <div 
className="
        vite-logo-avatar__container 
        relative 
        flex 
        items-center 
        justify-center
      "
      style={{ width: size, height: size }}
    >
      {/* Circular frame background */}
      <div className="absolute inset-0 rounded-full bg-[#F5E6D3] border-[3px] border-[#8B6F5E]" />
      
      {/* Inner content container */}
      <div className="relative flex flex-col items-center justify-center" style={{ width: size * 0.6, height: size * 0.8 }}>
        
        {/* Wizard Hat */}
        <div 
          className="
            vite-logo-avatar__wizard-hat 
            absolute
          " 
          style={{ top: 0, zIndex: 3, width: size * 0.45, height: size * 0.45 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Hat cone */}
            <path
              d="M 100 30 L 140 100 Q 140 105 135 105 L 65 105 Q 60 105 60 100 Z"
              fill="#3E5373"
              stroke="#2A3B52"
              strokeWidth="2"
            />
            {/* Hat brim */}
            <ellipse
              cx="100"
              cy="105"
              rx="75"
              ry="15"
              fill="#3E5373"
              stroke="#2A3B52"
              strokeWidth="2"
            />
            {/* Stars and moons decorations */}
            <circle cx="85" cy="65" r="6" fill="#F9D84A" />
            <path d="M 115 50 L 118 57 L 126 58 L 120 63 L 122 71 L 115 67 L 108 71 L 110 63 L 104 58 L 112 57 Z" fill="#F9D84A" />
            <path d="M 100 85 Q 95 85 95 90 Q 95 95 100 95 Q 100 85 100 85 Z" fill="#F9D84A" />
            <path d="M 125 75 L 128 82 L 136 83 L 130 88 L 132 96 L 125 92 L 118 96 L 120 88 L 114 83 L 122 82 Z" fill="#F9D84A" />
            <path d="M 70 85 Q 65 85 65 90 Q 65 95 70 95 Q 70 85 70 85 Z" fill="#F9D84A" />
          </svg>
        </div>

        {/* Robot/TV Character Body */}
        <div 
          className="
            vite-logo-avatar__character-body 
            relative
          " 
          style={{ top: size * 0.15, zIndex: 2, width: size * 0.5, height: size * 0.5 }}
        >
          <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Main body - TV frame */}
            <rect
              x="40"
              y="60"
              width="120"
              height="90"
              rx="8"
              fill="#8B6F5E"
              stroke="#5D4A3E"
              strokeWidth="3"
            />
            
            {/* Screen */}
            <defs>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#B8E986', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#7CB342', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#558B2F', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect
              x="50"
              y="70"
              width="100"
              height="60"
              rx="4"
              fill="url(#screenGradient)"
            />
            
            {/* Screen highlights */}
            <ellipse cx="75" cy="90" rx="15" ry="10" fill="rgba(255, 255, 255, 0.4)" />
            <ellipse cx="120" cy="105" rx="20" ry="12" fill="rgba(255, 255, 255, 0.2)" />
            
            {/* Control button */}
            <circle cx="100" cy="165" r="8" fill="#D4A574" stroke="#5D4A3E" strokeWidth="2" />
            
            {/* Left arm */}
            <g>
              <rect x="10" y="90" width="35" height="12" rx="6" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2" />
              <path d="M 15 96 L 5 88 L 0 92 L 0 102 L 5 106 L 15 98 Z" fill="#FFFFFF" stroke="#2A2A2A" strokeWidth="2" />
            </g>
            
            {/* Right arm */}
            <g>
              <rect x="155" y="90" width="35" height="12" rx="6" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2" />
              <path d="M 185 96 L 195 88 L 200 92 L 200 102 L 195 106 L 185 98 Z" fill="#FFFFFF" stroke="#2A2A2A" strokeWidth="2" />
            </g>
            
            {/* Left leg */}
            <g>
              <rect x="65" y="180" width="15" height="35" rx="3" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2" />
              <rect x="60" y="210" width="25" height="20" rx="5" fill="#5D4A3E" stroke="#3E3228" strokeWidth="2" />
            </g>
            
            {/* Right leg */}
            <g>
              <rect x="120" y="180" width="15" height="35" rx="3" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2" />
              <rect x="115" y="210" width="25" height="20" rx="5" fill="#5D4A3E" stroke="#3E3228" strokeWidth="2" />
            </g>
            
            {/* Additional arm details - fingers */}
            <g>
              <ellipse cx="2" cy="97" rx="3" ry="8" fill="#FFFFFF" stroke="#2A2A2A" strokeWidth="1" />
              <ellipse cx="198" cy="97" rx="3" ry="8" fill="#FFFFFF" stroke="#2A2A2A" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ViteLogoWithAvatar;
