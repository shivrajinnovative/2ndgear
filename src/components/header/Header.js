import React from 'react'
import './Header.css'
import rightArrow from './righDoubleArrow.svg'
export default function Header() {
  return (
    <header>
        Home <img src={rightArrow} alt={rightArrow} />
    </header>
  )
}
