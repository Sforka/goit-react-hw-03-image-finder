import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItems = ({  images, alt, index, openModal }) => {
  return (
    <li className={css.ImageGalleryItems}>
      <img src={images} alt={alt} onClick={() => openModal(index)} />
    </li>
  );
};

ImageGalleryItems.propTypes = {
  openModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  images: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
