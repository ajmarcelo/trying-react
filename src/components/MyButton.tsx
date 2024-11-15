import React from 'react'

interface BtnProps {
    customOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const MyButton : React.FC<BtnProps> = ({customOnClick}) => {
  
  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log(e)
    console.log("Button clicked!")
  }
  
    return (
    <button onClick={(e)=>{customOnClick(e)}}>
      Click MyButton
    </button>
  )
}

export default MyButton
