// Image.js
import React from 'react';
import './Image.css';
// import 'ImageGallery.js';

const Image = ({ image, openModal }) => {
  return (
    <div className='image'>
        <img src={image} alt="gallery" onClick={openModal} />
    </div>
  );
};

export default Image;