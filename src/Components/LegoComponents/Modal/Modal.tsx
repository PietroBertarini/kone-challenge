import React from 'react';
import ReactDom from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {
  CloseButton, Container, Header, HeaderBar, Overlay,
} from './Modal.styles';
import StepProgress from '../StepProgress/StepProgress';
import UploadData from './ModalBodys/UploadData/UploadData';
import { EProgressStepOfModal, IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../Redux/root-reducer';
import PlayerStatus from './ModalBodys/PlayerStatus/PlayerStatus';
import Favorite from './ModalBodys/Favorite/Favorite';
import Complete from './ModalBodys/Complete/Complete';

interface OwnProps {
    open: boolean,
    onClose: () => void,
}

const Modal = ({ open, onClose }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep } = modalRedux;
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
        {progressStep === EProgressStepOfModal.UPLOAD_DATA && (<UploadData />)}
        {progressStep === EProgressStepOfModal.PLAYER_STATUS && (<PlayerStatus />)}
        {progressStep === EProgressStepOfModal.FAVORITE && (<Favorite />)}
        {progressStep === EProgressStepOfModal.COMPLETE && (<Complete />)}
      </Container>
    </Overlay>,
    portalDiv,
  ) : null;
};

export default Modal;
