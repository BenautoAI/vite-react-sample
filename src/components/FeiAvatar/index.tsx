interface FeiAvatarProps {
  size?: number;
  className?: string;
}

function FeiAvatar(props: FeiAvatarProps) {
  const size = props.size ?? 100;
  const className = props.className ?? '';
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 400" 
      width={size} 
      height={size}
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="195" fill="none" stroke="#6B4F4F" strokeWidth="3"/>
      
      {/* Horizontal line through middle */}
      <line x1="5" y1="200" x2="200" y2="200" stroke="#6B4F4F" strokeWidth="2"/>
      <line x1="200" y1="200" x2="395" y2="200" stroke="#6B4F4F" strokeWidth="2"/>
      
      {/* Wizard hat */}
      <g id="wizard-hat">
        {/* Hat base (brim) */}
        <ellipse cx="200" cy="170" rx="110" ry="25" fill="#415A77"/>
        <ellipse cx="200" cy="170" rx="110" ry="25" fill="#3A5066" opacity="0.5"/>
        
        {/* Hat cone */}
        <path d="M 140 170 Q 180 60 200 40 Q 220 60 260 170 Z" fill="#415A77" stroke="#2C3E50" strokeWidth="2"/>
        
        {/* Moon decorations on hat */}
        <path d="M 170 120 Q 175 115 180 120 Q 175 118 170 120 Z" fill="#F4A700"/>
        <path d="M 215 85 Q 220 80 225 85 Q 220 83 215 85 Z" fill="#F4A700"/>
        <path d="M 195 155 Q 200 150 205 155 Q 200 153 195 155 Z" fill="#F4A700"/>
        
        {/* Star decorations on hat */}
        <polygon points="235,110 237,116 243,116 238,120 240,126 235,122 230,126 232,120 227,116 233,116" fill="#F4A700"/>
        <polygon points="248,135 250,141 256,141 251,145 253,151 248,147 243,151 245,145 240,141 246,141" fill="#F4A700"/>
        <polygon points="152,145 154,151 160,151 155,155 157,161 152,157 147,161 149,155 144,151 150,151" fill="#F4A700"/>
        
        {/* Hat cone outline */}
        <path d="M 140 170 Q 180 60 200 40 Q 220 60 260 170" fill="none" stroke="#2C3E50" strokeWidth="2"/>
      </g>
      
      {/* Monitor/Screen Head */}
      <g id="monitor-head">
        {/* Monitor frame */}
        <rect x="135" y="180" width="130" height="100" rx="5" fill="#8B6F47" stroke="#654321" strokeWidth="3"/>
        <rect x="135" y="180" width="130" height="100" rx="5" fill="#9B7F57" opacity="0.3"/>
        
        {/* Screen */}
        <rect x="145" y="190" width="110" height="80" rx="3" fill="#7BA05B"/>
        <rect x="145" y="190" width="110" height="80" rx="3" fill="url(#screenGradient)"/>
        
        {/* Screen gradient definition */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#9BCF85', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6B9B47', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Screen highlights */}
        <ellipse cx="175" cy="210" rx="20" ry="15" fill="#E8F5E9" opacity="0.5"/>
        <path d="M 200 220 Q 220 230 235 250" fill="#C8E6C9" opacity="0.4"/>
        
        {/* Monitor base/body */}
        <rect x="160" y="280" width="80" height="30" rx="5" fill="#8B6F47" stroke="#654321" strokeWidth="2"/>
        
        {/* Button on monitor */}
        <circle cx="200" cy="295" r="6" fill="#D4A574" stroke="#654321" strokeWidth="1"/>
      </g>
      
      {/* Robot arms (4 arms) */}
      <g id="arms">
        {/* Left upper arm */}
        <line x1="135" y1="220" x2="90" y2="200" stroke="#4A4A4A" strokeWidth="8" strokeLinecap="round"/>
        {/* Left lower arm */}
        <line x1="135" y1="250" x2="85" y2="270" stroke="#4A4A4A" strokeWidth="8" strokeLinecap="round"/>
        
        {/* Right upper arm */}
        <line x1="265" y1="220" x2="310" y2="200" stroke="#4A4A4A" strokeWidth="8" strokeLinecap="round"/>
        {/* Right lower arm */}
        <line x1="265" y1="250" x2="315" y2="270" stroke="#4A4A4A" strokeWidth="8" strokeLinecap="round"/>
        
        {/* Left upper hand */}
        <g transform="translate(75, 190)">
          <ellipse cx="0" cy="0" rx="15" ry="18" fill="#E8E8E8" stroke="#333" strokeWidth="2"/>
          <path d="M -5 -10 L -5 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 0 -10 L 0 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 5 -10 L 5 10" stroke="#333" strokeWidth="1.5"/>
        </g>
        
        {/* Left lower hand */}
        <g transform="translate(70, 280)">
          <ellipse cx="0" cy="0" rx="15" ry="18" fill="#E8E8E8" stroke="#333" strokeWidth="2"/>
          <path d="M -5 -10 L -5 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 0 -10 L 0 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 5 -10 L 5 10" stroke="#333" strokeWidth="1.5"/>
        </g>
        
        {/* Right upper hand */}
        <g transform="translate(325, 190)">
          <ellipse cx="0" cy="0" rx="15" ry="18" fill="#E8E8E8" stroke="#333" strokeWidth="2"/>
          <path d="M -5 -10 L -5 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 0 -10 L 0 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 5 -10 L 5 10" stroke="#333" strokeWidth="1.5"/>
        </g>
        
        {/* Right lower hand */}
        <g transform="translate(330, 280)">
          <ellipse cx="0" cy="0" rx="15" ry="18" fill="#E8E8E8" stroke="#333" strokeWidth="2"/>
          <path d="M -5 -10 L -5 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 0 -10 L 0 10" stroke="#333" strokeWidth="1.5"/>
          <path d="M 5 -10 L 5 10" stroke="#333" strokeWidth="1.5"/>
        </g>
      </g>
      
      {/* Robot legs and feet */}
      <g id="legs">
        {/* Left leg */}
        <rect x="170" y="310" width="15" height="35" rx="3" fill="#654321" stroke="#4A3319" strokeWidth="2"/>
        {/* Right leg */}
        <rect x="215" y="310" width="15" height="35" rx="3" fill="#654321" stroke="#4A3319" strokeWidth="2"/>
        
        {/* Left foot */}
        <ellipse cx="177" cy="350" rx="18" ry="12" fill="#8B6F47" stroke="#654321" strokeWidth="2"/>
        {/* Right foot */}
        <ellipse cx="222" cy="350" rx="18" ry="12" fill="#8B6F47" stroke="#654321" strokeWidth="2"/>
      </g>
    </svg>
  );
}

export default FeiAvatar;
