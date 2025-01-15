import React, { useReducer } from 'react'

interface State {
    count: number
}

type Action = {type: 'increment'} | {type: 'decrement'}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }

}

const ReducerExample: React.FC  = () => {
  const [state, dispatch] = useReducer(reducer, {count:0})
    return (
    <div>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
        <p>the count is {state.count}</p>
        <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
    </div>
  )
}

export default ReducerExample