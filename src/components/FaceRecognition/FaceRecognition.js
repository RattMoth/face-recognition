import React from 'react';

const FaceRecognition = ({ loadedImage }) => {
  if (loadedImage.length > 0) {
    return (
      <div>
        <img style={imageStyle} src={loadedImage} alt="loaded" />
      </div>
    );
  } else {
    return (
      <div>
        <p className="white f3">Image Will Display Here</p>
      </div>
    );
  }
};

const imageStyle = {
  maxWidth: '70%'
};

export default FaceRecognition;
