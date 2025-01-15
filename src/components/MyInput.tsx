import React, { useRef } from 'react'

const MyInput: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    
    const focusInput = ()=>{
        inputRef.current?.focus()
    }
    
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={focusInput}>Focus Input Bar</button>
        </>
    )
}

export default MyInput