import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
export const ImageGalleryItems = ({ id, images, alt, index, openModal }) => {
  return (
    <li className={css.ImageGalleryItems}>
      <img src={images} alt={alt} onClick={() => openModal(index)} />
    </li>
  );
};
