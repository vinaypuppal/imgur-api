/**
 *Create img detail component
**/

//Import react library
import React from 'react';

//Create component
const ImageDetail = (props)=>{
  const {title,link} = props.image;
  return (
    <li>
      <img src={link} />
      {title}
    </li>
  );
}

//Export component
export default ImageDetail;
