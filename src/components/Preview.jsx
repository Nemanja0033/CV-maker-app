import React from 'react'

const Preview = ({cvData}) => {
  return (
    <div className="flex-row shadow-lg bg-second bg-opacity-35 backdrop-blur-sm rounded-lg text-strong">
      <div className='flex justify-center gap-3 items-center font-bold text-2xl bg-strong text-second'>
        <h1>{cvData.firstName}</h1>
        <h1>{cvData.lastName}</h1>
      </div>
    </div>
  )
}

export default Preview