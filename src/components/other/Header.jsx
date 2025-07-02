/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const username = props?.data?.firstName || 'User';



  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-medium' >Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span> </h1>
    <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm' >Log Out</button>
    </div>
  )
}

export default Header