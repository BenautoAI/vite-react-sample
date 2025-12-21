interface CatProps {
  className?: string;
}

function Cat({ className = '' }: CatProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Cat Image Container */}
      <div className="
        cat__container
        relative 
        w-64 h-64 
        bg-gradient-to-b from-cyan-400 to-blue-500 
        rounded-lg 
        overflow-hidden
      ">
        <img
          src="./src/assets/cat.png"
          alt="Cat with raised paw"
          className="w-full h-full object-cover"
        />
        
        {/* Green Eyes Overlay */}
        <div className="cat__eyes absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-6">
            {/* Left Eye */}
            <div className="relative w-8 h-10">
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-4 bg-black rounded-full"></div>
            </div>
            {/* Right Eye */}
            <div className="relative w-8 h-10">
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Green Paw Overlay */}
        <div className="cat__paw absolute top-8 right-12">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Main Paw Pad */}
            <ellipse
              cx="40"
              cy="50"
              rx="20"
              ry="16"
              fill="#10B981"
              fillOpacity="0.9"
            />
            
            {/* Toe Pads */}
            <ellipse
              cx="25"
              cy="30"
              rx="8"
              ry="10"
              fill="#10B981"
              fillOpacity="0.9"
            />
            <ellipse
              cx="40"
              cy="25"
              rx="8"
              ry="10"
              fill="#10B981"
              fillOpacity="0.9"
            />
            <ellipse
              cx="55"
              cy="30"
              rx="8"
              ry="10"
              fill="#10B981"
              fillOpacity="0.9"
            />
            <ellipse
              cx="50"
              cy="20"
              rx="6"
              ry="8"
              fill="#10B981"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Cat;
