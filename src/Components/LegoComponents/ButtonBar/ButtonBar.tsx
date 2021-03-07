import React from 'react';
import { useSelector } from 'react-redux';
import { CSVReader } from 'react-papaparse';
import {
  BackButton,
  ContinueButton,
  FlexButtonContainer,
  ReUploadButton,
} from './ButtonBar.styles';
import { IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../Redux/root-reducer';
import { handleOnError, handleOnFileLoad } from '../ModalBodys/UploadData/UploadData.utils';

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

const ButtonBar = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep, error } = modalRedux;
  // const isActive = progressStep >= stepOrder;
  const haveAnyError = error !== undefined;
  return (
    <FlexButtonContainer>
      {progressStep > 1 && (
        <BackButton>
          Back
        </BackButton>
      )}
      {!haveAnyError && (
      <ContinueButton>
        Continue
      </ContinueButton>
      )}
      {haveAnyError && (
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noDrag
        progressBarColor="#2F54D0"
      >
        {() => (
          <aside
            style={{
              cursor: 'pointer',
            }}
          >
            <ReUploadButton onClick={handleOpenDialog}>
              Re-Upload File
            </ReUploadButton>
          </aside>
        )}
      </CSVReader>

      )}
    </FlexButtonContainer>
  );
};

export default ButtonBar;
