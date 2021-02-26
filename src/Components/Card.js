import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    width: 95%;
    background: ${props => props.themeColor ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)' } ;
    height: 50px;
    color: ${props => props.themeColor ? 'white' : 'black' };

    &.listCard{
        display: flex;
        justify-content: space-between;
        background: ${props => props.isDragging ? 'hsl(235, 24%, 69%)' : props => props.themeColor ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)' } ;
        margin-bottom: 0.08em;
        transition: 0.2s ease ;
        width: auto;
    }

    &.inputCard{
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        margin-bottom: 3vh;
        width: auto;
    } 

    &.detailCard{
        border-radius: 0px 0px 8px 8px;
        justify-content: space-between;
        width: auto;
    }

    &.mobileDetail{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        border-radius: 8px;
        width: auto;
    }

    @media all and (min-width: 600px) {
        &.mobileDetail{
        display: none;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        border-radius: 8px;
        width: auto;
    }
    }
`



export default Card
