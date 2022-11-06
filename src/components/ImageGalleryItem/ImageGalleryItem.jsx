import { Component } from 'react';
import { ListItem, Image, LargeImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  static propTypes = {
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  toggleModalOnClick = event => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { smallImg, largeImg, alt } = this.props;

    return (
      <ListItem>
        <Image src={smallImg} alt={alt} onClick={this.toggleModalOnClick} />
        {this.state.isModalOpen && (
          <Modal toggleModal={this.toggleModal}>
            <LargeImage src={largeImg} alt={alt} />
          </Modal>
        )}
      </ListItem>
    );
  }
}
