import './Cat.css';

interface CatProps {
  className?: string;
}

function Cat(props: CatProps) {
  return (
    <div 
      className={`
        cat__container 
        relative 
        inline-block
        ${props.className || ''}
      `}
    >
      {/* Party Hat */}
      <div 
        className="
          cat__hat 
          absolute 
          -top-12 
          left-1/2 
          -translate-x-1/2
          z-10
        "
      >
        <div 
          className="
            relative
            w-0 
            h-0 
            border-l-[40px] 
            border-l-transparent
            border-r-[40px] 
            border-r-transparent
            border-b-[80px] 
            border-b-pink-400
          "
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
        >
          {/* Hat decorative patterns */}
          <div className="absolute -left-8 top-4 w-16 h-2 bg-purple-400 rounded"></div>
          <div className="absolute -left-8 top-10 w-16 h-2 bg-yellow-400 rounded"></div>
          <div className="absolute -left-8 top-16 w-16 h-2 bg-blue-400 rounded"></div>
          
          {/* Pom-pom on top */}
          <div 
            className="
              absolute 
              -top-6 
              left-1/2 
              -translate-x-1/2 
              w-5 
              h-5 
              bg-white 
              rounded-full
              shadow-md
            "
          ></div>
        </div>
      </div>

      {/* Cat Image */}
      <div 
        className="
          cat__photo 
          bg-gradient-to-br 
          from-cyan-400 
          to-blue-500
          rounded-2xl 
          p-8
          shadow-xl
        "
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Cat representation using CSS */}
          <div className="relative">
            {/* Cat face */}
            <div 
              className="
                w-48 
                h-48 
                bg-gradient-to-br 
                from-gray-300 
                to-gray-400
                rounded-full
                relative
                shadow-lg
              "
            >
              {/* Left ear */}
              <div 
                className="
                  absolute 
                  -top-8 
                  left-8
                  w-0 
                  h-0 
                  border-l-[25px] 
                  border-l-transparent
                  border-r-[25px] 
                  border-r-transparent
                  border-b-[40px] 
                  border-b-gray-400
                "
              >
                <div 
                  className="
                    absolute 
                    -bottom-7
                    -left-4
                    w-0 
                    h-0 
                    border-l-[15px] 
                    border-l-transparent
                    border-r-[15px] 
                    border-r-transparent
                    border-b-[25px] 
                    border-b-pink-300
                  "
                ></div>
              </div>

              {/* Right ear */}
              <div 
                className="
                  absolute 
                  -top-8 
                  right-8
                  w-0 
                  h-0 
                  border-l-[25px] 
                  border-l-transparent
                  border-r-[25px] 
                  border-r-transparent
                  border-b-[40px] 
                  border-b-gray-400
                "
              >
                <div 
                  className="
                    absolute 
                    -bottom-7
                    -left-4
                    w-0 
                    h-0 
                    border-l-[15px] 
                    border-l-transparent
                    border-r-[15px] 
                    border-r-transparent
                    border-b-[25px] 
                    border-b-pink-300
                  "
                ></div>
              </div>

              {/* Tabby stripes */}
              <div className="absolute top-12 left-4 w-8 h-2 bg-gray-600 rounded opacity-40"></div>
              <div className="absolute top-12 right-4 w-8 h-2 bg-gray-600 rounded opacity-40"></div>
              <div className="absolute top-16 left-8 w-6 h-2 bg-gray-600 rounded opacity-40"></div>
              <div className="absolute top-16 right-8 w-6 h-2 bg-gray-600 rounded opacity-40"></div>

              {/* Eyes */}
              <div className="absolute top-20 left-12 w-10 h-12 bg-yellow-300 rounded-full">
                <div className="absolute top-2 left-3 w-4 h-8 bg-black rounded-full"></div>
                <div className="absolute top-3 left-4 w-2 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-20 right-12 w-10 h-12 bg-yellow-300 rounded-full">
                <div className="absolute top-2 left-3 w-4 h-8 bg-black rounded-full"></div>
                <div className="absolute top-3 left-4 w-2 h-3 bg-white rounded-full"></div>
              </div>

              {/* Nose */}
              <div 
                className="
                  absolute 
                  top-32 
                  left-1/2 
                  -translate-x-1/2
                  w-0 
                  h-0 
                  border-l-[8px] 
                  border-l-transparent
                  border-r-[8px] 
                  border-r-transparent
                  border-t-[10px] 
                  border-t-pink-400
                "
              ></div>

              {/* Mouth */}
              <div className="absolute top-36 left-1/2 -translate-x-1/2 w-8 h-4">
                <div className="absolute left-0 top-0 w-4 h-4 border-b-2 border-l-2 border-gray-700 rounded-bl-full"></div>
                <div className="absolute right-0 top-0 w-4 h-4 border-b-2 border-r-2 border-gray-700 rounded-br-full"></div>
              </div>

              {/* Whiskers */}
              <div className="absolute top-28 -left-12 w-12 h-0.5 bg-gray-700"></div>
              <div className="absolute top-32 -left-12 w-12 h-0.5 bg-gray-700"></div>
              <div className="absolute top-28 -right-12 w-12 h-0.5 bg-gray-700"></div>
              <div className="absolute top-32 -right-12 w-12 h-0.5 bg-gray-700"></div>
            </div>

            {/* Paw waving */}
            <div 
              className="
                absolute 
                -bottom-4 
                -left-16
                w-12 
                h-20 
                bg-gradient-to-br 
                from-gray-300 
                to-gray-400
                rounded-t-full
                rounded-b-2xl
                shadow-lg
                transform 
                rotate-[-30deg]
                origin-bottom
              "
              style={{
                animation: 'wave 1s ease-in-out infinite'
              }}
            >
              {/* Paw pads */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-300 rounded-full"></div>
              <div className="absolute bottom-6 left-1 w-2 h-2 bg-pink-300 rounded-full"></div>
              <div className="absolute bottom-6 right-1 w-2 h-2 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;
