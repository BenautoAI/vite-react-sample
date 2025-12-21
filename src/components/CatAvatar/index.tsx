interface CatAvatarProps {
  name: string;
  breed?: string;
  color?: string;
  pattern?: string;
}

function CatAvatar(props: CatAvatarProps) {
  const { name, breed = "Domestic Shorthair", color = "orange", pattern = "tabby" } = props;

  return (
    <div className='
      cat-avatar__container 
      flex 
      flex-col
      items-center
      w-full
      max-w-md
      mx-auto
      p-6
      '>

      <div className='cat-avatar__photo mb-6'>
        <div
          className='
          rounded-full
          hover:scale-110
          transition-transform
          duration-300
          ease-in-out
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          cursor-pointer
          '
        >
          <div className='bg-white rounded-full p-8'>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='cat-illustration'
            >
              {/* Cat head */}
              <ellipse cx="100" cy="110" rx="60" ry="55" fill="#F59E0B" />
              
              {/* Left ear */}
              <path d="M 55 80 L 40 40 L 70 70 Z" fill="#F59E0B" />
              <path d="M 55 75 L 45 50 L 65 70 Z" fill="#FDE68A" />
              
              {/* Right ear */}
              <path d="M 145 80 L 160 40 L 130 70 Z" fill="#F59E0B" />
              <path d="M 145 75 L 155 50 L 135 70 Z" fill="#FDE68A" />
              
              {/* Inner face highlights */}
              <ellipse cx="80" cy="115" rx="20" ry="25" fill="#FDE68A" />
              <ellipse cx="120" cy="115" rx="20" ry="25" fill="#FDE68A" />
              <ellipse cx="100" cy="135" rx="25" ry="20" fill="#FDE68A" />
              
              {/* Eyes */}
              <ellipse cx="80" cy="105" rx="8" ry="12" fill="#065F46" />
              <ellipse cx="120" cy="105" rx="8" ry="12" fill="#065F46" />
              
              {/* Eye highlights */}
              <circle cx="78" cy="102" r="3" fill="white" />
              <circle cx="118" cy="102" r="3" fill="white" />
              
              {/* Nose */}
              <path d="M 95 125 L 100 130 L 105 125 L 100 127 Z" fill="#EC4899" />
              
              {/* Mouth */}
              <path d="M 100 130 Q 90 135 85 133" stroke="#065F46" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 100 130 Q 110 135 115 133" stroke="#065F46" strokeWidth="2" fill="none" strokeLinecap="round" />
              
              {/* Whiskers */}
              <line x1="40" y1="115" x2="70" y2="110" stroke="#065F46" strokeWidth="1.5" />
              <line x1="40" y1="120" x2="70" y2="120" stroke="#065F46" strokeWidth="1.5" />
              <line x1="40" y1="125" x2="70" y2="130" stroke="#065F46" strokeWidth="1.5" />
              
              <line x1="160" y1="115" x2="130" y2="110" stroke="#065F46" strokeWidth="1.5" />
              <line x1="160" y1="120" x2="130" y2="120" stroke="#065F46" strokeWidth="1.5" />
              <line x1="160" y1="125" x2="130" y2="130" stroke="#065F46" strokeWidth="1.5" />
              
              {/* Tabby stripes */}
              <path d="M 70 85 Q 75 80 80 85" stroke="#D97706" strokeWidth="2" fill="none" />
              <path d="M 120 85 Q 125 80 130 85" stroke="#D97706" strokeWidth="2" fill="none" />
              <path d="M 85 95 Q 90 92 95 95" stroke="#D97706" strokeWidth="2" fill="none" />
              <path d="M 105 95 Q 110 92 115 95" stroke="#D97706" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className='cat-avatar__texts text-center'>

        <div className='text__title'>
          <h1 className='text-3xl font-bold text-gray-800'>{name}</h1>
        </div>

        <div className='text__breed mt-2'>
          <h2 className='text-lg text-gray-600'>{breed}</h2>
        </div>

        <div className='text__details mt-2 flex gap-3 justify-center'>
          <span className='px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium'>
            {color}
          </span>
          <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium'>
            {pattern}
          </span>
        </div>

        <div className='text__action mt-6'>
          <button className='
            px-8 
            py-3 
            bg-gradient-to-r 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
            text-white 
            font-semibold 
            rounded-full
            hover:shadow-lg
            hover:scale-105
            transition-all
            duration-300
          '>
            Adopt Me 🐱
          </button>
        </div>

      </div>

    </div>
  );
}

export default CatAvatar;
