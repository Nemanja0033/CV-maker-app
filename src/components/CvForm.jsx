import React from 'react'
import Input from './Input'
import { CircleUser, GraduationCap, BriefcaseBusiness } from 'lucide-react'
import Button from './Button'

const CvForm = () => {
  return (
    <div className="flex-row shadow-lg bg-second bg-opacity-35 backdrop-blur-sm rounded-lg text-second">
       <div className='flex items-center justify-between m-3'>
            <span className='text-start font-bold text-strong text-2xl mb-5 ml-3 flex items-center gap-2'>PERSONAL INFO<CircleUser /></span>
            <Button text={'Preview'} />
       </div>

        <div className="md:flex flew-row justify-center gap-4 items-center mb-5 m-3">
            <label htmlFor="name">First Name</label>
            <Input name={'name'} />
            <label htmlFor="surname">Last Name</label>
            <Input name={'surname'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="phone">Phone</label>
            <Input name={'phone'} />
            <label htmlFor="job">Job Title</label>
            <Input name={'job'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="address">Address</label>
            <Input name={'address'} />
        </div>

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center  text-strong gap-2'>EDUCATION <GraduationCap /></h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="deggre">Deggre</label>
            <Input name={'deggre'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="School/Uni">School/Uni</label>
            <Input name={'School/Uni'} />
            <label htmlFor="City">City</label>
            <Input name={'City'} />
        </div>

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center  text-strong gap-2'>EXPERIENCES <BriefcaseBusiness /></h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Job Title">Job Title</label>
            <Input name={'Job Title'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Company">Company</label>
            <Input name={'Company'} />
            <label htmlFor="City">City</label>
            <Input name={'City'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Language">Language</label>
            <Input name={'Language'} />
            <label htmlFor="level">Level</label>
            <Input name={'level'} />
        </div>
    </div>
  )
}

export default CvForm