import styled from "styled-components";


const Nav = styled.div`
display: flex;
flex-direction: row;
background: none;
color: white;
justify-content: space-between;
align-items: center;
margin-bottom: 5vh;

&.footer{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    color: ${props => props.themeColor ? 'hsl(236deg 33% 92% / 30%)' : 'hsl(233 14% 35% / 30%)'}  ;
}
`

export default Nav