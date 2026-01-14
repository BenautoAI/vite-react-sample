interface ViteWithFeiProps {
  size?: number;
  className?: string;
}

function ViteWithFei(props: ViteWithFeiProps) {
  const size = props.size || 256;
  const className = props.className || '';
  
  return (
    <div className={`vite-fei__container inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 257"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
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
        </defs>
        
        {/* Vite Logo Background */}
        <path 
          fill="url(#viteGradient1)" 
          d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
        />
        <path 
          fill="url(#viteGradient2)" 
          d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
        />
        
        {/* Fei Avatar Integrated in Center */}
        <g transform="translate(78, 85) scale(0.35)">
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
        </g>
      </svg>
    </div>
  );
}

export default ViteWithFei;
