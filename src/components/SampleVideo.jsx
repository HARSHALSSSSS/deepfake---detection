import React from 'react'
import sampleVideo from "../assets/sample.mp4"

const SampleVideo = () => {
  return (
    <div className='sample-video'>
      <video controls autoPlay muted loop>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default SampleVideo
