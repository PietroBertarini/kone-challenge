import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSVReader } from 'react-papaparse';
import {
  BackButton,
  ContinueButton,
  FlexButtonContainer,
  ReUploadButton,
  WhiteSpace,
} from './ButtonBar.styles';
import { IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../Redux/root-reducer';
import { handleOnError, handleOnFileLoad } from '../ModalBodys/UploadData/UploadData.utils';
import { backModalProgress, nextModalProgress } from '../../../Redux/LegoComponents/Modal/Modal.actions';

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

interface OwnProps {
    disableContinue : boolean
}

const ButtonBar = ({ disableContinue } : OwnProps) => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep, error } = modalRedux;
  const haveAnyError = error !== undefined;
  const dispatch = useDispatch();
  return (
    <>
      <WhiteSpace />
      <FlexButtonContainer>
        {progressStep > 1 && (
        <BackButton onClick={() => { dispatch(backModalProgress()); }}>
          Back
        </BackButton>
        )}
        {!haveAnyError && (
          <ContinueButton disabled={disableContinue} onClick={() => { dispatch(nextModalProgress()); }}>
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
    </>
  );
};

export default ButtonBar;
