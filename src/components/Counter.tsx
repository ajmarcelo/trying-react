import React, { useState } from 'react'

const Counter: React.FC = () => {
  
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
    console.log(count)
  }

  const decrement = () => {
    setCount(count-1)
    console.log(count)
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
