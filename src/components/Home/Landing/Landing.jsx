import React from 'react'
import styled from 'styled-components'

import working from '../../../assets/images/illustration-working.svg'

import StyledButton from '../../Button/Button'


const LandingWrapper = styled.div`
    margin:3rem 0 0 0rem;
    width:100%;
    display:grid;
    grid-template-columns: 60% 40%
`

const LandingDiv = styled.div`
    margin: 0rem 0 0 15rem;
    width: 90%;
    text-align:left;
`
const LargeText = styled.span`
    font-size:5rem;
    color:#3b3054;
    font-weight:700;
`
const SmallText = styled.span`
    color:#bfbfbf;
    font-weight:500;
    font-size:1.4rem;
`

const WorkingImage = styled.img`
    width:100%;
    margin: 0em 0em 0em 5em;
    ${'' /* float:right; */}
`



function Landing() {
    return (
        <LandingWrapper>
            <LandingDiv>
                <LargeText>More than just shorter links</LargeText>
                <br></br>
                <SmallText>Build your brand's recognition and get detailed</SmallText>
                <br></br>
                <SmallText>insights on how your links are performing</SmallText>
                <br></br>
                <StyledButton long>Get Started</StyledButton>
            </LandingDiv>
            <div>
            <WorkingImage src = {working} alt = "deskjob-image"></WorkingImage>
            </div>
        </LandingWrapper>
    )
}

export default Landing
