import CircularAvatar from "../../components/CircularAvatar"

function CircularAvatarDemo() {
  return (
    <div className='
      circular-avatar-demo__container
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      gap-10
      bg-gray-50
    '>
      <div className='circular-avatar-demo__title'>
        <h1 className='text-4xl font-bold text-gray-900'>
          Circular Avatar Component
        </h1>
        <p className='text-lg text-gray-600 mt-3 text-center'>
          A reusable avatar component with gradient border
        </p>
      </div>

      <div className='circular-avatar-demo__large'>
        <CircularAvatar 
          src="/src/assets/photo.png" 
          alt="Anime Character"
          size={300}
        />
        <p className='text-sm text-gray-500 mt-3 text-center'>Large (300px)</p>
      </div>

      <div className='circular-avatar-demo__sizes flex gap-8 items-end'>
        <div className='flex flex-col items-center'>
          <CircularAvatar 
            src="/src/assets/photo.png" 
            alt="Anime Character"
            size={150}
          />
          <p className='text-sm text-gray-500 mt-3'>Medium (150px)</p>
        </div>

        <div className='flex flex-col items-center'>
          <CircularAvatar 
            src="/src/assets/photo.png" 
            alt="Anime Character"
            size={100}
          />
          <p className='text-sm text-gray-500 mt-3'>Small (100px)</p>
        </div>

        <div className='flex flex-col items-center'>
          <CircularAvatar 
            src="/src/assets/photo.png" 
            alt="Anime Character"
            size={60}
          />
          <p className='text-sm text-gray-500 mt-3'>Tiny (60px)</p>
        </div>
      </div>
    </div>
  );
}

export default CircularAvatarDemo;
