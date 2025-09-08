import React from 'react'
import User from "../assets/Hands.png"
const NotFoundContact = () => {
  return (
    <div className='flex m-auto'>
        <img src={User}/>
        <h3 className='text-white text-2xl font-semibold'>Not Found</h3>
    </div>
  )
}

export default NotFoundContact