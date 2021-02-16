import React from 'react'

import styled from 'styled-components'
import StyledButton from '../../Button/Button'

const Wrapper = styled.div`
    width:100%;
    padding: 1.5em;
    background:url(${(props)=>props.imgUrl}),#3b3054;
    text-align: center;
`

const BoostText = styled.span`
    color:white;
    font-size:2em;
    padding: 0.5em 0.5em 0 0.5em;
    font-weight: 700;
    display:inline-block;
`

function BoostLinks() {
    return (
        <Wrapper imgUrl = {process.env.PUBLIC_URL + '/bg-boost-desktop.svg'}>
            <BoostText>Boost your links today</BoostText>
            <br></br>
            <StyledButton long>Get Started</StyledButton>
        </Wrapper>
    )
}

export default BoostLinks
