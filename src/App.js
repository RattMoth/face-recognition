import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
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
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: '',
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(console.log)
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined,
    }})
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
    .then((response) => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          this.showBoundingBox(this.calculateFaceLocation(response))
        }
      })
      .catch(error => {
         console.log(error.status, error.statusText);
         alert('A problem occured when Clarifai attempted to analyze the photo. Is the url a direct link to a clearly displayed face?')
      });
  };

  showBoundingBox = boxData => {
    this.setState({ box: boxData });
  };

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleStyle} />
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        { this.state.route === 'home'
          ? <div>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageInputForm
            displayImage={this.onPicSubmit}
            inputChange={this.onInputChange}
          />
          <FaceRecognition
            box={this.state.box}
            loadedImage={this.state.loadedImage}
          />
        </div>
          : (
            this.state.route === 'signin'
            ? <Signin  loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
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
