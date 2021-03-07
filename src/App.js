import React, { Component } from 'react';
import video from './myVideo.mp4';
import image from './imageInSrc.jpg';

import './style.css';

class App extends Component {
  render() {
    const styles = {
      border: '1px solid rgba(0, 0, 0, 0.05)', 
 };
    return (

      <div className="App">
      
        <div style={styles}>
          <h1 className = 'title red'>Houssem Eddine Hammadi</h1>
          <br/>
          <img src={image} width="320" height="240"  />
          <br/>
          <img src="../imageInPublic.jpg" width="320" height="240"  />
        </div>
        <video width="320" height="240" controls >
        <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }   
}

export default App;
