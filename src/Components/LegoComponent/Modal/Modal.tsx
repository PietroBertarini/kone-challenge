import React from 'react';
import ReactDom from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CloseButton, Container, HeaderBar, Header, Overlay,
} from './Modal.styles';
import StepProgress from '../StepProgress/StepProgress';

interface OwnProps {
    open: boolean,
    children?: JSX.Element,
    onClose: () => void,
}

const Modal = ({ open, children, onClose }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  return (open && portalDiv) ? ReactDom.createPortal(
    <Overlay>
      <Container>
        <HeaderBar>
          <Header>My Team Importer</Header>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </HeaderBar>
        <StepProgress />
        {children}
      </Container>
    </Overlay>,
    portalDiv,
  ) : null;
};

export default Modal;
