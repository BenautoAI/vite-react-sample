import BlueButton from '../../components/BlueButton'

function BlueButtonDemo() {
  const handleClick = () => {
    alert('Blue button clicked!')
  }

  return (
    <div className='
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      gap-6
      p-8
    '>
      <h1 className='text-4xl font-bold mb-8'>Blue Button Component Demo</h1>
      
      <div className='flex flex-col gap-4 items-center'>
        <div className='demo__section'>
          <h2 className='text-xl mb-3'>Default Button</h2>
          <BlueButton label='Click Me' onClick={handleClick} />
        </div>

        <div className='demo__section mt-6'>
          <h2 className='text-xl mb-3'>Disabled Button</h2>
          <BlueButton label='Disabled' disabled={true} />
        </div>

        <div className='demo__section mt-6'>
          <h2 className='text-xl mb-3'>Custom Width Button</h2>
          <BlueButton label='Wide Button' onClick={handleClick} className='w-64' />
        </div>

        <div className='demo__section mt-6'>
          <h2 className='text-xl mb-3'>Multiple Buttons</h2>
          <div className='flex gap-3'>
            <BlueButton label='Submit' onClick={handleClick} />
            <BlueButton label='Cancel' onClick={handleClick} />
            <BlueButton label='Confirm' onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueButtonDemo
