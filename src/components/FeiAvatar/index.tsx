interface FeiAvatarProps {
  size?: number
  className?: string
}

function FeiAvatar(props: FeiAvatarProps) {
  const size = props.size || 200
  const className = props.className || ''
  return (
    <div 
      className={`fei-avatar-container inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 320"
        width={size}
        height={size}
        aria-label="Fei Avatar - Vite Wizard"
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

        {/* Wizard Hat */}
        <g transform="translate(128, 0)">
          {/* Hat cone */}
          <path
            d="M -60 80 Q -65 20, -30 -15 Q 0 -35, 30 -15 Q 65 20, 60 80 Z"
            fill="#2C3E7A"
            stroke="#1a1f3a"
            strokeWidth="2"
          />
          
          {/* Hat brim */}
          <ellipse
            cx="0"
            cy="80"
            rx="75"
            ry="15"
            fill="#364A8C"
            stroke="#1a1f3a"
            strokeWidth="2"
          />
          
          {/* Star decorations on hat */}
          <g fill="#FDB813">
            {/* Top star */}
            <path
              d="M -5 10 L -2 18 L 6 18 L 0 24 L 2 32 L -5 27 L -12 32 L -10 24 L -16 18 L -8 18 Z"
              transform="scale(0.8)"
            />
            
            {/* Right star */}
            <path
              d="M 35 45 L 37 51 L 43 51 L 38 55 L 40 61 L 35 57 L 30 61 L 32 55 L 27 51 L 33 51 Z"
              transform="scale(0.7)"
            />
            
            {/* Left moon */}
            <path
              d="M -45 50 Q -40 45, -35 50 Q -38 55, -42 55 Q -47 53, -45 50 Z"
            />
            
            {/* Right moon */}
            <path
              d="M 40 25 Q 45 20, 50 25 Q 47 30, 43 30 Q 38 28, 40 25 Z"
              transform="scale(0.8)"
            />
          </g>
        </g>

        {/* Vite Logo (shifted down to be under the hat) */}
        <g transform="translate(0, 90)">
          <path
            fill="url(#viteGradient1)"
            d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            transform="scale(0.85)"
          />
          <path
            fill="url(#viteGradient2)"
            d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            transform="scale(0.85)"
          />
        </g>
      </svg>
    </div>
  )
}

export default FeiAvatar
