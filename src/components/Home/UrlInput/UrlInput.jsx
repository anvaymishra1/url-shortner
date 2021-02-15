import React , {useState,useEffect} from 'react'
import axios from 'axios'


function UrlInput() {
    const [url,setUrl] = useState('https://anvaymishra.in/')
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
        <div>
            <div className = "Wrapper-div">
                <input type = "url" value = {url} placeholder= "Shortern a link here ..." onChange = {(e)=>setUrl(e.target.value)}></input>
                {requestStatus.error?<span>Re-enter a correct url</span>:<span style = {{display:false}}></span>}
                <button  disabled = {requestStatus.loading} onClick = {shortenUrl}>Shortern Url</button>
            </div>
        </div>
    )
}

export default UrlInput
