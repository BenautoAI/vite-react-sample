interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      '>

      <div className='avatar__photo mr-20'>
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="150" cy="150" r="145" fill="#F5F5DC" stroke="#8B4513" strokeWidth="2"/>
          
          {/* Wizard Hat */}
          <path d="M 150 60 L 200 140 L 100 140 Z" fill="#4A6FA5" stroke="#2C3E50" strokeWidth="2"/>
          <ellipse cx="150" cy="140" rx="75" ry="20" fill="#4A6FA5" stroke="#2C3E50" strokeWidth="2"/>
          {/* Hat decorations */}
          <circle cx="120" cy="100" r="8" fill="#FCD34D"/>
          <path d="M 165 80 L 170 90 L 175 80 Z" fill="#FCD34D"/>
          <path d="M 140 120 C 140 120 135 115 130 120" stroke="#FCD34D" strokeWidth="3" fill="none"/>
          
          {/* Robot Body/Screen */}
          <rect x="100" y="145" width="100" height="80" rx="10" fill="#A0826D" stroke="#6B4423" strokeWidth="2"/>
          <rect x="110" y="155" width="80" height="50" rx="5" fill="#8FBC8F" stroke="#6B8E23" strokeWidth="2"/>
          {/* Screen reflections */}
          <ellipse cx="130" cy="170" rx="15" ry="10" fill="#F5F5DC" opacity="0.6"/>
          <path d="M 155 175 Q 165 180 170 190" stroke="#F5F5DC" strokeWidth="3" fill="none" opacity="0.5"/>
          
          {/* Button */}
          <circle cx="150" cy="245" r="8" fill="#D4A574" stroke="#6B4423" strokeWidth="1"/>
          
          {/* Arms (dark gray) */}
          <rect x="85" y="170" width="15" height="50" rx="3" fill="#4A4A4A" stroke="#2C2C2C" strokeWidth="1"/>
          <rect x="200" y="170" width="15" height="50" rx="3" fill="#4A4A4A" stroke="#2C2C2C" strokeWidth="1"/>
          
          {/* Hands - GREEN */}
          {/* Left hand */}
          <g transform="translate(70, 200)">
            <ellipse cx="15" cy="15" rx="18" ry="12" fill="#90EE90" stroke="#2C2C2C" strokeWidth="1.5"/>
            <line x1="10" y1="10" x2="8" y2="3" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="8" x2="13" y2="0" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="17" y1="8" x2="18" y2="0" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="21" y1="10" x2="23" y2="3" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          
          {/* Right hand */}
          <g transform="translate(197, 200)">
            <ellipse cx="15" cy="15" rx="18" ry="12" fill="#90EE90" stroke="#2C2C2C" strokeWidth="1.5"/>
            <line x1="10" y1="10" x2="8" y2="3" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="8" x2="13" y2="0" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="17" y1="8" x2="18" y2="0" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="21" y1="10" x2="23" y2="3" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          
          {/* Legs */}
          <rect x="120" y="225" width="20" height="30" rx="3" fill="#6B4423" stroke="#4A2C1A" strokeWidth="1"/>
          <rect x="160" y="225" width="20" height="30" rx="3" fill="#6B4423" stroke="#4A2C1A" strokeWidth="1"/>
          
          {/* Feet */}
          <ellipse cx="130" cy="260" rx="12" ry="8" fill="#4A2C1A"/>
          <ellipse cx="170" cy="260" rx="12" ry="8" fill="#4A2C1A"/>
        </svg>
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='w-80 mt-5'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;