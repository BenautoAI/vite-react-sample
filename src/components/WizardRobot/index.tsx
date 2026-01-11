interface WizardRobotProps {
  className?: string
  size?: number
}

function WizardRobot(props: WizardRobotProps) {
  const className = props.className || ''
  const size = props.size || 400
  
  return (
    <div className={`wizardrobot__container ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background texture */}
        <defs>
          <pattern id="texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#D4A574" opacity="0.3" />
            <circle cx="60" cy="40" r="1" fill="#D4A574" opacity="0.3" />
            <circle cx="80" cy="70" r="1" fill="#D4A574" opacity="0.3" />
            <circle cx="30" cy="80" r="1" fill="#D4A574" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="400" height="400" fill="#E8DCC4" />
        <rect width="400" height="400" fill="url(#texture)" />

        {/* Circular frame */}
        <circle cx="200" cy="200" r="140" fill="none" stroke="#6B4E3D" strokeWidth="2" />

        {/* Rectangular frame */}
        <rect x="60" y="140" width="280" height="220" fill="none" stroke="#6B4E3D" strokeWidth="2" />

        {/* Robot legs */}
        <rect x="160" y="310" width="18" height="25" rx="3" fill="#5D4A3A" />
        <rect x="222" y="310" width="18" height="25" rx="3" fill="#5D4A3A" />
        
        {/* Robot feet */}
        <ellipse cx="169" cy="335" rx="12" ry="8" fill="#4A3A2E" />
        <ellipse cx="231" cy="335" rx="12" ry="8" fill="#4A3A2E" />

        {/* Robot body */}
        <rect x="140" y="180" width="120" height="135" rx="10" fill="#8B6F47" />
        <rect x="145" y="185" width="110" height="125" rx="8" fill="#A0826B" />

        {/* Body button */}
        <circle cx="200" cy="290" r="10" fill="#D4A574" />
        <circle cx="200" cy="290" r="7" fill="#B89968" />

        {/* Screen frame */}
        <rect x="160" y="195" width="80" height="60" rx="5" fill="#8B6F47" />
        <rect x="165" y="200" width="70" height="50" rx="3" fill="#2C3E50" />

        {/* Screen content - green gradient */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A4D65E" />
            <stop offset="50%" stopColor="#7EC850" />
            <stop offset="100%" stopColor="#5A9A3B" />
          </linearGradient>
        </defs>
        <rect x="168" y="203" width="64" height="44" rx="2" fill="url(#screenGradient)" />

        {/* Screen highlights */}
        <ellipse cx="190" cy="215" rx="15" ry="8" fill="#E8F5D0" opacity="0.6" />
        <path d="M 205 220 Q 215 225 220 235" stroke="#E8F5D0" strokeWidth="3" fill="none" opacity="0.5" />

        {/* Screen reflection */}
        <rect x="170" y="205" width="20" height="15" rx="2" fill="white" opacity="0.3" />

        {/* Left upper arm */}
        <rect x="110" y="210" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Left lower arm */}
        <rect x="95" y="222" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Left hand */}
        <ellipse cx="95" cy="228" rx="12" ry="15" fill="#F5F5F5" />
        {/* Left fingers */}
        <path d="M 85 220 L 80 215 M 88 217 L 84 211 M 90 215 L 88 208" 
              stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Right upper arm */}
        <rect x="260" y="210" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Right lower arm */}
        <rect x="275" y="222" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Right hand */}
        <ellipse cx="305" cy="228" rx="12" ry="15" fill="#F5F5F5" />
        {/* Right fingers */}
        <path d="M 315 220 L 320 215 M 312 217 L 316 211 M 310 215 L 312 208" 
              stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Left lower upper arm */}
        <rect x="120" y="240" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Left lower lower arm */}
        <rect x="105" y="252" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Left lower hand */}
        <ellipse cx="105" cy="258" rx="12" ry="15" fill="#F5F5F5" />
        {/* Left lower fingers */}
        <path d="M 95 250 L 90 245 M 98 247 L 94 241 M 100 245 L 98 238" 
              stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Right lower upper arm */}
        <rect x="250" y="240" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Right lower lower arm */}
        <rect x="265" y="252" width="30" height="12" rx="6" fill="#2C3E50" />
        {/* Right lower hand */}
        <ellipse cx="295" cy="258" rx="12" ry="15" fill="#F5F5F5" />
        {/* Right lower fingers */}
        <path d="M 305 250 L 310 245 M 302 247 L 306 241 M 300 245 L 302 238" 
              stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Arm joints */}
        <circle cx="140" cy="216" r="4" fill="#1A252F" />
        <circle cx="110" cy="228" r="4" fill="#1A252F" />
        <circle cx="260" cy="216" r="4" fill="#1A252F" />
        <circle cx="290" cy="228" r="4" fill="#1A252F" />
        <circle cx="150" cy="246" r="4" fill="#1A252F" />
        <circle cx="120" cy="258" r="4" fill="#1A252F" />
        <circle cx="250" cy="246" r="4" fill="#1A252F" />
        <circle cx="280" cy="258" r="4" fill="#1A252F" />

        {/* Wizard hat brim */}
        <ellipse cx="200" cy="180" rx="80" ry="15" fill="#4A5F7F" />
        <ellipse cx="200" cy="180" rx="80" ry="15" fill="#3A4F6F" />
        <ellipse cx="200" cy="178" rx="75" ry="12" fill="#4A5F7F" />

        {/* Hat main body */}
        <path d="M 130 180 Q 130 90 200 65 Q 270 90 270 180 Z" fill="#4A5F7F" />
        <path d="M 135 180 Q 135 95 200 70 Q 265 95 265 180 Z" fill="#5A6F8F" />

        {/* Hat tip curve */}
        <path d="M 200 65 Q 220 55 240 70 Q 250 80 245 95" fill="#3A4F6F" />

        {/* Moon on hat - left side */}
        <path d="M 165 140 Q 160 140 160 145 Q 160 150 165 150 Q 162 150 160 147.5 Q 160 145 162 142.5 Q 164 140 165 140 Z" 
              fill="#F4C430" />

        {/* Stars on hat */}
        <path d="M 210 110 L 212 115 L 217 115 L 213 118 L 215 123 L 210 120 L 205 123 L 207 118 L 203 115 L 208 115 Z" 
              fill="#F4C430" />
        <path d="M 185 160 L 186.5 164 L 190.5 164 L 187.5 166.5 L 189 170.5 L 185 168 L 181 170.5 L 182.5 166.5 L 179.5 164 L 183.5 164 Z" 
              fill="#F4C430" />
        <path d="M 235 145 L 236 148 L 239 148 L 236.5 150 L 237.5 153 L 235 151 L 232.5 153 L 233.5 150 L 231 148 L 234 148 Z" 
              fill="#F4C430" />

        {/* Moon on hat - right side (on the tip) */}
        <path d="M 240 85 Q 235 85 235 90 Q 235 95 240 95 Q 237 95 235 92.5 Q 235 90 237 87.5 Q 239 85 240 85 Z" 
              fill="#F4C430" />

        {/* Star on hat tip */}
        <path d="M 225 75 L 226 78 L 229 78 L 226.5 80 L 227.5 83 L 225 81 L 222.5 83 L 223.5 80 L 221 78 L 224 78 Z" 
              fill="#F4C430" />

        {/* Hat contour lines for depth */}
        <path d="M 145 165 Q 170 130 195 100" stroke="#3A4F6F" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    </div>
  )
}

export default WizardRobot
