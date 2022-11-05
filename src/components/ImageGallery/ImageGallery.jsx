import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => {
        const { id, webformatURL, largeImageURL, tags } = image;
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            alt={tags}
          ></ImageGalleryItem>
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
