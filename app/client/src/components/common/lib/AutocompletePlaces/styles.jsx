import Styled from 'styled-components'
import { Input as useInput } from '../Wrapper'

export const Item = Styled.div`
    padding: 10px;
    border-bottom: 1px solid #dbdbdb !important;
    border-left: 1px solid #dbdbdb !important;
    border-right: 1px solid #dbdbdb !important;
    color: #737272;
    font-size: 12px;
    cursor: pointer;
 
    &:hover{
        background: #f3f3f3 !important;
    }
    svg{
        color: #9E9E9E;
    }
`
export const BoxItems = Styled.div`

    transition: height 0.8s;
    -webkit-transition-timing-function: cubic-bezier(0.0,0.0,0.2,1);
    transition-timing-function: cubic-bezier(0.0,0.0,0.2,1);
    box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02);
    z-index: 9;
    position: absolute;
    width: 56%;

    @media (min-width: 1500px) and (max-width: 1700px) {
            width: 55%;

    }   
        @media (min-width: 1700px) {
            width: 59.35%;

    } 
   
`

export const Box =  Styled.div`

`
export const Container = Styled(Box)`
        
`
export const Loading = Styled(Item)`
   text-align: center;
   background: white !important;
`
export const Input = Styled(useInput)`

`