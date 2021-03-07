import React from 'react';
import { CSVReader } from 'react-papaparse';
import { useSelector } from 'react-redux';
import {
  BodyHeader, ButtonText, FileButton, FlexContainer, Subtitle,
} from './UploadData.styles';
import { checkCsvErrors } from './UploadData.utils';
import { store } from '../../../../Redux/store';
import { updateModalData, updateModalError } from '../../../../Redux/LegoComponents/Modal/Modal.actions';
import { EModalError, IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';

const buttonRef : any = React.createRef();

function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

function handleOnFileLoad(data: any, file: any) {
  const haveSomeError = checkCsvErrors(data);
  if (haveSomeError) {
    store.dispatch(updateModalError(haveSomeError, file.name));
  } else {
    store.dispatch(updateModalData(data, file.name));
  }
};

function handleOnError(err : any, file: any, inputElem : any, reason : any) {
  store.dispatch(updateModalError({
    code: EModalError.UPLOAD_ERROR,
    error: err,
  }, file.name));
};

const UploadData = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, error } = modalRedux;
  if (error) {
    return (<Subtitle>FERROR</Subtitle>);
  }

  if (data) {
    return (<Subtitle>data</Subtitle>);
  }
  const UploadBody = (
    <>
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
            <FileButton>
              <ButtonText onClick={handleOpenDialog}>
                Select File
              </ButtonText>
            </FileButton>
          </aside>
        )}
      </CSVReader>
      <Subtitle>File must be .csv format</Subtitle>
    </>
  );
  return (
    <FlexContainer>
      <BodyHeader>Upload Data</BodyHeader>
      {UploadBody}
    </FlexContainer>
  );
};

export default UploadData;
