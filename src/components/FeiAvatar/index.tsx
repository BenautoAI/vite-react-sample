interface FeiAvatarProps {
  size?: number;
}

function FeiAvatar({ size = 400 }: FeiAvatarProps) {
  return (
    <div className="fei-avatar__container flex items-center justify-center">
      <svg
        viewBox="0 0 800 800"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="fei-avatar__svg"
      >
        {/* Background circle */}
        <circle
          cx="400"
          cy="400"
          r="350"
          fill="#E8DCC8"
          stroke="#6B4A3A"
          strokeWidth="3"
        />

        {/* Geometric frame - outer circle */}
        <circle
          cx="400"
          cy="400"
          r="280"
          fill="none"
          stroke="#6B4A3A"
          strokeWidth="2"
        />

        {/* Geometric frame - horizontal line */}
        <line
          x1="120"
          y1="400"
          x2="680"
          y2="400"
          stroke="#6B4A3A"
          strokeWidth="2"
        />

        {/* Wizard hat - brim */}
        <ellipse
          cx="400"
          cy="270"
          rx="140"
          ry="30"
          fill="#3B5278"
        />

        {/* Wizard hat - cone */}
        <path
          d="M 260 270 Q 280 100, 400 80 Q 520 100, 540 270 Z"
          fill="#3B5278"
        />

        {/* Stars and moons on hat */}
        <g className="hat-decorations" fill="#F4C542">
          {/* Stars */}
          <path d="M 400 130 L 408 148 L 427 148 L 412 159 L 418 177 L 400 166 L 382 177 L 388 159 L 373 148 L 392 148 Z" />
          <path d="M 330 180 L 335 192 L 348 192 L 338 200 L 342 212 L 330 204 L 318 212 L 322 200 L 312 192 L 325 192 Z" />
          <path d="M 470 180 L 475 192 L 488 192 L 478 200 L 482 212 L 470 204 L 458 212 L 462 200 L 452 192 L 465 192 Z" />
          
          {/* Moons */}
          <g>
            <circle cx="355" cy="220" r="12" />
            <circle cx="359" cy="220" r="12" fill="#3B5278" />
          </g>
          <g>
            <circle cx="445" cy="220" r="12" />
            <circle cx="449" cy="220" r="12" fill="#3B5278" />
          </g>
          <g>
            <circle cx="305" cy="245" r="10" />
            <circle cx="308" cy="245" r="10" fill="#3B5278" />
          </g>
          <g>
            <circle cx="495" cy="245" r="10" />
            <circle cx="498" cy="245" r="10" fill="#3B5278" />
          </g>
        </g>

        {/* Robot body - torso */}
        <rect
          x="310"
          y="380"
          width="180"
          height="140"
          rx="20"
          fill="#8B6D4F"
          stroke="#5A4433"
          strokeWidth="3"
        />

        {/* TV screen - frame */}
        <rect
          x="280"
          y="280"
          width="240"
          height="180"
          rx="15"
          fill="#8B6D4F"
          stroke="#5A4433"
          strokeWidth="4"
        />

        {/* TV screen - inner screen */}
        <rect
          x="300"
          y="300"
          width="200"
          height="140"
          rx="8"
          fill="url(#screenGradient)"
        />

        {/* Screen gradient */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9FD356" />
            <stop offset="50%" stopColor="#7DC242" />
            <stop offset="100%" stopColor="#F4F3A0" />
          </linearGradient>
        </defs>

        {/* Screen reflections */}
        <ellipse
          cx="380"
          cy="330"
          rx="40"
          ry="25"
          fill="white"
          opacity="0.4"
        />
        <ellipse
          cx="450"
          cy="360"
          rx="50"
          ry="30"
          fill="white"
          opacity="0.2"
        />

        {/* Control button on torso */}
        <circle
          cx="400"
          cy="470"
          r="15"
          fill="#D4A574"
          stroke="#5A4433"
          strokeWidth="2"
        />

        {/* Arms - left side */}
        {/* Left arm 1 (upper) */}
        <g>
          <line x1="310" y1="410" x2="230" y2="380" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
          {/* Hand */}
          <g transform="translate(230, 380)">
            <ellipse cx="-10" cy="0" rx="25" ry="18" fill="white" stroke="#3A3A3A" strokeWidth="2" />
            <path d="M -30,-8 L -40,-15" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M -30,-2 L -42,-5" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M -30,5 L -40,8" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* Left arm 2 (lower) */}
        <g>
          <line x1="310" y1="445" x2="250" y2="490" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
          {/* Hand */}
          <g transform="translate(250, 490)">
            <ellipse cx="-8" cy="8" rx="25" ry="18" fill="white" stroke="#3A3A3A" strokeWidth="2" />
            <path d="M -25,0 L -35,-8" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M -28,6 L -38,2" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M -25,12 L -32,18" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* Arms - right side */}
        {/* Right arm 1 (upper) */}
        <g>
          <line x1="490" y1="410" x2="570" y2="380" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
          {/* Hand */}
          <g transform="translate(570, 380)">
            <ellipse cx="10" cy="0" rx="25" ry="18" fill="white" stroke="#3A3A3A" strokeWidth="2" />
            <path d="M 30,-8 L 40,-15" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 30,-2 L 42,-5" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 30,5 L 40,8" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* Right arm 2 (lower) */}
        <g>
          <line x1="490" y1="445" x2="550" y2="490" stroke="#3A3A3A" strokeWidth="12" strokeLinecap="round" />
          {/* Hand */}
          <g transform="translate(550, 490)">
            <ellipse cx="8" cy="8" rx="25" ry="18" fill="white" stroke="#3A3A3A" strokeWidth="2" />
            <path d="M 25,0 L 35,-8" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 28,6 L 38,2" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 25,12 L 32,18" stroke="#3A3A3A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* Legs */}
        <g>
          {/* Left leg */}
          <rect x="340" y="520" width="40" height="50" rx="5" fill="#8B6D4F" stroke="#5A4433" strokeWidth="3" />
          {/* Left foot */}
          <path d="M 340 570 L 340 590 L 390 590 L 390 580 L 380 570 Z" fill="#6B4A3A" stroke="#5A4433" strokeWidth="2" />
          
          {/* Right leg */}
          <rect x="420" y="520" width="40" height="50" rx="5" fill="#8B6D4F" stroke="#5A4433" strokeWidth="3" />
          {/* Right foot */}
          <path d="M 460 570 L 460 590 L 410 590 L 410 580 L 420 570 Z" fill="#6B4A3A" stroke="#5A4433" strokeWidth="2" />
        </g>

        {/* Joint details */}
        <circle cx="310" cy="410" r="8" fill="#5A4433" />
        <circle cx="310" cy="445" r="8" fill="#5A4433" />
        <circle cx="490" cy="410" r="8" fill="#5A4433" />
        <circle cx="490" cy="445" r="8" fill="#5A4433" />
      </svg>
    </div>
  );
}

export default FeiAvatar;
