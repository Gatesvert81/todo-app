import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Button from '../Components/Button'
import { ChanegeThemeContext } from './ThemeContext'
import sun from '../Assets/images/icon-sun.svg'
import moon from '../Assets/images/icon-moon.svg'
import Image from '../Components/Image'
import Nav from '../Components/Nav'


const Head = styled.h1`
    letter-spacing: 0.7rem;
    font-size: 1.5rem;
    font-weight: 500;
`

function Navigation() {

    const [theme, setTheme] = useContext(ChanegeThemeContext)

    return (
        <Nav>
            <Head> TODO </Head>
            <Button onClick={() => setTheme(!theme)} >
                {
                    theme? <Image src={sun} alt="sun" className="themebtn" /> 
                    : <Image src={moon} alt="moon" className="themebtn" />
                }
            </Button>
        </Nav>
    )
}

export default Navigation
