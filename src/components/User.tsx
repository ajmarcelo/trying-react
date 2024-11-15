import React from 'react'

interface User{
    id: string,
    name: string,
    age?: number // Optional Property
    namePrefix?: string // Prperty with default value

}

const User : React.FC<User>= ({id, name, age, namePrefix = "Mx."}) => {
  return (
    <div>
      
      <h3>Hello {namePrefix} {name}!</h3>
      
      {/* "If age exists, then only render the <p> out." */}
      {age && <p>-- {name}'s age is {age}.</p>}
    </div>
  )
}

export default User
