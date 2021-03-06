import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSVReader } from 'react-papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faTimes, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  BodyHeader,
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
import { IError, IModalState } from '../../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../../Redux/root-reducer';
import { handleOnError, handleOnFileLoad } from './UploadData.utils';
import ButtonBar from '../../../ButtonBar/ButtonBar';
import { updateTeamName } from '../../../../../Redux/LegoComponents/Modal/Modal.actions';

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
  const dispatch = useDispatch();
  useEffect(() => () => { dispatch(updateTeamName(teamName)); }, [dispatch, teamName]);

  return (
    <FlexColumnContainer>
      <BodyHeader>Upload Data</BodyHeader>
      { !data && !error && UploadBody}
      { data && fileName && UploadSuccessBody(fileName, teamName, (e) => setTeamName(e.target.value))}
      { error && fileName && UploadFailedBody(fileName, error)}
      <ButtonBar disableContinue={!teamName} />
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
      config={{
        header: true,
      }}
    >
      {() => (
        <aside
          style={{
            cursor: 'pointer',
          }}
        >
          <FileButton onClick={handleOpenDialog}>
            Select File
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
