import React from 'react'
import styled from 'styled-components';


import logo from '../../assets/images/logo.svg'

const HeaderWrapper  = styled.div`
    color: red;
`;

function Header() {
    return (
        <HeaderWrapper>
            <img src = {logo} alt = "logo"></img>
            <span>Features</span>
            <span>Resources</span>
            <button>Login</button>
            <button>Sign-Up</button>
            </HeaderWrapper>
    )
}

export default Header
