/**
 *Create img detail component
**/

//Import react library
import React from 'react';

//Create component
const ImageDetail = (props)=>{
  const {title,link,ups,downs,type} = props.image;
  const imgLink = type ? link : 'http://dummyimage.com/400x400/ccc/fff.png&text=no+img'
  return (
    <li className='image-detail'>
      <div className='image'>
        <img src={imgLink} alt={title} />
      </div>
      <div className='details'>
        <h1>{title}</h1>
        <div className='meta'>
          <span>&hearts; {ups}</span>
          <span>&#9785; {downs}</span>
        </div>
      </div>
    </li>
  );
}

//Export component
export default ImageDetail;
