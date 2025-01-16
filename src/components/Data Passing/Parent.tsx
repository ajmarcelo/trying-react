import React, { useState } from 'react'
import Child from './Child'

const Parent : React.FC = () => {
  
    const message = "Hello from the parent."

    const [data, setdata] = useState<string>("")

    // function for handling/receiving data from other component
    const handleData = (data:string) =>{
        console.log(data);

        setdata(data)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Message from the child is: {data}</p>
        <Child sendData={handleData} msg={message}/>
    </div>
  )
}

export default Parent