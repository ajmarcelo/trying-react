import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Nav : React.FC = () => {

    const {theme, toggleTheme} = useTheme()
    return (
    <nav style={{backgroundColor : theme === 'light' ? 'whitesmoke' : 'gray',
                color : theme === 'light' ? 'black' : 'whitesmoke'
        
    }}>
        Hello this is the nav bar

        <button onClick={toggleTheme}>{theme == 'light' ? 'dark' : 'light'}</button>
    </nav>
    )
}

export default Nav