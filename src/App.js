import React from 'react';
import './App.css'; 
import ControlElement from './ControlElement' ;
import './mystyle.scss'

class App extends React.Component{

  render(){
     return (
        <div className="mainContainer">
          <div className="titles">
            <h1 className="title">React To-Do App</h1>
            <h2 className="subtitle">Enhance Your Productivity</h2>
          </div>
          <ControlElement />
        </div>
  );
  }
 
}

export default App;
