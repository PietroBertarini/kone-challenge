import React from 'react';
import ReactDom from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CloseButton, Container, Header, HeaderBar, Overlay,
} from './Modal.styles';
import StepProgress from '../StepProgress/StepProgress';
import UploadData from '../ModalBodys/UploadData/UploadData';
import ButtonBar from '../ButtonBar/ButtonBar';

interface OwnProps {
    open: boolean,
    onClose: () => void,
}

const Modal = ({ open, onClose }: OwnProps) => {
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
        <UploadData />
        <ButtonBar />
      </Container>
    </Overlay>,
    portalDiv,
  ) : null;
};

export default Modal;
