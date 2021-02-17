import React , {useState,useEffect,useRef} from 'react'
import axios from 'axios'

import styled from 'styled-components'

import StyledButton from '../../Button/Button'

const OuterDiv = styled.div`
    z-index:7;
`

const URLWrapper = styled.div`
    width:70%;
    margin: 4em 0 0 15em;
    height: 4em;
    padding: 2em;
    border-radius: 0.5em;
    ${'' /* height: 5rem */}
    background:url(${(props)=>props.imgUrl}),#3b3054;
    text-align:left;
`

const URLButton = styled(StyledButton)`
    border-radius: 0.5em;
    margin: 1em 1em;
    width:15%;
`

const URLInput = styled.input`
    width:70%;
    padding: 1em;
    color: #bfbfbf;
    font-weight: 700;
    border: ${(props)=>props.error===false ? "none":"#f46262 1px solid"};
    border-radius: 0.5em;
    outline: none;
    ::placeholder{
        color:${(props)=>props.error===false ? "#bfbfbf":"#f46262"};
    }
`

const ErrorText = styled.span`
    font-size: 1em;
    color:#f46262;
`

function UrlInput() {
    const [url,setUrl] = useState('')
    const[isSending,setIsSending] = useState(false)
    const [requestStatus,setRequestStatus] = useState({
        error: false,
        loading:false
    })
    let val = `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`
    const fetching = useRef(false)

    useEffect(()=>{
        setRequestStatus({
            error:false,
            loading:true
        })
        if(fetching.current){
        axios.get(val)
        .then(response => {
        // console.log(fetching)
            setUrl(response.data.result.short_link)
            console.log(response.data,isSending)
            fetching.current = false
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
        }
    },[isSending])

    const shortenUrl = ()=>{
        if(url===''){
            setRequestStatus({
                error:true,
                loading:false,
            })
            return;
        }
        console.log(fetching)
        fetching.current = true
        setIsSending(!isSending)
        
    }

    return (
        <OuterDiv>
        <URLWrapper imgUrl = {process.env.PUBLIC_URL + '/bg-shorten-desktop.svg'}>
                <URLInput error = {requestStatus.error} type = "url" value = {url} placeholder= "Shortern a link here ..." onChange = {(e)=>setUrl(e.target.value)}></URLInput>
                <URLButton long disabled = {false} onClick = {shortenUrl}>Shortern Url</URLButton>
                <br></br>
                {requestStatus.error?<ErrorText>Re-enter a correct url</ErrorText>:<span style = {{display:false}}></span>}
        </URLWrapper>
        </OuterDiv>
    )
}

export default UrlInput
