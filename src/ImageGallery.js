// ImageGallery.js
import React from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';


const images = [/* Add your image URLs here */
    'https://fastly.picsum.photos/id/421/500/500.jpg?hmac=5R2cYtYmW8bc3oqsYoUg87NQyIgf_0c7I6htlwkeI0g',
    'https://fastly.picsum.photos/id/0/500/500.jpg?hmac=GxFxxOH5UMJ_PdDE2Yn6uUIaPjoc_UEOUOYzwFiTxMw',
    'https://fastly.picsum.photos/id/564/500/500.jpg?hmac=wNu2zBg65XCsnTiRyfsi92ySd5dOKXGZ1bJIPpNH_-M',
    'https://fastly.picsum.photos/id/227/500/500.jpg?hmac=j9GOj3-oA4k31VvKk90eFsKv1vepBxWDyrdlHlBTp2c',
    'https://fastly.picsum.photos/id/450/500/500.jpg?hmac=VakQYBXGYGjgEJoRjccCDYhFG1Ep7RNYVDg8bSUgric',
    'https://fastly.picsum.photos/id/909/500/500.jpg?hmac=jfS9jLCYVgHM_3hZgM2DtS5ukZ0M8Juan_rku8N4OEE',
    'https://fastly.picsum.photos/id/366/500/500.jpg?hmac=3FtB6nxy3ATkMs4gGDZs80_JrjH8CqVrN63TR9ZtmTo',
    'https://fastly.picsum.photos/id/598/500/500.jpg?hmac=IKIa-Ep59HdFfireP3tlHuhAhn9tEQZHvez2LOpGMLs',
    'https://fastly.picsum.photos/id/977/500/500.jpg?hmac=ZQqe9s9NxSEhj6cLJ75bPwu2YSHg6noXxTZ-AUtqHnA',
    'https://fastly.picsum.photos/id/510/500/500.jpg?hmac=ieE9er69Wk7u0kHxg_bcHOYdzKNFImw7KX-c9Z14Pa8',
    'https://fastly.picsum.photos/id/488/500/500.jpg?hmac=rxSbeUce2eym5DWJDEJo72MqHI4zBe-qDpCvpz0Sj3M',
    'https://fastly.picsum.photos/id/760/500/500.jpg?hmac=dA5Qn49QPKSckraLl00DTRoFUwenDXoqxR8jYTcteD0',
    'https://fastly.picsum.photos/id/445/500/500.jpg?hmac=mm_2RbNZtJOsPI-ECtPJXL0D-QznMUPtlX8FbxWxJcc',
    'https://fastly.picsum.photos/id/1018/500/500.jpg?hmac=oMRZn8SYyf1AoWeCyhpPIwhWsUV1QN1RFcYL1lijwLg',
    'https://fastly.picsum.photos/id/1060/500/500.jpg?hmac=1_Zfj2QnxUoauTpLLb7BO881mQrrsM9pgyEDTuOw-QM',
    'https://fastly.picsum.photos/id/82/500/500.jpg?hmac=SBl_t1w-gmq7jLkcwDJHDQG5MsYX_Pdr3_gTaYW_UaU',
    'https://fastly.picsum.photos/id/431/500/500.jpg?hmac=64yneHWap73teJECPRJz6iKXvOPqiuJRjAJaCCPtBMk',
    'https://fastly.picsum.photos/id/625/500/500.jpg?hmac=H2HPXZBmIAri0Yql1hn799m9P1mpPGDS8zzRQZH4vF8'
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (e) => {
    setSelectedImage(e.target.src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;