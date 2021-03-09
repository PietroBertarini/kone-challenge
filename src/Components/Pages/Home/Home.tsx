import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImportButton, Logo, Navbar } from './Home.styles';
import Modal from '../../LegoComponents/Modal/Modal';
import { EProgressStepOfModal, IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../Redux/root-reducer';
import { cleanModalState } from '../../../Redux/LegoComponents/Modal/Modal.actions';

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep } = modalRedux;
  return (
    <Navbar>
      <Logo>My Team</Logo>
      <ImportButton onClick={() => {
        if (progressStep > EProgressStepOfModal.COMPLETE) dispatch(cleanModalState());
        setIsOpen(true);
      }}
      >
        Import Team
      </ImportButton>
      {progressStep <= EProgressStepOfModal.COMPLETE && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />)}
    </Navbar>
  );
};

export default Home;
