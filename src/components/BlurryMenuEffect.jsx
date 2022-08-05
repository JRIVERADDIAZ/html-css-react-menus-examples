import React from 'react'
import '../styles/blurryMenuEffect.css'
const BlurryMenuEffect = () => {
    return (
        <>
            <div className={'blurry-effect-container'}>
                <ul  className={'blurry-effect'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Location</a></li>
                    <li><a href='#'>Portfolio</a></li>
                </ul>
            </div>

        </>
    )
}

export default BlurryMenuEffect