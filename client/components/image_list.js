/**
 *Create img list component
**/

//Import react library
import React from 'react';

//Import custom components
import ImageDetail from './image_detail';

//Dummy data
const IMAGES = [
  {title:'ABC',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=ABC'},
  {title:'CDE',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=CDE'},
  {title:'FGH',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=FGH'}
]

//Create component
const ImageList = ()=>{
  const renderedImages = IMAGES.map((image)=>{
    return <ImageDetail />
  });

  return (
    <ul>
      {renderedImages}
    </ul>
  );
}

//Export component
export default ImageList;
