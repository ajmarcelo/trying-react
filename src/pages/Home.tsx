import React from 'react'
import ToDoList from '../components/ToDoList'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Nav from '../components/Nav'

const Home : React.FC = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    navigate("/")
  }

  const {toggleTheme} = useTheme()
  
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
        <Nav/>
        {/* Outlet - tells the component that `there is a child inside you` 
        and when it  is rendered*/}
        <Outlet/>
        
        Home Page
        <ToDoList/>

        <button onClick={toggleTheme}>THEME CHANGE</button>
    </div>
  )
}

export default Home