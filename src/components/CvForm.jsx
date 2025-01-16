import React from 'react'

const CvForm = () => {
  return (
    <div className="flex-row shadow-lg bg-second rounded-lg">
        <h1 className='text-start font-bold text-2xl mb-5 ml-3'>PERSONAL INFO</h1>

        <div className="md:flex flew-row justify-center gap-4 items-center mb-5 m-3">
            <label htmlFor="name">First Name</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="name" type="text"/>
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

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3'>EDUCATION</h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="deggre">Deggre</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="deggre" type="text" />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="School/Uni">School/Uni</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="School/Uni" type="text" />
            <label htmlFor="City">City</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="City" type="text" />
        </div>

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3'>EXPERIENCES</h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Job Title">Job Title</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="Job Title" type="text" />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Company">Company</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="Company" type="text" />
            <label htmlFor="City">City</label>
            <input className="w-full rounded-lg md:h-6 h-9 bg-primary" name="City" type="text" />
        </div>
    </div>
  )
}

export default CvForm