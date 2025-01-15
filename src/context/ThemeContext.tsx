import React, { ReactNode, useContext, useState } from "react";

// Definition of the context shape
interface ThemeContextProps {
    theme: string,
    toggleTheme: () => void
}

// Creation of the context with the default values
const ThemeContext = React.createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {}
});

// Provider component that will wrap the entire application
export const ThemeProvider : React.FC<{children : ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom hook to use the context
export const useTheme = ()=>{
    const context = useContext(ThemeContext)

    // To check if the theme context is being used properly or not
    if(!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    
    return context;
}