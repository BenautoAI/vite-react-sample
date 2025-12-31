interface CatAvatarProps {
  size?: number;
}

function CatAvatar({ size = 200 }: CatAvatarProps) {
  return (
    <div 
      className="cat-avatar-container flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle cx="200" cy="200" r="180" fill="#E8DCC8" stroke="#6B4E3D" strokeWidth="3" />
        
        {/* Wizard Hat */}
        <g id="wizard-hat">
          {/* Hat Brim */}
          <ellipse cx="200" cy="170" rx="120" ry="30" fill="#3B5A7C" stroke="#2A3F5F" strokeWidth="2" />
          
          {/* Hat Cone */}
          <path
            d="M 140 170 Q 180 50 200 40 Q 220 50 260 170 Z"
            fill="#4A6B8C"
            stroke="#2A3F5F"
            strokeWidth="2"
          />
          
          {/* Moon on Hat */}
          <path
            d="M 185 90 Q 175 100 185 110 Q 195 105 185 90 Z"
            fill="#F4C430"
          />
          
          {/* Stars on Hat */}
          <polygon points="220,70 222,76 228,76 223,80 225,86 220,82 215,86 217,80 212,76 218,76" fill="#F4C430" />
          <polygon points="240,100 242,106 248,106 243,110 245,116 240,112 235,116 237,110 232,106 238,106" fill="#F4C430" />
          
          {/* Stars on Brim */}
          <polygon points="160,165 162,171 168,171 163,175 165,181 160,177 155,181 157,175 152,171 158,171" fill="#F4C430" />
          <polygon points="240,165 242,171 248,171 243,175 245,181 240,177 235,181 237,175 232,171 238,171" fill="#F4C430" />
          
          {/* Moon on Brim */}
          <path
            d="M 130 160 Q 125 165 130 170 Q 135 168 130 160 Z"
            fill="#F4C430"
          />
          <path
            d="M 270 160 Q 265 165 270 170 Q 275 168 270 160 Z"
            fill="#F4C430"
          />
        </g>
        
        {/* TV Screen Head */}
        <g id="tv-head">
          {/* TV Body */}
          <rect x="130" y="180" width="140" height="110" rx="15" fill="#8B6347" stroke="#5C4033" strokeWidth="3" />
          
          {/* TV Screen */}
          <rect x="145" y="195" width="110" height="80" rx="8" fill="#A8D5A8" stroke="#7FB87F" strokeWidth="2" />
          
          {/* Screen Reflection */}
          <ellipse cx="170" cy="210" rx="20" ry="15" fill="#D4F1D4" opacity="0.6" />
          <path d="M 220 220 Q 240 230 235 245" stroke="#D4F1D4" strokeWidth="8" fill="none" opacity="0.4" />
          
          {/* Screen Content (abstract green) */}
          <path d="M 160 230 Q 180 240 200 235 Q 220 245 235 240" fill="#90C890" opacity="0.7" />
          
          {/* Control Button */}
          <circle cx="200" cy="270" r="8" fill="#D4A574" stroke="#8B6347" strokeWidth="2" />
        </g>
        
        {/* Robot Arms */}
        <g id="arms">
          {/* Left Arm */}
          <line x1="130" y1="240" x2="90" y2="250" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" />
          {/* Left Hand */}
          <g id="left-hand" transform="translate(60, 240)">
            <ellipse cx="0" cy="0" rx="25" ry="20" fill="#E8E8E8" stroke="#5C4033" strokeWidth="2" />
            <line x1="-5" y1="-10" x2="-5" y2="10" stroke="#5C4033" strokeWidth="2" />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#5C4033" strokeWidth="2" />
            <line x1="5" y1="-10" x2="5" y2="10" stroke="#5C4033" strokeWidth="2" />
          </g>
          
          {/* Right Arm */}
          <line x1="270" y1="240" x2="310" y2="250" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" />
          {/* Right Hand */}
          <g id="right-hand" transform="translate(340, 240)">
            <ellipse cx="0" cy="0" rx="25" ry="20" fill="#E8E8E8" stroke="#5C4033" strokeWidth="2" />
            <line x1="-5" y1="-10" x2="-5" y2="10" stroke="#5C4033" strokeWidth="2" />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#5C4033" strokeWidth="2" />
            <line x1="5" y1="-10" x2="5" y2="10" stroke="#5C4033" strokeWidth="2" />
          </g>
        </g>
        
        {/* Robot Legs */}
        <g id="legs">
          {/* Left Leg */}
          <line x1="170" y1="290" x2="170" y2="320" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" />
          {/* Left Foot */}
          <rect x="155" y="320" width="30" height="20" rx="5" fill="#8B6347" stroke="#5C4033" strokeWidth="2" />
          
          {/* Right Leg */}
          <line x1="230" y1="290" x2="230" y2="320" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" />
          {/* Right Foot */}
          <rect x="215" y="320" width="30" height="20" rx="5" fill="#8B6347" stroke="#5C4033" strokeWidth="2" />
        </g>
        
        {/* Decorative Circle Border */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="#8B6347" strokeWidth="2" opacity="0.5" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="#8B6347" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
}

export default CatAvatar;
