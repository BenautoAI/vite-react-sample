import CircularAvatar from '../../components/CircularAvatar';

function AvatarDemoPage() {
  return (
    <div className='avatar-demo__container flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8'>
      
      <div className='avatar-demo__header text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-3'>
          Circular Avatar Demo
        </h1>
        <p className='text-lg text-gray-600'>
          Circular avatar with gradient border effect
        </p>
      </div>

      <div className='avatar-demo__showcase mb-16'>
        <CircularAvatar 
          src='./src/assets/photo.png'
          alt='Anime character avatar'
          size='xl'
        />
      </div>

      <div className='avatar-demo__sizes grid grid-cols-4 gap-8 items-end'>
        
        <div className='avatar-demo__size-item text-center'>
          <CircularAvatar 
            src='./src/assets/photo.png'
            alt='Small avatar'
            size='sm'
          />
          <p className='mt-4 text-sm text-gray-600 font-medium'>Small</p>
        </div>

        <div className='avatar-demo__size-item text-center'>
          <CircularAvatar 
            src='./src/assets/photo.png'
            alt='Medium avatar'
            size='md'
          />
          <p className='mt-4 text-sm text-gray-600 font-medium'>Medium</p>
        </div>

        <div className='avatar-demo__size-item text-center'>
          <CircularAvatar 
            src='./src/assets/photo.png'
            alt='Large avatar'
            size='lg'
          />
          <p className='mt-4 text-sm text-gray-600 font-medium'>Large</p>
        </div>

        <div className='avatar-demo__size-item text-center'>
          <CircularAvatar 
            src='./src/assets/photo.png'
            alt='Extra large avatar'
            size='xl'
          />
          <p className='mt-4 text-sm text-gray-600 font-medium'>Extra Large</p>
        </div>

      </div>

      <div className='avatar-demo__features mt-12 max-w-2xl'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Features</h2>
          <ul className='space-y-2 text-gray-700'>
            <li className='flex items-start'>
              <span className='text-blue-500 mr-2'>•</span>
              <span>Gradient border effect (cyan → blue → purple)</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-500 mr-2'>•</span>
              <span>Four size variants (sm, md, lg, xl)</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-500 mr-2'>•</span>
              <span>Smooth hover scale animation</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-500 mr-2'>•</span>
              <span>Perfectly circular image with object-cover</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-500 mr-2'>•</span>
              <span>Responsive and accessible</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default AvatarDemoPage;
