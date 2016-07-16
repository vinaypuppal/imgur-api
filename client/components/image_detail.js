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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
