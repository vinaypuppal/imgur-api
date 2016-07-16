//Any code here is automatically is executed for us

//import react library
import React from 'react';
import ReactDOM from 'react-dom';

//import components
import ImageList from './components/image_list';

//craete a App component
const App = ()=>{
  return(
    <div>
      <h1>Imgur API</h1>
      <ImageList />
      <footer>
        <p>Made with &hearts; By VinayPuppal</p>
      </footer>
    </div>
  );
}

//render App component to screen
Meteor.startup(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
});
