import React from 'react'

const CvForm = () => {
  return (
    <div className="h-auto flex-row shadow-md text-primary">
        <h1 className='text-center font-bold text-2xl mb-5 text-primary'>Personal Informations</h1>
        <div className=" md:flex flew-row justify-center gap-4 items-center">
            <label htmlFor="name">First Name</label>
            <input className="w-full rounded-lg md:h-6 h-9 border" name="name" type="text" />
            <label htmlFor="surname">Last Name</label>
            <input className="w-full rounded-lg md:h-6 h-9 border" name="surname" type="text" />
        </div>
    </div>
  )
}

export default CvForm