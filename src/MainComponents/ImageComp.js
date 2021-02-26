import React, { useContext } from 'react'
import Image from '../Components/Image'
import desktopDark from '../Assets/images/bg-desktop-dark.jpg'
import desktopLight from '../Assets/images/bg-desktop-light.jpg'
import mobileDark from '../Assets/images/bg-mobile-dark.jpg'
import mobileLight from '../Assets/images/bg-mobile-light.jpg'
import { ChanegeThemeContext } from './ThemeContext'

function ImageComp() {
    const [theme, setTheme] = useContext(ChanegeThemeContext)
    return (
        <>
            {
                theme ?
                    <div>
                        <Image src={desktopDark} alt="Dark Image" className="desktop" />
                        <Image src={mobileDark} alt="Dark Image" className="mobile" />
                    </div>
                    :
                    <div>
                        <Image src={desktopLight} alt="Light Image" className="desktop" />
                        <Image src={mobileLight} alt="Dark Image" className="mobile" />
                    </div>
            }
        </>
    )
}

export default ImageComp
