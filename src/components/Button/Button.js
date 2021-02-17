import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props=> props.white?"#fff":"#2acfcf"};
    color: ${props=>props.white?"#bfbfbf":"white"};
    border-radius: 2em;
    border: none;
    padding: 1em;
    margin: 1em 0em;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    width: ${props=> props.long?"10em":"7em"};
    &:active{
        filter:brightness(120%);
        border:none;
    }
`


export default StyledButton
