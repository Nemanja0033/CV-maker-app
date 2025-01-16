import React from 'react'

const CvForm = () => {
  return (
    <div className="h-auto flex-row shadow-md bg-second">
        <h1 className='text-center font-bold text-2xl mb-5'>PERSONAL INFO</h1>
        <div className="md:flex flew-row justify-center gap-4 items-center mb-5 m-3">
            <label htmlFor="name">First Name</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="name" type="text" />
            <label htmlFor="surname">Last Name</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="surname" type="text" />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="phone">Phone</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="phone" type="text" />
            <label htmlFor="job">Job Title</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="job" type="text" />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="address">Address</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="address" type="text" />
        </div>
    </div>
  )
}

export default CvForm