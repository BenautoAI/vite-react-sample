function ViteFeiAvatar() {
  return (
    <div className="
      vite-fei-avatar__container
      flex
      justify-center
      items-center
      py-10
    ">
      <div className="vite-fei-avatar__wrapper relative inline-block">
        {/* Outer circular border with Fei-themed gradient */}
        <div className="
          vite-fei-avatar__outer-circle
          rounded-full
          w-48
          h-48
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-purple-400
          via-pink-300
          to-blue-400
          p-1
          shadow-xl
          hover:scale-105
          transition-transform
          duration-300
        ">
          {/* Inner white circle for contrast */}
          <div className="
            vite-fei-avatar__inner-circle
            rounded-full
            w-full
            h-full
            bg-white
            flex
            items-center
            justify-center
            p-4
          ">
            {/* Vite logo container */}
            <div className="vite-fei-avatar__logo-container w-full h-full flex items-center justify-center">
              <img 
                src="/vite.svg" 
                alt="Vite Logo" 
                className="vite-fei-avatar__logo w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Fei avatar overlay (optional corner badge) */}
        <div className="
          vite-fei-avatar__badge
          absolute
          -bottom-2
          -right-2
          w-16
          h-16
          rounded-full
          bg-gradient-to-br
          from-teal-400
          via-blue-500
          to-purple-600
          border-4
          border-white
          shadow-lg
          flex
          items-center
          justify-center
          text-white
          font-bold
          text-xs
        ">
          <span className="vite-fei-avatar__badge-text text-center">FEI</span>
        </div>
      </div>
    </div>
  );
}

export default ViteFeiAvatar;
