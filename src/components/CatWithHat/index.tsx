interface CatWithHatProps {
  size?: 'small' | 'medium' | 'large',
  className?: string
}

function CatWithHat({ size = 'medium', className = '' }: CatWithHatProps) {
  const sizeClasses = {
    small: 'w-48 h-48',
    medium: 'w-64 h-64',
    large: 'w-96 h-96'
  };

  return (
    <div className={`cat-with-hat__container relative ${sizeClasses[size]} ${className}`}>
      {/* Blue background container */}
      <div className='
        absolute 
        inset-0 
        bg-gradient-to-b 
        from-[#4AC5E8] 
        to-[#3B9BB8]
        rounded-lg
        overflow-hidden
      '>
        {/* Cat container with centered positioning */}
        <div className='
          relative 
          w-full 
          h-full 
          flex 
          items-center 
          justify-center
        '>
          {/* Cat emoji/image placeholder - simulating the playful waving cat */}
          <div className='
            text-center 
            transform 
            hover:scale-110 
            transition-transform 
            duration-300
          '>
            <div className='cat__wrapper relative inline-block'>
              {/* Hat positioned on top */}
              <div className='
                cat__hat
                absolute 
                -top-8 
                left-1/2 
                transform 
                -translate-x-1/2
                text-6xl
                animate-bounce
              '>
                🎩
              </div>
              
              {/* Cat body */}
              <div className='cat__body text-8xl animate-pulse'>
                🐱
              </div>
              
              {/* Waving paw effect */}
              <div className='
                cat__paw
                absolute 
                top-8 
                -right-6
                text-4xl
                animate-wave
              '>
                👋
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatWithHat;
