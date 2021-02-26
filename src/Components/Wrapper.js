import styled from 'styled-components'

const Wrapper = styled.div`
    color: ${props => props.themeColor ? 'white' : 'black' } ;

    &.home{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0vh;
        left: 5vw;
        right: 5vw;
        align-self: center;
        justify-self: center;
        padding-top: 5vh;
        overflow-x: hidden;
        border: 1px hidden green;
        width: auto;
    }

    &.inputBtn{
        display: inline-flex;

    }

    &.appTheme{
        display: flex;
        width: 100%;
        height: 100vmax;
        background: ${props => props.themeColor ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)' };
    }

    &.todoList{
        border: 1px hidden ;
        border-radius: 8px 8px 0px 0px;
        background: ${props => props.themeColor ? 'hsl(236deg 33% 92% / 14%)' : 'hsl(233 11% 84% / 55%)' };
        overflow: hidden;
        width: auto;
    }

    &.btnText{
        display: inline-flex;
        align-items: center;
    }

    &.desktopDetail{
        display: none;
    }

    &.itemsLeft{
        color: ${props => props.themeColor ? 'hsl(236deg 33% 92% / 55%)' : 'hsl(233 11% 84% / 55%)' };
        font-size: 0.75rem;
    }

    &.footer{
        align-self: flex-end;
    }

    @media all and (min-width: 600px) {
        &.home{
        top: 0vh;
        left: 25vw;
        right: 20vw;
        align-self: center;
        justify-self: center;
        width: auto;
    }

    &.desktopDetail{
        display: block;
    }
    }
    

`

export default Wrapper