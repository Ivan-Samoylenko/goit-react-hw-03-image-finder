import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalCloseBtn, ModalSheet } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const modalRootElement = document.querySelector('#modal');

export class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleOnEsc);
  }

  handleOnEsc = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <ModalCloseBtn type="button" onClick={this.props.toggleModal}>
          <AiOutlineClose size="40" />
        </ModalCloseBtn>
        <ModalSheet>{this.props.children}</ModalSheet>
      </Backdrop>,
      modalRootElement
    );
  }
}
