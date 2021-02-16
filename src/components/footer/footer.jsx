import React from 'react'

import styled from 'styled-components'

import logo from '../../assets/images/logo.svg'
import fb from '../../assets/images/icon-facebook.svg'
import tw from '../../assets/images/icon-twitter.svg'
import ig from '../../assets/images/icon-instagram.svg'
import pin from '../../assets/images/icon-pinterest.svg'
// import fb from '../.../assets/images/icon-facebook.svg'

const Wrapper = styled.div`
    background-color:#232127;
    color: white;
    width:100%;
    display: grid;
    height: 80%;
    padding: 2rem 0;
    grid-template-columns: 40% 10% 10% 10% 20%
`
const Logo = styled.img`
    margin:0 0 0 12em;
    filter:contrast(0%)
`

const Heading = styled.span`
    font-size:0.6em;
    font-weight: 700;
    display: inline-block;
`

const Content = styled.span`
    font-size:0.6em;
    display: inline-block;
`
const IconTray = styled.div`
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
`

const Icons = styled.img`
    height: 1em;
`

function Footer() {
    return (
        <Wrapper>
            <Logo src = {logo} alt = "logo"></Logo>
            <div>
                <Heading>Features</Heading>
                <br></br>
                <Content>Link Shortening</Content>
                <br></br>
                <Content>Branded Links</Content>
                <br></br>
                <Content>Analytics</Content>
            </div>
            <div>
                <Heading>Resources</Heading>
                <br></br>
                <Content>Blog</Content>
                <br></br>
                <Content>Developers</Content>
                <br></br>
                <Content>Support</Content>
            </div>
            <div>
                <Heading>Company</Heading>
                <br></br>
                <Content>About</Content>
                <br></br>
                <Content>Our Team</Content>
                <br></br>
                <Content>Careers</Content>
                <br></br>
                <Content>Contact</Content>
            </div>
            <IconTray>
                <Icons src = {fb} alt = "facebook"></Icons>
                <Icons src = {tw} alt = "twitter"></Icons>
                <Icons src = {pin} alt = "pintrest"></Icons>
                <Icons src = {ig} alt = "instagram"></Icons>
            </IconTray>
            
        </Wrapper>
    )
}

export default Footer
