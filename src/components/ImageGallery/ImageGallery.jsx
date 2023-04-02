import { ImageGalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css';


export  function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, tags }, index) => (
        <ImageGalleryItems
          key={id}
          images={webformatURL}
          alt={tags}
          index={index}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};