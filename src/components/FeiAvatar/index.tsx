interface FeiAvatarProps {
  size?: number;
  className?: string;
}

function FeiAvatar(props: FeiAvatarProps) {
  const size = props.size || 200;
  const className = props.className || '';
  
  return (
    <div className={`fei-avatar__container inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect width="400" height="400" fill="#E8DCC8" />
        
        {/* Texture/Noise Effect */}
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" />
        </filter>
        <rect width="400" height="400" fill="#E8DCC8" filter="url(#noise)" opacity="0.3" />
        
        {/* Circular Frame */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#6B4E4E" strokeWidth="3" />
        
        {/* Construction Guidelines */}
        <line x1="50" y1="200" x2="350" y2="200" stroke="#6B4E4E" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="50" x2="200" y2="350" stroke="#6B4E4E" strokeWidth="1" opacity="0.5" />
        
        {/* Feet */}
        <g>
          <rect x="160" y="300" width="25" height="35" rx="3" fill="#6B4E4E" />
          <rect x="215" y="300" width="25" height="35" rx="3" fill="#6B4E4E" />
        </g>
        
        {/* Robot Body */}
        <g>
          <rect x="155" y="210" width="90" height="95" rx="8" fill="#8D6E4F" />
          <circle cx="200" cy="270" r="12" fill="#C4A572" />
        </g>
        
        {/* Lower Arms */}
        <g>
          <rect x="130" y="230" width="20" height="50" rx="3" fill="#3A3A3A" />
          <rect x="250" y="230" width="20" height="50" rx="3" fill="#3A3A3A" />
          <rect x="110" y="230" width="20" height="50" rx="3" fill="#3A3A3A" />
          <rect x="270" y="230" width="20" height="50" rx="3" fill="#3A3A3A" />
        </g>
        
        {/* TV Screen Head */}
        <g>
          <rect x="160" y="140" width="80" height="75" rx="5" fill="#8D6E4F" />
          <rect x="168" y="148" width="64" height="59" rx="3" fill="#88C057" />
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B8E986" />
            <stop offset="100%" stopColor="#6B9E3E" />
          </linearGradient>
          <rect x="168" y="148" width="64" height="59" rx="3" fill="url(#screenGradient)" />
          
          {/* Screen Reflections */}
          <ellipse cx="190" cy="165" rx="15" ry="12" fill="#E8F5D8" opacity="0.6" />
          <ellipse cx="215" cy="185" rx="10" ry="8" fill="#D4EBB8" opacity="0.4" />
        </g>
        
        {/* Wizard Hat */}
        <g>
          {/* Hat Brim */}
          <ellipse cx="200" cy="140" rx="55" ry="15" fill="#3B5278" />
          
          {/* Hat Cone */}
          <path d="M 155 140 Q 185 50, 200 30 Q 215 50, 245 140 Z" fill="#4A6A95" />
          
          {/* Hat Decorations - Stars and Moons */}
          <g fill="#F4D03F">
            {/* Star 1 */}
            <path d="M 175 90 L 177 97 L 184 97 L 179 101 L 181 108 L 175 104 L 169 108 L 171 101 L 166 97 L 173 97 Z" />
            
            {/* Star 2 */}
            <path d="M 225 110 L 227 117 L 234 117 L 229 121 L 231 128 L 225 124 L 219 128 L 221 121 L 216 117 L 223 117 Z" />
            
            {/* Crescent Moon 1 */}
            <path d="M 160 115 Q 155 115, 155 120 Q 155 125, 160 125 Q 158 125, 158 120 Q 158 115, 160 115" />
            
            {/* Crescent Moon 2 */}
            <path d="M 210 70 Q 205 70, 205 75 Q 205 80, 210 80 Q 208 80, 208 75 Q 208 70, 210 70" />
            
            {/* Star on tip */}
            <path d="M 200 35 L 202 42 L 209 42 L 204 46 L 206 53 L 200 49 L 194 53 L 196 46 L 191 42 L 198 42 Z" />
          </g>
          
          {/* Hat Shadow/Depth */}
          <path d="M 155 140 Q 185 50, 200 30 Q 215 50, 245 140 Z" fill="#2C3E50" opacity="0.2" />
        </g>
        
        {/* Hands */}
        <g fill="#EFEFEF">
          {/* Right Upper Hand */}
          <ellipse cx="275" cy="220" rx="12" ry="15" />
          <rect x="276" y="208" width="6" height="18" fill="#EFEFEF" />
          <rect x="283" y="208" width="6" height="22" fill="#EFEFEF" />
          <rect x="290" y="208" width="6" height="18" fill="#EFEFEF" />
          
          {/* Right Lower Hand */}
          <ellipse cx="135" cy="275" rx="12" ry="15" />
          <rect x="136" y="263" width="6" height="18" fill="#EFEFEF" />
          <rect x="143" y="263" width="6" height="22" fill="#EFEFEF" />
          <rect x="150" y="263" width="6" height="18" fill="#EFEFEF" />
          
          {/* Left Upper Hand */}
          <ellipse cx="125" cy="220" rx="12" ry="15" />
          <rect x="104" y="208" width="6" height="18" fill="#EFEFEF" />
          <rect x="111" y="208" width="6" height="22" fill="#EFEFEF" />
          <rect x="118" y="208" width="6" height="18" fill="#EFEFEF" />
          
          {/* Left Lower Hand */}
          <ellipse cx="265" cy="275" rx="12" ry="15" />
          <rect x="244" y="263" width="6" height="18" fill="#EFEFEF" />
          <rect x="251" y="263" width="6" height="22" fill="#EFEFEF" />
          <rect x="258" y="263" width="6" height="18" fill="#EFEFEF" />
        </g>
      </svg>
    </div>
  );
}

export default FeiAvatar;
