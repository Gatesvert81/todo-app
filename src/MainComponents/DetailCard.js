import React, { useContext, useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Button from '../Components/Button'
import Card from '../Components/Card'
import Wrapper from '../Components/Wrapper'
import { clearCompletedList } from '../redux/Actions/Delete'
import { filterActiveList, filterAllList, filterCompletedList } from '../redux/Actions/Filter'
import { ChanegeThemeContext } from './ThemeContext'



function DetailCard() {
    const todoState = useSelector(state => state[0].todos)
    const [itemsLeft, setItemsLeft] = useState(todoState.length)

    const [theme, setTheme] = useContext(ChanegeThemeContext)

    const dispatch = useDispatch()
    useEffect(() => {
        setItemsLeft(todoState.length)
        
    }, [todoState.length])

    return (
        <>
            <Card className="detailCard" themeColor={theme} >
                <Wrapper themeColor={theme} className="itemsLeft" >
                    {itemsLeft} items left
            </Wrapper>
                <Wrapper className="desktopDetail" >
                    <Button onClick={() => dispatch(filterAllList())} className="detailButton" themeColor={theme} >
                        All
                    </Button>
                    <Button className="detailButton btnActive" onClick={() => dispatch(filterActiveList())} themeColor={theme} >
                        Active
                    </Button>
                    <Button className="detailButton " onClick={() => dispatch(filterCompletedList())} themeColor={theme} >
                        Completed
                    </Button>
                </Wrapper>
                <Wrapper>
                    <Button className="detailBtn" themeColor={theme} onClick={() => dispatch(clearCompletedList())}  >Clear Completed</Button>
                </Wrapper>
            </Card>
            <Card className="mobileDetail" themeColor={theme} >
                <Button onClick={() => dispatch(filterAllList())} className="detailButton" themeColor={theme} >
                    All
                    </Button>
                <Button className="detailButton btnActive " 
                onClick={() => dispatch(filterActiveList())} themeColor={theme} >
                    Active
                    </Button>
                <Button className="detailButton" onClick={() => dispatch(filterCompletedList())} themeColor={theme} >
                    Completed
                    </Button>
            </Card>
        </>
    )
}


export default DetailCard
