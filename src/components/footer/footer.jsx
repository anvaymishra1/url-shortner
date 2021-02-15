import React from 'react'

import logo from '../../assets/images/logo.svg'

function Footer() {
    return (
        <div>
            <img src = {logo} alt = "logo"></img>
                <div className = "Features-Col">
                    <span>Features</span>
                    <span>Link Shortening</span>
                    <span>Branded Links</span>
                    <span>Analytics</span>
                </div>
            <div className = "Resources-Col">
                <span>Resources</span>
                <span>Blog</span>
                <span>Developers</span>
                <span>Support</span>
            </div>
            <div className = "Company">
                <span>Company</span>
                <span>About</span>
                <span>Our Team</span>
                <span>Careers</span>
                <span>Contact</span>
            </div>
            <div className = "Social-Media-Icons">
                <div>Icon1</div>
                <div>Icon2</div>
                <div>Icon3</div>
                <div>Icon4</div>
            </div>
            
        </div>
    )
}

export default Footer
