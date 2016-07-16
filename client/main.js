//Any code here is automatically is executed for us

//import react library
import React from 'react';
import ReactDOM from 'react-dom';

//craete a App component
const App = ()=>{
  return(
    <h1>React App #1</h1>
  );
}

//render App component to screen
Meteor.startup(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
});
