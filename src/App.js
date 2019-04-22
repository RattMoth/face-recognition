import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageInputForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
