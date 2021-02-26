import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import Button from '../Components/Button'
import Wrapper from '../Components/Wrapper'
import check from '../Assets/images/icon-check.svg'
import Image from '../Components/Image'
import deleteList from '../redux/Actions/Delete'
import { useDispatch } from 'react-redux'
import checkList from '../redux/Actions/Check'
import { ChanegeThemeContext } from './ThemeContext'
import { Draggable } from 'react-beautiful-dnd'
import cross from '../Assets/images/icon-cross.svg'

const Text = styled.p`
    font-size: 1rem;
    color: ${props => props.check ? props => props.themeColor ? 'hsl(236deg 33% 92% / 30%)' : 'hsl(233 14% 35% / 20%)' : props => props.themeColor ? 'hsl(236deg 33% 92% / 80%)' : 'hsl(233deg 38% 34% / 50%)'};
    text-decoration: ${props => props.check ? 'line-through' : 'none'};

`


function ListCard({ list, index }) {
    const [isChecked, setIsChecked] = useState(list.check)
    const dispatch = useDispatch()

    const [theme, setTheme] = useContext(ChanegeThemeContext)

    useEffect(() => {
        setIsChecked(list.check)
    }, [list.check])

    return (
        <Draggable draggableId={list.id} index={index} >
            {(provided, snapshot) => (
                <Card className="listCard" themeColor={theme} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging} >
                    <Wrapper className="btnText" >
                        <Button className="checkButton" onClick={() => dispatch(checkList(list.id))} isCheck={isChecked} >
                            <Image src={check} alt="checkbox" className="checkImage" isCheck={isChecked} />
                        </Button>
                        <Text themeColor={theme} check={isChecked}>
                            {list.todo}
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <Button className="delete" onClick={() => dispatch(deleteList(list.id))} >
                            <Image src={cross} alt="completed" className="cross" />
                        </Button>
                    </Wrapper>
                </Card>
            )}
        </Draggable>
    )
}

export default ListCard
