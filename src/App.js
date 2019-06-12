import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin'
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
      loadedImage: '',
      box: {},
      route: 'sigin'
    };
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  onInputChange = event => {
    this.setState({ imageUrlInput: event.target.value });
  };

  onPicSubmit = event => {
    event.preventDefault();
    this.setState({ loadedImage: this.state.imageUrlInput });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrlInput)
      .then(response =>
        this.showBoundingBox(this.calculateFaceLocation(response))
      )
      .catch(error => console.log('what happened???', error));
  };

  showBoundingBox = boxData => {
    this.setState({ box: boxData });
  };

  onRouteChange = () => {

  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleStyle} />
        <Navigation />
        { this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <div>
            <Logo />
            <Rank />
            <ImageInputForm
              displayImage={this.onPicSubmit}
              inputChange={this.onInputChange}
            />
            <FaceRecognition
              box={this.state.box}
              loadedImage={this.state.loadedImage}
            />
          </div>
        }
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
