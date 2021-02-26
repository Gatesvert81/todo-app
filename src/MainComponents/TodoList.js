import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { connect, useDispatch, useSelector } from 'react-redux'
import Wrapper from '../Components/Wrapper'
import handleOnDrag from '../redux/Actions/OnDrag'
import DetailCard from './DetailCard'
import ListCard from './ListCard'
import { ChanegeThemeContext } from './ThemeContext'

function TodoList({mapState}) {
    let todoState = useSelector(state => state)
    const dispatch = useDispatch()
    const [todoList, setTodoList] = useState(todoState)

    const [theme, setTheme] = useContext(ChanegeThemeContext)

    function handleOnDragEnd(result) {
        dispatch(handleOnDrag(result))
    }
    
    return (
        <DragDropContext onDragEnd={handleOnDragEnd} >
            <Droppable droppableId="todolist" >
                {(provided) => (
                    <Wrapper className="todoList" themeColor={theme}
                        {...provided.droppableProps} ref={provided.innerRef} >
                        {mapState.map((todo, index) => {
                            return <ListCard key={todo.id} list={todo} index={index} />
                        })}
                        {provided.placeholder}
                    </Wrapper>
                )}
            </Droppable>
        </DragDropContext>


    )
}


function mapStateToProps(state) {
    return {
        mapState: state[0].todos
    }
    
    
}

export default  connect(mapStateToProps)(TodoList)
