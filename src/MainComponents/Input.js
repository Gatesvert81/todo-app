import React, { useContext, useState } from 'react'
import Card from '../Components/Card'
import CheckedBox from '../Components/CheckedBox'
import Wrapper from '../Components/Wrapper'
import Button from '../Components/Button'
import { useDispatch } from 'react-redux'
import addList from '../redux/Actions/Add'
import { ChanegeThemeContext } from './ThemeContext'


function Input() {
    const [change, setChange] = useState('')

    const [theme, setTheme] = useContext(ChanegeThemeContext)
  
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        setChange(event.target.value)

    }

    return (
        <Card className="inputCard" themeColor={theme} >
            <Wrapper className="inputBtn">
                <Button className="checkButton" >
                </Button>
                <CheckedBox type="text" value={change} onChange={(event) => handleChange(event)} themeColor={theme} placeholder="Create a new Todo" />
            </Wrapper>
            <Wrapper>
                <Button className="add" onClick={() => {
                    if (change.length > 0) {
                        dispatch(addList(change));
                        setChange('')
                    } else {
                        alert('Please Create A New Todo')
                    }
                }} >
                    +
                </Button>
            </Wrapper>
        </Card>
    )
}

export default Input
