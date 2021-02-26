import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Wrapper from '../Components/Wrapper'
import { ChanegeThemeContext } from './ThemeContext'

function Footer() {
    const [theme] = useContext(ChanegeThemeContext)
    return (
        <Nav className="footer" themeColor={theme} >
            Drag and drop to reorder list
        </Nav>
    )
}

export default Footer
