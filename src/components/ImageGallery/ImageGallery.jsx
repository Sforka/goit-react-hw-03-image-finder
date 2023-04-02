import { ImageGalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem';
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
