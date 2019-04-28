import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
// Imported dependencies
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '767ef821cf0a4a4783f1c39e1248cae0'
});

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
    this.setState({ loadedImage: this.state.imageUrlInput });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrlInput)
      .then(
        function(response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function(err) {
          console.log(err);
        }
      );
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
