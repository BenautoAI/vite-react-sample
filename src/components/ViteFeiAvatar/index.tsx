interface ViteFeiAvatarProps {
  size?: number,
  className?: string,
}

function ViteFeiAvatar(props: ViteFeiAvatarProps) {
  const size = props.size || 400;
  const className = props.className || '';
  
  return (
    <div 
      className={`vite-fei-avatar__container ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="w-full h-full"
        aria-label="Vite Fei Avatar - Wizard Robot"
      >
        {/* Background */}
        <defs>
          <pattern id="paperTexture" patternUnits="userSpaceOnUse" width="400" height="400">
            <rect width="400" height="400" fill="#E8DCC4" />
          </pattern>
          
          {/* Vite gradients */}
          <linearGradient id="viteGradient1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="viteGradient2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
            <stop offset="0%" stopColor="#FFEA83" />
            <stop offset="8.333%" stopColor="#FFDD35" />
            <stop offset="100%" stopColor="#FFA800" />
          </linearGradient>
        </defs>

        {/* Textured Background */}
        <rect width="400" height="400" fill="url(#paperTexture)" />
        
        {/* Geometric frame (Vitruvian Man style) */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#6B4A3A" strokeWidth="2" />
        <rect x="50" y="50" width="300" height="300" fill="none" stroke="#6B4A3A" strokeWidth="2" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#6B4A3A" strokeWidth="1" />

        {/* Robot Body */}
        <g id="robot">
          {/* Feet */}
          <rect x="160" y="300" width="25" height="20" rx="3" fill="#6B4A3A" />
          <rect x="215" y="300" width="25" height="20" rx="3" fill="#6B4A3A" />
          
          {/* Legs */}
          <rect x="165" y="280" width="15" height="25" rx="2" fill="#5A3A2A" />
          <rect x="220" y="280" width="15" height="25" rx="2" fill="#5A3A2A" />
          
          {/* Body */}
          <rect x="145" y="210" width="110" height="75" rx="8" fill="#8B6F47" />
          <circle cx="200" cy="250" r="12" fill="#D4A574" />
          
          {/* Arms (lower) */}
          <line x1="145" y1="230" x2="100" y2="260" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          <line x1="255" y1="230" x2="300" y2="260" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          
          {/* Arms (upper) */}
          <line x1="145" y1="240" x2="85" y2="250" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          <line x1="255" y1="240" x2="315" y2="250" stroke="#3A3A3A" strokeWidth="8" strokeLinecap="round" />
          
          {/* Hands */}
          <g id="hand1" transform="translate(100, 260)">
            <ellipse cx="0" cy="0" rx="12" ry="10" fill="#F5F5F5" />
            <line x1="-6" y1="-8" x2="-6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="-2" y1="-10" x2="-2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="2" y1="-10" x2="2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="6" y1="-8" x2="6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
          </g>
          
          <g id="hand2" transform="translate(300, 260)">
            <ellipse cx="0" cy="0" rx="12" ry="10" fill="#F5F5F5" />
            <line x1="-6" y1="-8" x2="-6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="-2" y1="-10" x2="-2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="2" y1="-10" x2="2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="6" y1="-8" x2="6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
          </g>
          
          <g id="hand3" transform="translate(85, 250)">
            <ellipse cx="0" cy="0" rx="12" ry="10" fill="#F5F5F5" />
            <line x1="-6" y1="-8" x2="-6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="-2" y1="-10" x2="-2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="2" y1="-10" x2="2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="6" y1="-8" x2="6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
          </g>
          
          <g id="hand4" transform="translate(315, 250)">
            <ellipse cx="0" cy="0" rx="12" ry="10" fill="#F5F5F5" />
            <line x1="-6" y1="-8" x2="-6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="-2" y1="-10" x2="-2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="2" y1="-10" x2="2" y2="10" stroke="#E0E0E0" strokeWidth="1" />
            <line x1="6" y1="-8" x2="6" y2="8" stroke="#E0E0E0" strokeWidth="1" />
          </g>
          
          {/* Monitor Head with Vite Logo */}
          <g id="monitor-head">
            {/* Monitor frame */}
            <rect x="150" y="140" width="100" height="75" rx="5" fill="#8B6F47" />
            <rect x="158" y="148" width="84" height="59" rx="3" fill="#7FB069" />
            
            {/* Vite Logo inside monitor */}
            <g transform="translate(175, 160) scale(0.15)">
              <path 
                fill="url(#viteGradient1)" 
                d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
              />
              <path 
                fill="url(#viteGradient2)" 
                d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
              />
            </g>
            
            {/* Monitor shine/reflection */}
            <ellipse cx="190" cy="165" rx="15" ry="10" fill="#FFFFFF" opacity="0.3" />
            <ellipse cx="210" cy="195" rx="20" ry="15" fill="#FFFFFF" opacity="0.2" />
          </g>
          
          {/* Wizard Hat */}
          <g id="wizard-hat">
            {/* Hat brim */}
            <ellipse cx="200" cy="145" rx="75" ry="12" fill="#3A5A7F" />
            <ellipse cx="200" cy="143" rx="75" ry="10" fill="#4A6A8F" />
            
            {/* Hat cone */}
            <path 
              d="M 200 35 Q 180 60 165 100 Q 160 120 170 140 L 230 140 Q 240 120 235 100 Q 220 60 200 35 Z" 
              fill="#4A6A8F"
            />
            
            {/* Hat decorations - stars and moons */}
            {/* Moon 1 */}
            <path d="M 185 110 Q 180 110 180 105 Q 180 100 185 100 Q 182 100 180 98 Q 180 95 183 95 Q 186 95 188 98 Q 188 103 185 110 Z" fill="#FDB927" />
            
            {/* Star 1 */}
            <path d="M 210 70 L 212 75 L 217 75 L 213 78 L 215 83 L 210 80 L 205 83 L 207 78 L 203 75 L 208 75 Z" fill="#FDB927" />
            
            {/* Moon 2 */}
            <path d="M 230 120 Q 225 120 225 115 Q 225 110 230 110 Q 227 110 225 108 Q 225 105 228 105 Q 231 105 233 108 Q 233 113 230 120 Z" fill="#FDB927" />
            
            {/* Star 2 */}
            <path d="M 175 130 L 177 135 L 182 135 L 178 138 L 180 143 L 175 140 L 170 143 L 172 138 L 168 135 L 173 135 Z" fill="#FDB927" />
            
            {/* Moon 3 */}
            <path d="M 190 85 Q 185 85 185 80 Q 185 75 190 75 Q 187 75 185 73 Q 185 70 188 70 Q 191 70 193 73 Q 193 78 190 85 Z" fill="#FDB927" />
            
            {/* Star 3 (on brim) */}
            <path d="M 240 140 L 242 145 L 247 145 L 243 148 L 245 153 L 240 150 L 235 153 L 237 148 L 233 145 L 238 145 Z" fill="#FDB927" />
            
            {/* Hat tip curve */}
            <path 
              d="M 200 35 Q 210 25 220 30 Q 225 35 222 42 Q 218 50 210 55" 
              fill="none" 
              stroke="#3A5A7F" 
              strokeWidth="2"
            />
            <ellipse cx="221" cy="32" rx="6" ry="8" fill="#4A6A8F" />
            <path d="M 225 30 L 227 35 L 232 35 L 228 38 L 230 43 L 225 40 L 220 43 L 222 38 L 218 35 L 223 35 Z" fill="#FDB927" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ViteFeiAvatar;
