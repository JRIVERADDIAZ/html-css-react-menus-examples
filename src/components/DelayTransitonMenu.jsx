import React from 'react'
import '../styles/delayTransitionMenu.css'

const DelayTransitonMenu = () => {
    return (
        <>
            <div className={'delay-transition-container'}>
                <ul className={'delay-transition'}>
                    <li>
                        <a href='#'>
                            <span>Home</span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>About</span>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Contact</span>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Location</span>
                            <span>Location</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Portfolio</span>
                            <span>Portfolio</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DelayTransitonMenu