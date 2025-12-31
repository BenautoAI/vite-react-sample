import CatWithHat from "../../components/CatWithHat";

function CatPage() {
  return (
    <div className='cat-page__container w-full min-h-screen bg-gray-100 p-8'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
          Cat with Hat 🎩
        </h1>

        <div className='mb-12'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
            Featured Cat
          </h2>
          <div className='flex justify-center'>
            <CatWithHat size="large" />
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
            Different Sizes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='flex flex-col items-center'>
              <h3 className='text-lg font-medium text-gray-600 mb-2'>Small</h3>
              <CatWithHat size="small" />
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-lg font-medium text-gray-600 mb-2'>Medium</h3>
              <CatWithHat size="medium" />
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-lg font-medium text-gray-600 mb-2'>Large</h3>
              <CatWithHat size="large" />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
            Features
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-600'>
            <li>Animated waving paw gesture</li>
            <li>Bouncing top hat animation</li>
            <li>Hover scale effect</li>
            <li>Gradient blue background</li>
            <li>Three size variants: small, medium, and large</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatPage;
