import React, { useRef } from 'react'
import Button from './Button'
import {Pencil, MapPin, Mail, Phone, Linkedin} from 'lucide-react'

const Preview = ({cvData, handlePreview}) => {

  const cvRef = useRef();

  return (
    <div className="flex-row w-[600px] shadow-lg bg-second  rounded-lg text-strong">
      <div className='flex justify-end items-center m-3'>
        <Button 
          onclick={handlePreview}
          icon={<Pencil size={20} />} 
          text={'Edit'}
        />
      </div>
      <div ref={cvRef}>
        <div className='flex w-full h-20 justify-center gap-3 items-center font-bold text-4xl bg-strong text-second'>
          <h1>{cvData.firstName}</h1>
          <h1>{cvData.lastName}</h1>
        </div>

        <div className='flex justify-center text-3xl mt-3 mb-10'>
          <h1>{cvData.jobTitle}</h1>
        </div>

        <h1 className='text-2xl m-3 font-bolds'>Biography</h1>

        <div className='flex justify-center m-3 mb-10'>
          <p>
            {cvData.bio}
          </p>
        </div>

        <h1 className='text-2xl m-3 font-bolds'>Contact Info & Address</h1>

        <div className='flex-row place-items-center m-3'>
          <span className='flex items-center gap-1 underline cursor-pointer mt-3'><MapPin size={20} /> {cvData.address}</span>
          <span className='flex items-center gap-1 underline cursor-pointer mt-3'><Mail size={20} /> {cvData.mail}</span>
          <span className='flex items-center gap-1 underline cursor-pointer mt-3'><Phone size={20} /> {cvData.phone}</span>
          <a href={cvData.linkedin} className='flex items-center gap-1 underline cursor-pointer mt-3'><Linkedin size={20} /> {cvData.linkedin}</a>
        </div>

        <h1 className='text-2xl m-3 font-bolds'>Education</h1>

        <div className='flex justify-start m-3'>
            <div className='flex-row'>
              <span className='font-bold text-xl'>{cvData.degree}</span>
              <br />
              <span className='font-bold text-xl underline'>{cvData.school}</span>
              <br />
              <span className='flex items-center gap-1 mt-3'><MapPin size={20} />{cvData.city1}</span>
            </div>
        </div>

        <h1 className='text-2xl m-3 font-bolds'>Experiance</h1>

        <div className='flex justify-start m-3'>
            <div className='flex-row'>
              <span className='font-bold text-xl'>{cvData.job}</span>
              <br />
              <span className='font-bold text-xl underline'>{cvData.company}</span>
              <br />
              <span className='flex items-center gap-1 mt-3'><MapPin size={20} />{cvData.city2}</span>
            </div>
        </div>

        <h1 className='text-2xl m-3 font-bolds'>Skills & Languages</h1>

        <div className='flex-row place-items-center'>
          <div className='flex justify-start m-3 gap-10 items-center'>
            <span className='font-bold text-xl'>Language:</span>
            <span className='font-bold underline text-xl'>{cvData.language}</span>
            <span className='font-bold text-xl'>Level:</span>
            <span className='font-thin underline'>{cvData.level}</span>
          </div>

          <h2 className='font-bold m-3 text-xl mt-10'>Skills</h2>

          <div className='flex justify-center m-3'>
            <p>
              {cvData.skills}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview