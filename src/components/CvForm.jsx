import React, { useState } from 'react'
import Input from './Input'
import { CircleUser, GraduationCap, BriefcaseBusiness, Eye } from 'lucide-react'
import Button from './Button'

const CvForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [address, setAddress] = useState('');
    const [deggre, setDeggre ] = useState('');
    const [school, setSchool] = useState('');
    const [jobTitle2, setJobTitle2] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [city2, setCity2] = useState('');
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');


  return (
    <div className="flex-row shadow-lg bg-second bg-opacity-35 backdrop-blur-sm rounded-lg text-second">
       <div className='flex items-center justify-between m-3'>
            <span className='text-start font-bold text-strong text-2xl mb-5 ml-3 flex items-center gap-2'>PERSONAL INFO<CircleUser /></span>
            <Button text={'Preview'} icon={<Eye size={20} />} />
       </div>

        <div className="md:flex flew-row justify-center gap-4 items-center mb-5 m-3">
            <label htmlFor="name">First Name</label>
            <Input onchange={(e) => setFirstName(e.target.value)} name={'name'} />
            <label htmlFor="surname">Last Name</label>
            <Input  onchange={(e) => setLastName(e.target.value)} name={'surname'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="phone">Phone</label>
            <Input  onchange={(e) => setPhone(e.target.value)} name={'phone'} />
            <label htmlFor="job">Job Title</label>
            <Input  onchange={(e) => setJobTitle(e.target.value)} name={'job'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="address">Address</label>
            <Input  onchange={(e) => setAddress(e.target.value)} name={'address'} />
        </div>

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center  text-strong gap-2'>EDUCATION <GraduationCap /></h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="deggre">Deggre</label>
            <Input  onchange={(e) => setDeggre(e.target.value)} name={'deggre'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="School/Uni">School/Uni</label>
            <Input  onchange={(e) => setSchool(e.target.value)} name={'School/Uni'} />
            <label htmlFor="City">City</label>
            <Input  onchange={(e) => setCity(e.target.value)} name={'City'} />
        </div>

        <h1 className='text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center  text-strong gap-2'>EXPERIENCES <BriefcaseBusiness /></h1>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Job Title">Job Title</label>
            <Input  onchange={(e) => setJobTitle2(e.target.value)} name={'Job Title'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Company">Company</label>
            <Input onchange={(e) => setCompany(e.target.value)} name={'Company'} />
            <label htmlFor="City">City</label>
            <Input  onchange={(e) => setCity2(e.target.value)} name={'City'} />
        </div>

        <div className="md:flex flew-row justify-center gap-4 items-center m-3">
            <label htmlFor="Language">Language</label>
            <Input  onchange={(e) => setLanguage(e.target.value)} name={'Language'} />
            <label htmlFor="level">Level</label>
            <Input  onchange={(e) => setLevel(e.target.value)} name={'level'} />
        </div>
    </div>
  )
}

export default CvForm