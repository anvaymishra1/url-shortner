import React from 'react'

import styled from 'styled-components'

import brandRecognition from '../../../assets/images/icon-brand-recognition.svg'
import detailedRecords from '../../../assets/images/icon-detailed-records.svg'
import fullyCustomizable from '../../../assets/images/icon-fully-customizable.svg'
import UrlInput from '../UrlInput/UrlInput'

const WrapperDiv = styled.div`
    margin: -3.5em 0 0 0em;
    z-index: -2;
    color:#9e9aa7;
    background-color:#bfbfbf;
    width: 100vw;
    padding: 0 0 5em 0;
    ${'' /* width: 80vw; */}
`
const HeadingWrapper = styled.div`
    padding: 7em 0 7em 0;
    ${'' /* margin: 4em 0em 0em 0; */}
`
const CardWrapper = styled.div`
    margin: 0 0 3em 15em;
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-column-gap: 4em;
    position:relative;
`
const DivTitle = styled.span`
    color: #3b3054;
    font-weight: 700;
    font-size:2em
`
const Content = styled.span`
    width: 25em;
    font-size: 1em;
    display: inline-block
`

const Cards = styled.div`
    margin: ${(props)=>{
        if(props.card1)
            return "0";
        else{
            if(props.card2)
            return "2rem 0 -2rem 0";
            else 
                if(props.card3)
                return "4rem 0 -4rem 0";
        }
    }}!important;
    border: 2px solid #fff;
    background-color: #fff;
    width: 100%;
    padding: 1em;
    text-align: left;
    margin:1em;
`
const StyledCard = styled(Cards)`
&::after{
        content: " h";
        width: 1.8rem; 
        height: 0.5rem; 
        /* background: 40px blue; */ 
        background-color: #2acfcf; 
        color: #2acfcf; 
        position: absolute;
        top:;  
        left:  ${(props)=>{
        if(props.card1)
            return "17rem";
        else{
            if(props.card2)
            return "35.8rem";
        }
    }}; 
        font-size: 2px;
    }
`



const CardImage = styled.div`
    background-color: #3b3054;
    border-radius:50%;
    width: 3.5em;
    height 3.5em;
    ${'' /* align-item:centre; */}
    margin: -3.5em 0em -3em 0em;
    padding: 0.5em 0.6em;
    text-align:center
`

const CardHeading = styled.span`
    display:inline-block;
    color: #3b3054;
    font-weight: 700;
    margin:3em 0 0 0;
    padding: 0 0 0.5em 0;
    font-size: 1.5em;
    ${'' /* text-align: left; */}
`
const CardContent = styled(Content)`
    width: 90%;
    font-size: 0.9em;
`


function AdvancedStats() {
    return (
        <WrapperDiv>
        <UrlInput></UrlInput>
            <HeadingWrapper>
            <DivTitle>Advanced Statistics</DivTitle>
            <br></br>
            <Content>Track how your links are performing accross the web with our advanced dashboard</Content>
            </HeadingWrapper>
            <CardWrapper>
            <StyledCard card1 className = "card1">
                <CardImage>
                <img src = {brandRecognition} alt = "brandRecognition"></img>
                </CardImage>
                <CardHeading>Brand Recognition</CardHeading>
                <CardContent>Boost your brand recognition with each click. Generate links don't mean a single thing. Branded links help instil confidence in your content.</CardContent>
            </StyledCard>
            <StyledCard card2 className = "card2">
                <CardImage>
                <img src = {detailedRecords} alt = "detailedRecords"></img>
                </CardImage>
                <CardHeading>Detailed Records</CardHeading>
                <CardContent>Boost your brand recognition with each click. Generate links don't mean a single thing. Branded links help instil confidence in your content.</CardContent>
            </StyledCard>
            <Cards card3>
                <CardImage>
                <img src = {fullyCustomizable} alt = "fullyCustomizable"></img>
                </CardImage>
                <CardHeading>Fully Customizable</CardHeading>
                <CardContent>Boost your brand recognition with each click. Generate links don't mean a single thing. Branded links help instil confidence in your content.</CardContent>
            </Cards>
            </CardWrapper>
        </WrapperDiv>
    )
}

export default AdvancedStats
