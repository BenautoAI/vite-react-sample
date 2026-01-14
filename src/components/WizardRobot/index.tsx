interface WizardRobotProps {
  size?: number;
}

function WizardRobot(props: WizardRobotProps) {
  const size = props.size || 400;
  
  return (
    <div className='
      wizard-robot__container
      flex
      items-center
      justify-center
      p-8
    '>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='wizard-robot__svg'
      >
        {/* Vintage textured background */}
        <defs>
          {/* Texture pattern */}
          <pattern id="vintage-texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#EAE4D4" />
            <circle cx="15" cy="20" r="1" fill="#C4B5A0" opacity="0.4" />
            <circle cx="85" cy="15" r="1.5" fill="#C4B5A0" opacity="0.3" />
            <circle cx="45" cy="60" r="1" fill="#C4B5A0" opacity="0.5" />
            <circle cx="70" cy="85" r="1.2" fill="#C4B5A0" opacity="0.4" />
            <circle cx="25" cy="75" r="0.8" fill="#C4B5A0" opacity="0.3" />
            <circle cx="90" cy="50" r="1" fill="#C4B5A0" opacity="0.5" />
            <circle cx="55" cy="30" r="1.3" fill="#B89968" opacity="0.2" />
            <circle cx="10" cy="90" r="1" fill="#B89968" opacity="0.3" />
          </pattern>
          
          {/* Screen gradient */}
          <linearGradient id="screen-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="50%" stopColor="#9CCC65" />
            <stop offset="100%" stopColor="#CDDC39" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="url(#vintage-texture)" />

        {/* Geometric frame - outer circle */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#7D5A50" strokeWidth="2" />
        
        {/* Geometric frame - horizontal line */}
        <line x1="50" y1="200" x2="350" y2="200" stroke="#7D5A50" strokeWidth="2" />
        
        {/* Geometric frame - vertical rectangle */}
        <rect x="120" y="200" width="160" height="150" fill="none" stroke="#7D5A50" strokeWidth="2" />

        {/* Robot legs */}
        <g id="legs">
          {/* Left leg */}
          <rect x="165" y="310" width="15" height="25" fill="#6B4E3D" rx="2" />
          <rect x="163" y="335" width="19" height="12" fill="#5D3F2E" rx="3" />
          
          {/* Right leg */}
          <rect x="220" y="310" width="15" height="25" fill="#6B4E3D" rx="2" />
          <rect x="218" y="335" width="19" height="12" fill="#5D3F2E" rx="3" />
        </g>

        {/* Robot body */}
        <g id="body">
          {/* Main body frame */}
          <rect x="155" y="230" width="90" height="80" fill="#9B7E6B" rx="5" stroke="#6B4E3D" strokeWidth="2" />
          
          {/* Central button */}
          <circle cx="200" cy="280" r="8" fill="#D4A574" stroke="#6B4E3D" strokeWidth="1.5" />
          <circle cx="200" cy="280" r="5" fill="#B8935F" />
          
          {/* Body details - wood grain */}
          <line x1="160" y1="245" x2="240" y2="245" stroke="#6B4E3D" strokeWidth="0.5" opacity="0.3" />
          <line x1="160" y1="255" x2="240" y2="255" stroke="#6B4E3D" strokeWidth="0.5" opacity="0.3" />
          <line x1="160" y1="295" x2="240" y2="295" stroke="#6B4E3D" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* TV screen (face) */}
        <g id="screen">
          {/* Screen frame */}
          <rect x="165" y="145" width="70" height="55" fill="#8B6F47" rx="4" stroke="#5D3F2E" strokeWidth="2.5" />
          
          {/* Inner frame */}
          <rect x="170" y="150" width="60" height="45" fill="#A0826D" rx="3" stroke="#6B4E3D" strokeWidth="1.5" />
          
          {/* Screen display */}
          <rect x="175" y="155" width="50" height="35" fill="url(#screen-gradient)" rx="2" />
          
          {/* Screen reflections */}
          <path d="M 180 160 Q 190 165, 200 160" fill="white" opacity="0.4" />
          <ellipse cx="185" cy="165" rx="8" ry="6" fill="white" opacity="0.5" />
          <path d="M 200 175 Q 210 180, 215 175" fill="#CDDC39" opacity="0.6" />
        </g>

        {/* Arms */}
        <g id="arms">
          {/* Left arm (back) */}
          <g id="left-arm">
            <rect x="120" y="250" width="12" height="35" fill="#4A4A4A" rx="2" />
            <ellipse cx="126" cy="248" rx="7" ry="5" fill="#5A5A5A" />
            <ellipse cx="126" cy="287" rx="7" ry="5" fill="#5A5A5A" />
            
            {/* Hand */}
            <g transform="translate(108, 285)">
              {/* Palm */}
              <ellipse cx="18" cy="5" rx="12" ry="8" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              {/* Fingers */}
              <ellipse cx="12" cy="3" rx="4" ry="6" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              <ellipse cx="18" cy="2" rx="4" ry="7" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              <ellipse cx="24" cy="3" rx="4" ry="6" fill="white" stroke="#4A4A4A" strokeWidth="1" />
            </g>
          </g>

          {/* Right arm (back) */}
          <g id="right-arm">
            <rect x="268" y="250" width="12" height="35" fill="#4A4A4A" rx="2" />
            <ellipse cx="274" cy="248" rx="7" ry="5" fill="#5A5A5A" />
            <ellipse cx="274" cy="287" rx="7" ry="5" fill="#5A5A5A" />
            
            {/* Hand */}
            <g transform="translate(262, 285)">
              {/* Palm */}
              <ellipse cx="12" cy="5" rx="12" ry="8" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              {/* Fingers */}
              <ellipse cx="6" cy="3" rx="4" ry="6" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              <ellipse cx="12" cy="2" rx="4" ry="7" fill="white" stroke="#4A4A4A" strokeWidth="1" />
              <ellipse cx="18" cy="3" rx="4" ry="6" fill="white" stroke="#4A4A4A" strokeWidth="1" />
            </g>
          </g>

          {/* Front left arm */}
          <g id="front-left-arm">
            <rect x="140" y="240" width="12" height="40" fill="#3A3A3A" rx="2" />
            <ellipse cx="146" cy="238" rx="7" ry="5" fill="#4A4A4A" />
            <ellipse cx="146" cy="282" rx="7" ry="5" fill="#4A4A4A" />
            
            {/* Hand */}
            <g transform="translate(128, 278)">
              {/* Palm */}
              <ellipse cx="18" cy="7" rx="12" ry="8" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              {/* Fingers */}
              <ellipse cx="12" cy="5" rx="4" ry="6" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              <ellipse cx="18" cy="4" rx="4" ry="7" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              <ellipse cx="24" cy="5" rx="4" ry="6" fill="white" stroke="#3A3A3A" strokeWidth="1" />
            </g>
          </g>

          {/* Front right arm */}
          <g id="front-right-arm">
            <rect x="248" y="240" width="12" height="40" fill="#3A3A3A" rx="2" />
            <ellipse cx="254" cy="238" rx="7" ry="5" fill="#4A4A4A" />
            <ellipse cx="254" cy="282" rx="7" ry="5" fill="#4A4A4A" />
            
            {/* Hand */}
            <g transform="translate(242, 278)">
              {/* Palm */}
              <ellipse cx="12" cy="7" rx="12" ry="8" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              {/* Fingers */}
              <ellipse cx="6" cy="5" rx="4" ry="6" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              <ellipse cx="12" cy="4" rx="4" ry="7" fill="white" stroke="#3A3A3A" strokeWidth="1" />
              <ellipse cx="18" cy="5" rx="4" ry="6" fill="white" stroke="#3A3A3A" strokeWidth="1" />
            </g>
          </g>
        </g>

        {/* Wizard hat */}
        <g id="wizard-hat">
          {/* Hat brim */}
          <ellipse cx="200" cy="145" rx="70" ry="18" fill="#3A5F7D" stroke="#2A3E4C" strokeWidth="2" />
          
          {/* Stars and moons on brim */}
          <g id="brim-decorations">
            {/* Moon */}
            <path d="M 160 142 Q 155 145, 160 148 Q 158 145, 160 142" fill="#F4C430" />
            {/* Star */}
            <path d="M 180 145 L 181 147 L 183 147 L 181.5 148.5 L 182 150.5 L 180 149 L 178 150.5 L 178.5 148.5 L 177 147 L 179 147 Z" fill="#F4C430" />
            {/* Moon */}
            <path d="M 220 142 Q 215 145, 220 148 Q 218 145, 220 142" fill="#F4C430" />
            {/* Star */}
            <path d="M 240 145 L 241 147 L 243 147 L 241.5 148.5 L 242 150.5 L 240 149 L 238 150.5 L 238.5 148.5 L 237 147 L 239 147 Z" fill="#F4C430" />
          </g>
          
          {/* Hat cone */}
          <path d="M 140 145 Q 165 40, 200 30 Q 235 40, 260 145 Z" fill="#4A7BA7" stroke="#2A3E4C" strokeWidth="2" />
          
          {/* Hat cone shadow */}
          <path d="M 200 30 Q 235 40, 260 145 L 240 145 Q 220 50, 200 35 Z" fill="#2D4F6B" opacity="0.4" />
          
          {/* Stars and moons on hat */}
          <g id="hat-decorations">
            {/* Star at top */}
            <path d="M 200 45 L 202 52 L 209 52 L 203.5 56.5 L 205.5 63.5 L 200 59 L 194.5 63.5 L 196.5 56.5 L 191 52 L 198 52 Z" fill="#F4C430" />
            
            {/* Moon left side */}
            <path d="M 170 85 Q 162 92, 170 100 Q 165 92, 170 85" fill="#F4C430" />
            
            {/* Star right upper */}
            <path d="M 225 60 L 227 65 L 232 65 L 228 68.5 L 229.5 73.5 L 225 70 L 220.5 73.5 L 222 68.5 L 218 65 L 223 65 Z" fill="#F4C430" />
            
            {/* Moon right side */}
            <path d="M 235 100 Q 230 105, 235 110 Q 232 105, 235 100" fill="#F4C430" />
            
            {/* Star left lower */}
            <path d="M 155 120 L 156.5 124 L 160.5 124 L 157.5 126.5 L 158.5 130.5 L 155 128 L 151.5 130.5 L 152.5 126.5 L 149.5 124 L 153.5 124 Z" fill="#F4C430" />
            
            {/* Triangle */}
            <path d="M 210 90 L 215 100 L 205 100 Z" fill="#F4C430" />
          </g>
          
          {/* Hat tip curve */}
          <path d="M 200 30 Q 220 28, 235 35 Q 245 42, 250 55" 
                fill="none" 
                stroke="#2A3E4C" 
                strokeWidth="2" 
                strokeLinecap="round" />
          
          {/* Curved tip end */}
          <ellipse cx="250" cy="55" rx="8" ry="6" fill="#4A7BA7" stroke="#2A3E4C" strokeWidth="2" />
          <path d="M 250 52 Q 255 55, 250 58" fill="#F4C430" />
        </g>
      </svg>
    </div>
  );
}

export default WizardRobot;
