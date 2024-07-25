import React from 'react';

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <h2>Photos</h2>
      <img src="https://via.placeholder.com/400x200" alt="Sports Day" />
      <img src="https://via.placeholder.com/400x200" alt="Science Exhibition" />
      <img src="https://via.placeholder.com/400x200" alt="Cultural Fest" />
      <h2>Videos</h2>
      <video width="400" controls>
        <source src="https://via.placeholder.com/video.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <video width="400" controls>
        <source src="https://via.placeholder.com/video.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}

export default Gallery;
