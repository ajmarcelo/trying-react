import React from 'react'

interface Sibling1Props {
    updateData : (data:string) => void;
}

const Sibling1 : React.FC<Sibling1Props> = ({updateData}) => {
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    updateData(e.target.value);
  }
   return (
    <div>
        <h1>Sibling 1</h1>
        <input type="text" onChange={handleInput} name='' id='' />
    </div>
  )
}

export default Sibling1