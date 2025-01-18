import React, { useState } from 'react'
import CvForm from './components/CvForm'
import videoBg from './assets/videoBg.mp4'
import Preview from './components/Preview';

const App = () => {

  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = () => {
    setIsPreview(true);
  }

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
          <Preview />
        )
        :
        (
          <CvForm handlePreview={handlePreview} />
        )
      }
    </div>
  </div>
</div>

  )
}

export default App