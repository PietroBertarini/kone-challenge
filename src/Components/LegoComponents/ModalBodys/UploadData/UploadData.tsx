import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faTimes, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  BodyHeader,
  ButtonText,
  FileButton,
  FlexColumnContainer,
  FlexRowContainer,
  FlexRowHeaderContainer,
  InputStyle,
  StyledIcon,
  Subtitle,
  TextRectangle,
  TextStyle,
} from './UploadData.styles';
import { IError, IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import { handleOnError, handleOnFileLoad } from './UploadData.utils';

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

const UploadData = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, error, fileName } = modalRedux;
  const [teamName, setTeamName] = useState('');

  return (
    <FlexColumnContainer>
      <BodyHeader>Upload Data</BodyHeader>
      { !data && !error && UploadBody}
      { data && fileName && UploadSuccessBody(fileName, teamName, (e) => setTeamName(e.target.value))}
      { error && fileName && UploadFailedBody(fileName, error)}

    </FlexColumnContainer>
  );
};

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

const UploadSuccessBody = (fileName: string, inputValue: string, updateValue : (e: any) => void) => (
  <>
    <TextRectangle>
      <FlexRowContainer>
        <TextStyle>{fileName}</TextStyle>
        <StyledIcon>
          <FontAwesomeIcon icon={faCheck} />
        </StyledIcon>
      </FlexRowContainer>
    </TextRectangle>
    <BodyHeader>Team Name</BodyHeader>
    <TextRectangle>
      <InputStyle type="text" value={inputValue} onChange={updateValue} />
    </TextRectangle>
  </>
);

const UploadFailedBody = (fileName: string, error: IError) => (
  <>
    <TextRectangle>
      <FlexRowContainer>
        <TextStyle>{fileName}</TextStyle>
        <StyledIcon isFailed>
          <FontAwesomeIcon icon={faTimes} />
        </StyledIcon>
      </FlexRowContainer>
    </TextRectangle>
    <FlexRowHeaderContainer>
      <StyledIcon isFailed>
        <FontAwesomeIcon icon={faTimesCircle} />
      </StyledIcon>
      <BodyHeader>{error.errorHeader}</BodyHeader>
    </FlexRowHeaderContainer>
    <Subtitle>{error.errorMsg}</Subtitle>
  </>
);

export default UploadData;
