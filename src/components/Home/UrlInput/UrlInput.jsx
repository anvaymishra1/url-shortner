import React , {useState,useEffect} from 'react'
import axios from 'axios'

import styled from 'styled-components'

import background from '../../../assets/images/bg-shorten-desktop.svg'
import StyledButton from '../../Button/Button'

const URLWrapper = styled.div`
    width:80%;
    z-index:2.0;
    margin: 4em 0 0 15em;
    height: 2em
    ${'' /* height: 5rem */}
    background-image: url(${background}) repeat;
`

const URLButton = styled(StyledButton)`
    border-radius: 0.5em;
    margin: 0em 1em
`

const URLInput = styled.input`
    width:60%;
    padding: 0.5em;
    color: #bfbfbf;
    font-weight: 700;
`

function UrlInput() {
    const [url,setUrl] = useState('')
    const[isSending,setIsSending] = useState(false)
    const [requestStatus,setRequestStatus] = useState({
        error: false,
        loading:false
    })
    let val = `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`
    let fetching = false

    useEffect(()=>{
        setRequestStatus({
            error:false,
            loading:true
        })
        axios.get(val)
    .then(response => {
        // console.log(fetching)
        setUrl(response.data.result.short_link)
        console.log(response.data,isSending)
        fetching = false
        setRequestStatus({
            error:false,
            loading:false
        })
        console.log(fetching)
    }).catch(()=>{
        setRequestStatus({
            error:true,
            loading:false
        })
        console.log("error found")
    })
    },[isSending])

    const shortenUrl = ()=>{
        // fetching = true
        setIsSending(!isSending)
    }

    return (
        <URLWrapper>
                <URLInput type = "url" value = {url} placeholder= "Shortern a link here ..." onChange = {(e)=>setUrl(e.target.value)}></URLInput>
                {/* {requestStatus.error?<span>Re-enter a correct url</span>:<span style = {{display:false}}></span>} */}
                <URLButton long disabled = {requestStatus.loading} onClick = {shortenUrl}>Shortern Url</URLButton>
        </URLWrapper>
    )
}

export default UrlInput
