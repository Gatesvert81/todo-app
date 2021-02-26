import React from 'react'
import Wrapper from '../Components/Wrapper'
import DetailCard from './DetailCard'
import Footer from './Footer'
import Input from './Input'
import Navigation from './Navigation'
import TodoList from './TodoList'


function Home() {
    return (
        <Wrapper className="home" >
            <Navigation/>

            <Input />

            <TodoList />

            <DetailCard/>

            <Footer />
        </Wrapper>
    )
}

export default Home
