import React from 'react'
import '../Styles/Header.css'

const Header = ({title}) => {
  return (
    <div className='header'>
     <h1>{title}</h1>
    </div>
  )
}

export default Header
