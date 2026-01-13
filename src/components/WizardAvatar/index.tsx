interface WizardAvatarProps {
  nickname: string,
  realname: string
}

function WizardAvatar(props: WizardAvatarProps) {
  return (
    <div className='avatar__container flex flex-row items-center w-full'>
      <div className='avatar__photo mr-20'>
        <div className='relative w-64 h-64 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
          <div className='w-full h-full bg-[#E8DCC8] rounded-full flex items-center justify-center'>
            <svg
              viewBox='0 0 400 400'
              className='w-full h-full'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* Background Circle with Sunset Gradient */}
              <defs>
                <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B35" />
                  <stop offset="40%" stopColor="#F7931E" />
                  <stop offset="70%" stopColor="#FFA07A" />
                  <stop offset="100%" stopColor="#FFB6C1" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="150" fill="url(#sunsetGradient)" stroke="#7A5A4A" strokeWidth="3" />
              
              {/* Vitruvian Man Guide Lines */}
              <line x1="50" y1="200" x2="350" y2="200" stroke="#7A5A4A" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="#7A5A4A" strokeWidth="1" opacity="0.4" />
              
              {/* Wizard Hat */}
              <g>
                {/* Hat Brim */}
                <ellipse cx="200" cy="165" rx="80" ry="15" fill="#4A5F7F" stroke="#2C3E50" strokeWidth="2" />
                
                {/* Hat Cone */}
                <path d="M 140 165 Q 200 50 260 165 Z" fill="#4A5F7F" stroke="#2C3E50" strokeWidth="2" />
                
                {/* Stars and Moons on Hat */}
                <path d="M 185 80 L 188 90 L 198 90 L 190 96 L 193 106 L 185 100 L 177 106 L 180 96 L 172 90 L 182 90 Z" fill="#F5C842" />
                <path d="M 220 110 L 223 120 L 233 120 L 225 126 L 228 136 L 220 130 L 212 136 L 215 126 L 207 120 L 217 120 Z" fill="#F5C842" />
                <path d="M 165 130 Q 162 125 157 125 Q 162 125 165 120 Q 165 125 170 125 Q 165 125 165 130 Z" fill="#F5C842" />
                <path d="M 230 85 Q 227 80 222 80 Q 227 80 230 75 Q 230 80 235 80 Q 230 80 230 85 Z" fill="#F5C842" />
              </g>
              
              {/* TV Head Body */}
              <g>
                {/* TV Casing */}
                <rect x="140" y="165" width="120" height="90" rx="8" fill="#8B6F47" stroke="#654321" strokeWidth="3" />
                
                {/* Screen Border */}
                <rect x="150" y="175" width="100" height="70" rx="4" fill="#5D4E37" />
                
                {/* Vite-Inspired Green Screen */}
                <defs>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A4D96C" />
                    <stop offset="50%" stopColor="#8BC34A" />
                    <stop offset="100%" stopColor="#9CCC65" />
                  </linearGradient>
                  
                  <linearGradient id="viteGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#41D1FF" />
                    <stop offset="100%" stopColor="#BD34FE" />
                  </linearGradient>
                  
                  <linearGradient id="viteGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFEA83" />
                    <stop offset="10%" stopColor="#FFDD35" />
                    <stop offset="100%" stopColor="#FFA800" />
                  </linearGradient>
                </defs>
                
                <rect x="155" y="180" width="90" height="60" rx="2" fill="url(#screenGradient)" />
                
                {/* Vite Logo Elements on Screen */}
                {/* Back triangle (purple gradient) */}
                <path d="M 200 195 L 220 225 L 180 225 Z" fill="url(#viteGradient1)" opacity="0.7" />
                
                {/* Front lightning bolt (yellow gradient) */}
                <path d="M 205 195 L 195 210 L 202 210 L 195 225 L 210 207 L 203 207 Z" fill="url(#viteGradient2)" />
                
                {/* Screen Glare */}
                <ellipse cx="170" cy="190" rx="15" ry="10" fill="white" opacity="0.4" />
              </g>
              
              {/* Control Button */}
              <circle cx="200" cy="265" r="8" fill="#D4A373" stroke="#654321" strokeWidth="2" />
              
              {/* Robot Arms (4 arms - 2 on each side) */}
              <g>
                {/* Left Arms */}
                <g>
                  {/* Upper Left Arm */}
                  <line x1="140" y1="195" x2="100" y2="180" stroke="#2C2C2C" strokeWidth="6" strokeLinecap="round" />
                  {/* Lower Left Arm */}
                  <line x1="140" y1="225" x2="100" y2="240" stroke="#2C2C2C" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Upper Left Hand */}
                  <g transform="translate(85, 175)">
                    <ellipse cx="0" cy="0" rx="12" ry="15" fill="#E8E8E8" stroke="#2C2C2C" strokeWidth="1.5" />
                    <line x1="-5" y1="0" x2="-5" y2="-12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="0" x2="0" y2="-14" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="0" x2="5" y2="-12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                  </g>
                  
                  {/* Lower Left Hand */}
                  <g transform="translate(85, 245)">
                    <ellipse cx="0" cy="0" rx="12" ry="15" fill="#E8E8E8" stroke="#2C2C2C" strokeWidth="1.5" />
                    <line x1="-5" y1="0" x2="-5" y2="12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="0" x2="5" y2="12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </g>
                
                {/* Right Arms */}
                <g>
                  {/* Upper Right Arm */}
                  <line x1="260" y1="195" x2="300" y2="180" stroke="#2C2C2C" strokeWidth="6" strokeLinecap="round" />
                  {/* Lower Right Arm */}
                  <line x1="260" y1="225" x2="300" y2="240" stroke="#2C2C2C" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Upper Right Hand */}
                  <g transform="translate(315, 175)">
                    <ellipse cx="0" cy="0" rx="12" ry="15" fill="#E8E8E8" stroke="#2C2C2C" strokeWidth="1.5" />
                    <line x1="-5" y1="0" x2="-5" y2="-12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="0" x2="0" y2="-14" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="0" x2="5" y2="-12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                  </g>
                  
                  {/* Lower Right Hand */}
                  <g transform="translate(315, 245)">
                    <ellipse cx="0" cy="0" rx="12" ry="15" fill="#E8E8E8" stroke="#2C2C2C" strokeWidth="1.5" />
                    <line x1="-5" y1="0" x2="-5" y2="12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="5" y1="0" x2="5" y2="12" stroke="#E8E8E8" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </g>
              </g>
              
              {/* Robot Legs */}
              <g>
                {/* Left Leg */}
                <rect x="170" y="265" width="15" height="30" fill="#654321" stroke="#4A3218" strokeWidth="2" />
                {/* Left Foot */}
                <rect x="165" y="290" width="25" height="15" rx="3" fill="#8B6F47" stroke="#654321" strokeWidth="2" />
                
                {/* Right Leg */}
                <rect x="215" y="265" width="15" height="30" fill="#654321" stroke="#4A3218" strokeWidth="2" />
                {/* Right Foot */}
                <rect x="210" y="290" width="25" height="15" rx="3" fill="#8B6F47" stroke="#654321" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className='avatar__texts text-center justify-between'>
        <div className='text__title'>
          <h1>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='w-80 mt-5'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default WizardAvatar
export type { WizardAvatarProps }
