import styled from 'styled-components'

const Button = styled.button`
    border: hidden;
    width: fit-content;
    height: auto;
    background: none;
    color: ${props => props.themeColor ? 'hsl(236deg 33% 92% / 55%)' : 'hsl(233 11% 84% / 55%)' };
    font-family: Josefin Sans;

    &.checkButton{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid hsl(236deg 33% 92% / 14%) ;
        width: 24px;
        height: 24px;
        margin-right: 15px;
        border-radius: 12px;
        background: ${props => props.isCheck ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'none' }  ;
    }

    &.add{
        margin-right: 20px;
        font-size: 1.5rem;
        font-weight: 100;
    }

    &.delete{
        margin-right: 25px;
        font-size: 1rem;
        font-weight: 100;
    }

    &.detailButton{
        transition: 0.5s ;
        font-size: 1rem;
        font-weight: 400;
    }

    &.btnActive{
        margin: 0px 20px;
    }

    &.detailButton:hover{
        color: hsl(220, 98%, 61%) ;
        transform: scale(1.1)
    }

    &.detailBtn{
        margin-right: 20px;
        transition: 0.5s ;
        font-size: 0.8rem;
        font-weight: 400;
    }

    &.detailBtn:hover{
        color: hsl(220, 98%, 61%) ;
        transform: scale(1.1)
    }
`

export default Button
