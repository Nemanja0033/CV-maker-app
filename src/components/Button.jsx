import React from 'react'

const Button = ({text, onclick, icon}) => {
  return (
    <button 
      onClick={onclick} 
      className='w-auto h-8 rounded-lg text-second bg-strong hover:opacity-90 hover:scale-105 transition-all m-1 flex items-center gap-2'>
        {text}
        {icon}
    </button>
  )
}

export default Button