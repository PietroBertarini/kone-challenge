import React from 'react';
import ReactDom from 'react-dom';
import { Container, Overlay } from './Modal.styles';

interface OwnProps {
    open: boolean,
    children?: JSX.Element,

}

const Modal = ({ open, children }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  return (open && portalDiv) ? ReactDom.createPortal(
    <>
      <Overlay>
        <Container>
          {children}
        </Container>
      </Overlay>
    </>,
    portalDiv,
  ) : null;
};

export default Modal;
