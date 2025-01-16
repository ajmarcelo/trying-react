import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Acts as a middleware.
// Before we go to that specific component, it checks the condition 
// if it the user can/should have access to that specific component


interface AuthProps {
    element : React.ReactNode
}
const Auth : React.FC<AuthProps> = ({element}) => {
  // this is how you take a user to a specific page while using a specific token stored from the local storage  
  const [isAuth, setisAuth] = useState<boolean>(localStorage.getItem('isAuth') === 'true')
  
  return (
    <div>
        {isAuth ? element : <Navigate to='/'/>}
    </div>
  )
}

export default Auth