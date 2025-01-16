import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing : React.FC = () => {
  
    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem("isAuth", "true")
        navigate("/home")
    }

    // (Problem: User will navigate back to the landing page via editing the 
    //           route after logging in)
    // Solution: (This will not allow the user to go back to the landing page 
    //           once they are logged in/authenticated)
    useEffect(()=> {
        if(localStorage.getItem("isAuth")){
            navigate("/home")  
        }
    })
    return (
    <div>
        Hello! i'm the landing page
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Landing