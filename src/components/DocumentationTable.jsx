import React from 'react';

const DocumentationTable = ({ title, listItems }) => {
  return (
    <div className='doc-list-container'>
      <p className="doc-sub-title">{title}</p>
      <ol className='doc-list'>
        {listItems.map((item, index) => (
          <li className='doc-list-items' key={index}><span>{item.title}  </span>{item.details}</li> 
        ))}
      </ol>
    </div>
  );
};

export default DocumentationTable;