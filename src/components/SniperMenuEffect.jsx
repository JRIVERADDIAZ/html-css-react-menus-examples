import React from 'react'
import '../styles/sniperMenuEffect.css'

const SniperMenuEffect = () => {
    return (
        <>
            <div className="sniper-menu-effect-container">
                <ul className={"sniper-menu-effect"}>
                    <li> <a href="#">Home
                        <span></span>
                        <span></span>
                    </a> </li>
                    <li> <a href="#">About
                        <span></span>
                        <span></span>
                    </a> </li>
                    <li> <a href="#">Contact
                        <span></span>
                        <span></span>
                    </a> </li>
                    <li> <a href="#">Team
                        <span></span>
                        <span></span>
                    </a> </li>
                    <li> <a href="#">Location
                        <span></span>
                        <span></span>
                    </a> </li>
                </ul>
            </div>
        </>
    )
}

export default SniperMenuEffect