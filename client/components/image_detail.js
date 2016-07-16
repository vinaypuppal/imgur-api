/**
 *Create img detail component
**/

//Import react library
import React from 'react';

//Create component
const ImageDetail = (props)=>{
  const {title,link} = props.image;
  return (
    <li className='image-detail'>
      <div className='image'>
        <img src={link} alt={title} />
      </div>
      <div className='details'>
        <h1>{title}</h1>
        <p className='no-desc'>
          No Description
        </p>
        <div className='meta'>
          <span>&hearts; Upvotes</span>
          <span>&#9785; Downvotes</span>
        </div>
      </div>
    </li>
  );
}

//Export component
export default ImageDetail;
