import React from 'react'
import './Image.scss'

const Image = ({imgSrc}) => {
  return (
    <div className='img-wrapper'>
      <img src={imgSrc} alt={''}/>
    </div>
  )
}

export default Image
