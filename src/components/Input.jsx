import React from 'react'

const Input = ({name, onChange, value}) => {
  return (
    <input 
      value={value} 
      onChange={onChange} 
      className="w-full hover:opacity-90 hover:scale-105 transition-all rounded-lg md:h-6 h-9 bg-primary" 
      name={name} 
      type="text"
    />
  )
}

export default Input