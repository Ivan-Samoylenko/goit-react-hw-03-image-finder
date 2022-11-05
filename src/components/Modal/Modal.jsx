import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalCloseBtn, ModalSheet } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';

const modalRootElement = document.querySelector('#modal');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleOnEsc);
  }

  handleOnEsc = event => {
    if (event.code === 'Escape') {
      this.props.togleModal();
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.togleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <ModalCloseBtn type="button" onClick={this.props.togleModal}>
          <AiOutlineClose size="40" />
        </ModalCloseBtn>
        <ModalSheet>{this.props.children}</ModalSheet>
      </Backdrop>,
      modalRootElement
    );
  }
}
