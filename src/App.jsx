import React from 'react'
import CvForm from './components/CvForm'
import videoBg from './assets/videoBg.mp4'

const App = () => {
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
      <CvForm />
    </div>
  </div>
</div>

  )
}

export default App