import React from 'react'

interface ChildProps {
    msg: string,
    sendData : (data:string) => void
}
const Child : React.FC<ChildProps> = ({msg, sendData}) => {
  return (
    <div style={{border:"2px solid teal"}}>
        <h1>Child Component</h1>
        <p>The message from the parent is: {msg}</p>

        <button onClick={()=>{sendData("Hello from child.")}}>Send data to parent</button>
        
    </div>
  )
}

export default Child