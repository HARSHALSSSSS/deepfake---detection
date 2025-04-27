import React from 'react'

const DocumentationPara = (prop) => {
  return (
    <div className='doc-para-container'>
      <p className='doc-sub-title'>{prop.title}</p>
      <p className='doc-sub-details'>{prop.details}</p>
    </div>
  )
}

export default DocumentationPara
