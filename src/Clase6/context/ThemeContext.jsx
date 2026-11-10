import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(darkMode ? false : true);
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider