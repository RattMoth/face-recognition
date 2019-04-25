import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrlInput: '',
      loadedImage: ''
    };
  }

  onInputChange = event => {
    this.setState({ imageUrlInput: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.imageUrlInput.length === 0) {
      alert('Please enter a URL');
    } else {
      this.setState({ loadedImage: this.state.imageUrlInput });
    }
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleStyle} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm
          displayImage={this.onSubmit}
          inputChange={this.onInputChange}
        />
        <FaceRecognition loadedImage={this.state.loadedImage} />
      </div>
    );
  }
}

const particleStyle = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

export default App;
