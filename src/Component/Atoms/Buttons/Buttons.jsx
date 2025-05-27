import React from 'react'

const Buttons = ({handleClick, label, styleProps}) => {
  return (
    <button type='button' onClick={handleClick} className={styleProps}>
      {label}
    </button>
  )
}

export default Buttons
