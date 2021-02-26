import styled from 'styled-components'

const CheckBox = styled.input`
    border: 1px hidden black;
    background: none;
    width: auto;
    height: 20px;
    color: ${props => props.themeColor ? 'hsl(236deg 33% 92% / 80%)' : 'hsl(233, 14%, 35%)' };
`



export default CheckBox
