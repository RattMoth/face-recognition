import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ loadedImage, box }) => {
  if (loadedImage.length > 0) {
    return (
      <div className="center">
        <div className="absolute mt2">
          <img
            id="inputImage"
            style={imageStyle}
            src={loadedImage}
            alt="Failed to load"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
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
  width: '500px',
  height: 'auto'
};

export default FaceRecognition;
