interface CatWithHatProps {
  size?: number;
  className?: string;
}

function CatWithHat({ size = 300, className = '' }: CatWithHatProps) {
  return (
    <div 
      className={`
        cat-with-hat__container 
        relative 
        inline-block 
        ${className}
      `}
      style={{ width: size, height: size }}
    >
      {/* Cat image container */}
      <div className="
        cat__image-wrapper
        relative 
        w-full 
        h-full
      ">
        <img
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop"
          alt="Playful cat"
          className="
            w-full 
            h-full 
            object-cover 
            rounded-2xl
          "
        />
        
        {/* Party hat positioned on the cat's head */}
        <div className="
          hat__wrapper
          absolute 
          top-0 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/4
        ">
          <div className="
            hat__container
            relative 
            w-20 
            h-24
          ">
            {/* Hat body - triangle */}
            <div 
              className="
                hat__body
                absolute 
                bottom-0 
                left-1/2 
                transform 
                -translate-x-1/2
              "
              style={{
                width: 0,
                height: 0,
                borderLeft: '40px solid transparent',
                borderRight: '40px solid transparent',
                borderBottom: '70px solid #E85D75',
              }}
            >
              {/* Polka dots on the hat */}
              <div className="
                hat__dot
                absolute 
                top-4 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-3 
                h-3 
                bg-white 
                rounded-full
              "></div>
              <div className="
                hat__dot
                absolute 
                top-10 
                left-1/2 
                transform 
                -translate-x-1/2 
                -translate-y-2 
                w-2 
                h-2 
                bg-white 
                rounded-full
              "></div>
              <div className="
                hat__dot
                absolute 
                top-8 
                left-1/2 
                transform 
                translate-x-2 
                w-2 
                h-2 
                bg-white 
                rounded-full
              "></div>
              <div className="
                hat__dot
                absolute 
                top-8 
                left-1/2 
                transform 
                -translate-x-6 
                w-2 
                h-2 
                bg-white 
                rounded-full
              "></div>
            </div>
            
            {/* Hat brim */}
            <div 
              className="
                hat__brim
                absolute 
                bottom-0 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-24 
                h-3 
                bg-yellow-300 
                rounded-full
              "
              style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            ></div>
            
            {/* Pom-pom on top */}
            <div className="
              hat__pompom
              absolute 
              -top-3 
              left-1/2 
              transform 
              -translate-x-1/2 
              w-6 
              h-6 
              bg-white 
              rounded-full 
              shadow-md
            "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatWithHat;
