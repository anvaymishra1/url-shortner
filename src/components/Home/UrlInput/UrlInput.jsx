import React , {useState,useEffect} from 'react'
import axios from 'axios'


function UrlInput() {
    const [url,setUrl] = useState('https://anvaymishra.in/')
    const[isSending,setIsSending] = useState(false)
    let val = `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`
    

    useEffect(()=>{
        axios.get(val)
    .then(response => {
        setUrl(response.data.result.short_link)
        console.log(response.data,isSending)
    })
    },[isSending])

    const shortenUrl = ()=>{
        setIsSending(!isSending)
    }

    return (
        <div>
            <div className = "Wrapper-div">
                <input type = "url" value = {url} placeholder= "Shortern a link here ..." onChange = {(e)=>setUrl(e.target.value)}></input>
                <button  onClick = {shortenUrl}>Shortern Url</button>
            </div>
        </div>
    )
}

export default UrlInput
