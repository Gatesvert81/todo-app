import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 27vh;

  &.themeImage{
      width: 30px;
      height: auto;
  }

  &.checkImage{
    display: ${props => props.isCheck ? 'block' : 'none'} ;
    width: 10px;
    height: 10px;
  }

  &.cross{
    width: 15px;
    height: 15px;
  }

  &.themebtn{
    width: 20px;
    height: 20px;
  }

  &.desktop{
    display: none;
  }

  &.mobile{
    display: block;
    width: 100vw;
  }

  @media all and (min-width: 600px){
    &.desktop{
    display: block;
    width: 100vw;
  }

  &.mobile{
    display: none;
  }
  }
`

export default Image