import React, { useEffect, useState } from 'react';
import Input from './Input';
import { CircleUser, GraduationCap, BriefcaseBusiness, Eye, User } from 'lucide-react';
import Button from './Button';

const CvForm = ({handlePreview, handleChange, cvData}) => {

  return (
    <div className="flex-row shadow-lg bg-second bg-opacity-35 backdrop-blur-sm rounded-lg text-second">
      <div className="flex items-center justify-between m-3">
        <span className="text-start font-bold text-strong text-2xl mb-5 ml-3 flex items-center gap-2">
          PERSONAL INFO <CircleUser />
        </span>
        <Button onclick={handlePreview} text={'Preview'} icon={<Eye size={20} />} />
      </div>
      <div className="md:flex flew-row justify-center gap-4 items-center mb-5 m-3">
        <label htmlFor="firstName">First Name</label>
        <Input
          name="firstName"
          value={cvData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <Input
          name="lastName"
          value={cvData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="phone">Phone</label>
        <Input
          name="phone"
          value={cvData.phone}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Job Title</label>
        <Input
          name="jobTitle"
          value={cvData.jobTitle}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="address">Address</label>
        <Input
          name="address"
          value={cvData.address}
          onChange={handleChange}
        />
      </div>

      <h1 className="text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center text-strong gap-2">
        EDUCATION <GraduationCap />
      </h1>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="degree">Degree</label>
        <Input
          name="degree"
          value={cvData.degree}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="school">School/Uni</label>
        <Input
          name="school"
          value={cvData.school}
          onChange={handleChange}
        />
        <label htmlFor="city1">City</label>
        <Input
          name="city1"
          value={cvData.city1}
          onChange={handleChange}
        />
      </div>

      <h1 className="text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center text-strong gap-2">
        EXPERIENCES <BriefcaseBusiness />
      </h1>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="job">Job Title</label>
        <Input
          name="job"
          value={cvData.job}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="company">Company</label>
        <Input
          name="company"
          value={cvData.company}
          onChange={handleChange}
        />
        <label htmlFor="city2">City</label>
        <Input
          name="city2"
          value={cvData.city2}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <label htmlFor="language">Language</label>
        <Input
          name="language"
          value={cvData.language}
          onChange={handleChange}
        />
        <label htmlFor="level">Level</label>
        <Input
          name="level"
          value={cvData.level}
          onChange={handleChange}
        />
      </div>

      <h1 className="text-start font-bold text-2xl mt-12 mb-5 ml-3 flex items-center text-strong gap-2">
        Biography <User />
      </h1>

      <div className="md:flex flew-row justify-center gap-4 items-center m-3">
        <textarea 
          className="w-full rounded-lg md:h-6 min-h-20 bg-primary" 
          name='bio' 
          placeholder='Tell something about you. . .'
          />
      </div>
    </div>
  );
};

export default CvForm;
