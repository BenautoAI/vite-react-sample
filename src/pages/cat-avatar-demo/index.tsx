import CatAvatar from '../../components/CatAvatar';

function CatAvatarDemo() {
  return (
    <div className='cat-avatar-demo min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 py-12 px-4'>
      
      <div className='max-w-7xl mx-auto'>
        
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-800 mb-4'>
            🐱 Cat Avatar Gallery
          </h1>
          <p className='text-xl text-gray-600'>
            Meet our adorable feline friends!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Cat 1 - Default */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Whiskers"
              breed="Domestic Shorthair"
              color="orange"
              pattern="tabby"
            />
          </div>

          {/* Cat 2 - Maine Coon */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Fluffy"
              breed="Maine Coon"
              color="gray"
              pattern="solid"
            />
          </div>

          {/* Cat 3 - Siamese */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Luna"
              breed="Siamese"
              color="cream"
              pattern="pointed"
            />
          </div>

          {/* Cat 4 - Persian */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Mittens"
              breed="Persian"
              color="white"
              pattern="solid"
            />
          </div>

          {/* Cat 5 - Bengal */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Tiger"
              breed="Bengal"
              color="brown"
              pattern="spotted"
            />
          </div>

          {/* Cat 6 - Scottish Fold */}
          <div className='bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300'>
            <CatAvatar 
              name="Mochi"
              breed="Scottish Fold"
              color="black"
              pattern="tuxedo"
            />
          </div>

        </div>

        <div className='mt-16 text-center'>
          <div className='bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Single Cat Showcase
            </h2>
            <p className='text-gray-600 mb-8'>
              A standalone cat avatar with all customization options
            </p>
            <CatAvatar 
              name="Princess Paws"
              breed="British Shorthair"
              color="blue-gray"
              pattern="solid"
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default CatAvatarDemo;
