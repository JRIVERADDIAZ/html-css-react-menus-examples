import React from 'react'
import '../styles/layeredColorMenu.css'

const LayeredColorMenu = () => {
  return (
    <>
     <div className={'layered-color-menu-container'}>
     <ul className={'layered-color-menu'}>
         <li><a href='#' data-text='Home'>Home</a></li>
         <li><a href='#' data-text='About'>About</a></li>
         <li><a href='#' data-text='Contact'>Contact</a></li>
         <li><a href='#' data-text='Team'>Team</a></li>
         <li><a href='#' data-text='Location'>Location</a></li>
     </ul>
     </div>    
    </>
  )
}

export default LayeredColorMenu