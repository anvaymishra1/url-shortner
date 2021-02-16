import React , {useState,useEffect} from 'react'
import axios from 'axios'

import styled from 'styled-components'

import background from '../../../assets/images/bg-shorten-desktop.svg'
import StyledButton from '../../Button/Button'

const OuterDiv = styled.div`
    z-index:4.0;
`

const URLWrapper = styled.div`
    width:70%;
    margin: 4em 0 0 15em;
    height: 4em;
    padding: 2em;
    border-radius: 0.5em;
    ${'' /* height: 5rem */}
    background:url(${(props)=>props.imgUrl}),#3b3054;;
`

const URLButton = styled(StyledButton)`
    border-radius: 0.5em;
    margin: 1em 1em;
`

const URLInput = styled.input`
    width:75%;
    padding: 1em;
    color: #bfbfbf;
    font-weight: 700;
    border: none;
    border-radius: 0.5em;
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
        <OuterDiv>
        <URLWrapper imgUrl = {process.env.PUBLIC_URL + '/bg-shorten-desktop.svg'}>
                <URLInput type = "url" value = {url} placeholder= "Shortern a link here ..." onChange = {(e)=>setUrl(e.target.value)}></URLInput>
                {/* {requestStatus.error?<span>Re-enter a correct url</span>:<span style = {{display:false}}></span>} */}
                <URLButton long disabled = {requestStatus.loading} onClick = {shortenUrl}>Shortern Url</URLButton>
        </URLWrapper>
        </OuterDiv>
    )
}

export default UrlInput
