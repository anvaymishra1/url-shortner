import React from 'react'
import AdvancedStats from './AdvancedStats/AdvancedStats'
import BoostLinks from './BoostLinks/BoostLinks'
import Landing from './Landing/Landing'
import UrlInput from './UrlInput/UrlInput'

function Home() {
    return (
        <div>
            <Landing></Landing>
            {/* <UrlInput></UrlInput> */}
            <AdvancedStats></AdvancedStats>
            <BoostLinks></BoostLinks>
        </div>
    )
}

export default Home
