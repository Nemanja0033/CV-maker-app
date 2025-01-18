import React, { useState } from 'react'
import CvForm from './components/CvForm'
import videoBg from './assets/videoBg.mp4'
import Preview from './components/Preview';

const App = () => {

  const [isPreview, setIsPreview] = useState(false);
  const [cvData, setCvData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      jobTitle: '',
      address: '',
      degree: '',
      school: '',
      city1: '',
      job: '',
      company: '',
      city2: '',
      language: '',
      level: '',
    });
  

  const handlePreview = () => {
    setIsPreview(!isPreview);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(isPreview)

  return (
    <div className="relative h-screen w-full">
    <video 
      className="absolute top-0 left-0 w-full md:h-[680px] h-[1200px] object-cover z-0" 
      src={videoBg} 
      autoPlay 
      loop 
      muted
  ></video>
  <div className="relative z-10 flex justify-center">
    <div className="flex-row mt-10 rounded-lg">
      {
        isPreview ? (
          <Preview 
            cvData={cvData}
            handlePreview={handlePreview}
          />
        )
        :
        (
          <CvForm 
            handlePreview={handlePreview} 
            handleChange={handleChange}
            cvData={cvData}
          />
        )
      }
    </div>
  </div>
</div>

  )
}

export default App