import React from 'react';

const ImageInputForm = ({ inputChange, displayImage }) => {
  return (
    <div>
      <p className="f4">
        Input a url linking to a photo and the face will be detected.
      </p>

      {/* Tachyons form */}
      <form onSubmit={displayImage} style={inputStyle} className="pa4 black-80">
        <div className="pa4 shadow-5 br2">
          <div className="center">
            <input
              onChange={inputChange}
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
            <button className="grow f6 link ba ph3 pv2 mb2 white" href="#0">
              Detect
            </button>
          </div>
          <small id="name-desc" className="white f6 black-60 db mb2">
            Make sure the url points directly to the image's source.
          </small>
        </div>
      </form>
      {/* Tachyons form end */}
    </div>
  );
};

const inputStyle = {
  maxWidth: '50vw',
  margin: 'auto'
};

// const backgroundPattern = {
//   background:
//     'linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),\nlinear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px',
//   backgroundColor: '#708090',
//   backgroundSize: '64px 128px'
// };
export default ImageInputForm;
