import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import '../Header/Header.css'
export default function Header() {
  return (
    <div className='mainHeader'>
      <a href="#" className="logo"><FontAwesomeIcon icon={faRocket}/></a>
      <div className='menu'>
        <ul className='inLine'>
            <li><span>Home</span></li>
            <li><span>launches</span></li>
            <li><span>Rockets</span></li>
        </ul>
      </div>
   </div>
  )
}
