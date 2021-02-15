import React from 'react'

import brandRecognition from '../../../assets/images/icon-brand-recognition.svg'
import detailedRecords from '../../../assets/images/icon-detailed-records.svg'
import fullyCustomizable from '../../../assets/images/icon-fully-customizable.svg'

function AdvancedStats() {
    return (
        <div>
            <span>Advanced Statistics</span>
            <span>Track how your links are performing accross the web with our advanced dashboard</span>
            <div className = "cards">
                <img src = {brandRecognition} alt = "brandRecognition"></img>
                <span>Card Heading</span>
                <span>Boost your brand recognition with each click. Generate links don't mean a single thing. Branded links help instil confidence in your content.</span>
            </div>
        </div>
    )
}

export default AdvancedStats
