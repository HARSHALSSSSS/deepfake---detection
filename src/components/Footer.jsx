import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <hr className='footer-line'/>
      <p>
        &copy; 2025 ElevateTrust.Ai. All rights reserved
        <Link to="https://elevatetrust.ai/privacy-policy" className='privacy-policy-url'> Privacy Policy </Link>
      </p>
    </div>
  )
}

export default Footer
