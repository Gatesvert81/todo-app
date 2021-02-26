import React, { createContext, useContext, useState, useEffect } from "react"

export const ChanegeThemeContext = createContext(true)

function ThemeProvider({children}) {
    const [theme, setTheme] = useState()
    const context = useContext(ChanegeThemeContext)

    useEffect(() => {
        setTheme(context)
        
    }, [context])
    

    return (
        <ChanegeThemeContext.Provider  value={[theme, setTheme]}>
            {children}
        </ChanegeThemeContext.Provider>
    )
}

export default ThemeProvider
