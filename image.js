import React from 'react'

function image({photo:image}) {
  return (
    <div>
   <img src={image} alt="photo" className='photo'></img>

    </div>
  )
}

export default image