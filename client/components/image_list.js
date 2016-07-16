/**
 *Create img list component
**/

//Import react library
import React,{ Component } from 'react';

//Import axios library
import axios from 'axios';

//Import custom components
import ImageDetail from './image_detail';

//Dummy data
const IMAGES = [
  {title:'ABC',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=ABC'},
  {title:'CDE',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=CDE'},
  {title:'FGH',link:'http://dummyimage.com/200x200/cc2bcc/fff.png&text=FGH'}
]

//Create component
class ImageList extends Component{
  constructor(props){
    super(props);
    this.state={
      images:[],
      loading: true
    }
  }
  componentWillMount(){
    axios.get('https://api.imgur.com/3/gallery/random/random/0')
      .then(({data})=>{
        console.log(data.data);
        this.setState({
          images:data.data,
          loading: false
        });
      });
  }
  renderedImages(){
    return this.state.images.map((image)=>{
      return <ImageDetail image={image} key={image.title}/>
    });
  }
  render(){
    if(this.state.loading){
      return(
        <h1>Loading.....</h1>
      );
    }
    return (
      <ul className='image-list'>
        {this.renderedImages()}
      </ul>
    );
  }
}

//Export component
export default ImageList;
