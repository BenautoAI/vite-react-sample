import Cat from '../../components/Cat'

function CatPage() {
  return (
    <div className='cat-page__container p-8'>
      <div className='cat-page__header mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>Playful Cat</h1>
        <p className='mt-2 text-gray-600'>A friendly cat waving hello!</p>
      </div>

      <div className='cat-page__content'>
        <Cat 
          backgroundColor='#00BFFF'
          altText='A playful tabby cat waving its paw'
        />
      </div>

      <div className='cat-page__description mt-6'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-3'>About This Cat</h2>
          <p className='text-gray-700'>
            This adorable tabby cat is captured mid-wave with its paw raised in a friendly greeting. 
            The vibrant blue background perfectly complements the cat's striped fur pattern, creating 
            a playful and eye-catching composition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CatPage;
