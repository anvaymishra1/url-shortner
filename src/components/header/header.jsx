import React from 'react'
import styled from 'styled-components';


import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button';

const HeaderWrapper  = styled.div`
    padding: 1em;
    color:#bfbfbf;
    margin: 0 4em 0 0;
    width: 90%;
    align-items:left;
    overflow:hidden;
    text-align:left
`;

const TextWrapper = styled.div`
    margin: 0em 15em ;
    width: 50%;
`

const Text = styled.span`
    padding: 0em 1em;
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        color:#232127
    }
`
const Logo = styled.img`
    padding: 0em 0.5em;
    height: 2em;
    width:6em;
    float:left; 
    margin:0em 0em 0em 14em; 
`
const HeaderButton = styled(Button)`
    float:right;
    ${'' /* left:2em; */}
    padding: 0.5em;
    font-size: 0.9em;
    margin: -1em 1em 0em -1em;
`

function Header() {
    return (
        <HeaderWrapper>
            <Logo src = {logo} alt = "logo"></Logo>
            <TextWrapper>
            <Text>Features</Text>
            <Text>Pricing</Text>
            <Text>Resources</Text>
            </TextWrapper>
            <HeaderButton>Sign-Up</HeaderButton>
            <HeaderButton white>Login</HeaderButton>
            </HeaderWrapper>
    )
}

export default Header
