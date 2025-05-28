import React from 'react'

const Input = ({type, id, labelText, name, value, handleChange}) => {
  return (
    <div>
        <label htmlFor={id}>{labelText}</label> 
        <input type={type} id={id} name={name} value={value} onChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default Input
