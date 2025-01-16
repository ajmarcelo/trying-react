// import React, { ReactNode, useContext, useState } from "react";

// // Definition of the context shape
// interface ThemeContextProps {
//     theme: string,
//     toggleTheme: () => void
// }

// // Creation of the context with the default values
// const ThemeContext = React.createContext<ThemeContextProps>({
//     theme: 'light',
//     toggleTheme: () => {}
// });

// // Provider component that will wrap the entire application
// export const ThemeProvider : React.FC<{children : ReactNode}> = ({children}) => {
//     const [theme, setTheme] = useState('light')

//     const toggleTheme = () => {
//         setTheme(theme === 'light'? 'dark' : 'light');
//     }

//     return (
//         <ThemeContext.Provider value={{theme, toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// // Custom hook to use the context
// export const useTheme = ()=>{
//     const context = useContext(ThemeContext)

//     // To check if the theme context is being used properly or not
//     if(!context) {
//         throw new Error('useTheme must be used within a ThemeProvider')
//     }
    
//     return context;
// }



// CLEANER CODE THAN THE FIRST CODE
import React, { ReactNode, useContext, useReducer, useState } from "react";

interface ThemeState {
    theme: string,
}

type ThemeActions = {type:"TOGGLE_THEME"}

// Create a reducer to manage the state
const themeReducer = (state:ThemeState, action:ThemeActions) : ThemeState => {
    switch(action.type) {
        case "TOGGLE_THEME":
            return {theme: state.theme === 'light' ? 'dark' : 'light'}
        default:
            return state;
    }
}

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
    const [state, dispatch] = useReducer(themeReducer, {theme:'light'})

    const toggleTheme = () => {
        dispatch({type:"TOGGLE_THEME"});
    }

    return (
        <ThemeContext.Provider value={{theme:state.theme, toggleTheme}}>
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