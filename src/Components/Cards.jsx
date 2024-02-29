import React from 'react'
import axios from 'axios'
import '../Stlyes/CardStyles.css'




const Cards = ({ children}) => {

  return (
    <div className='card_body'>
      {children}
    </div >
  )
}

export default Cards

