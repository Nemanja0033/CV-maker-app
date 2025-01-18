import React from 'react'

const Input = ({name, onChange}) => {
  return (
    <input onChange={onChange} className="w-full rounded-lg md:h-6 h-9 bg-primary" name={name} type="text"/>
  )
}

export default Input