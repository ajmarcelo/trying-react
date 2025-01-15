import React, { useCallback, useMemo, useState } from 'react'

const Memo_Callback = () => {
  
  const [count, setcount] = useState<number>(0)

  const [input, setinput] = useState<string>("")

//   const expensiveCalculation = ()=>{
//     console.log("Calculation under progress...")
//     return count * 2
//   }
// Memoized version:
    const expensiveCalculation = useMemo(()=>{
        console.log("Calculation under progress...")
        return count * 2    
    },[count])

// Memoized function
    const handleInput = useCallback((event:React.ChangeEvent<HTMLInputElement>)=>
    {
        setinput(event.target.value)
    },[]
    )

    return (
        <div>
            <p>count: {count}</p>

            {/* <p>expensive calculation {expensiveCalculation()}</p> */}
            {/* Memoized version: */}
            <p>expensive calculation {expensiveCalculation}</p>

            <button onClick={()=>{setcount((prev)=>prev+1)}}>increment the count</button>
            
            <input type='text' value={input} onChange={handleInput} />
        </div>
    )
}

export default Memo_Callback