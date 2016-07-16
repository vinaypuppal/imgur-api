/**
 *Create img list component
**/

//Import react library
import React from 'react';

//Import custom components
import ImageDetail from './image_detail';

//Create component
const ImageList = ()=>{
  return (
    <ul>
      <ImageDetail />
    </ul>
  );
}

//Export component
export default ImageList;
