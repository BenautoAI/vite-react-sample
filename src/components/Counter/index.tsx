import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.initialValue ?? 0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='counter__container flex flex-col items-center gap-6 p-8'>
      
      <div className='counter__display'>
        <h1 className='text-6xl font-bold'>{count}</h1>
      </div>

      <div className='counter__controls flex flex-row gap-4'>
        
        <button 
          className='counter__button counter__button--decrement px-6 py-3'
          onClick={handleDecrement}
        >
          Decrement (-)
        </button>

        <button 
          className='counter__button counter__button--increment bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors'
          onClick={handleIncrement}
        >
          Increment (+)
        </button>

      </div>

    </div>
  )
}

export default Counter
