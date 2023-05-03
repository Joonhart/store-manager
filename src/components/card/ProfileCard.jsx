import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import hamburger from '../../assets/img/hamburger.jpg'

export default function ProfileCard() {
  return (
    <div className='m-4'>
      <div className='flex justify-between'>
        <p>리즈 델리</p>
        <p><GiHamburgerMenu /></p>
      </div>
      <img src={hamburger} alt="shop" className='m-4 my-8 rounded-full'/>
    </div>
  )
}
