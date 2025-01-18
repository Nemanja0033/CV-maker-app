import React from 'react'
import Button from './Button'
import {Pencil} from 'lucide-react'

const Preview = ({cvData, handlePreview}) => {
  return (
    <div className="flex-row w-[700px] shadow-lg bg-second  rounded-lg text-strong">
      <div className='flex justify-end items-center m-3'>
        <Button 
          onclick={handlePreview}
          icon={<Pencil size={20} />} 
          text={'Edit'}
        />
      </div>
      <div className='flex w-full h-20 justify-center gap-3 items-center font-bold text-4xl bg-strong text-second'>
        <h1>{cvData.firstName}</h1>
        <h1>{cvData.lastName}</h1>
      </div>

      <div className='flex justify-center text-2xl mb-12'>
        <h1>{cvData.jobTitle}</h1>
      </div>

      <div className='flex justify-center gap-64'>
        <div className='flex-row place-items-center'>
          <h1 className='font-bold text-2xl mb-3'>Education</h1>
          <span>{cvData.degree}</span>
          <br />
          <span>{cvData.school}</span>
          <br />
          <span>{cvData.city1}</span>
        </div>
        
        <div className='flex-row place-items-center'>
          <h1 className='font-bold text-2xl mb-3'>Experiance</h1>
          <span>{cvData.job}</span>
          <br />
          <span>{cvData.company}</span>
          <br />
          <span>{cvData.city2}</span>
        </div>
      </div>
    </div>
  )
}

export default Preview