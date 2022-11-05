import { Component } from 'react';
import { ListItem, Image, LargeImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  togleModalOnClick = event => {
    if (event.target === event.currentTarget) {
      this.togleModal();
    }
  };

  togleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { smallImg, largeImg, alt } = this.props;

    return (
      <ListItem>
        <Image src={smallImg} alt={alt} onClick={this.togleModalOnClick} />
        {this.state.isModalOpen && (
          <Modal togleModal={this.togleModal}>
            <LargeImage src={largeImg} alt={alt} />
          </Modal>
        )}
      </ListItem>
    );
  }
}
