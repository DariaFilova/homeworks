import React, { useEffect, useState, useRef } from 'react';
import './Gallery.scss';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    async function getImages() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );

        const limitedImages = response.data.slice(0, 500);

        setImages(limitedImages);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    getImages();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    toggleModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (modalOpen && modalRef.current) {
        const modal = modalRef.current;
        modal.style.top = window.scrollY + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='gallery'>
      <div className='images'>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            onClick={() => handleImageClick(image.url)}
          />
        ))}
      </div>

      {modalOpen && (
        <div
          ref={modalRef}
          className={`modal ${modalOpen ? 'open' : ''}`}
        >
          <div className='modal-content'>
            <img
              src={selectedImage}
              alt='dj'
            />
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

