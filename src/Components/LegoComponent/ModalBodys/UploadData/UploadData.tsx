import React from 'react';
import { CSVReader } from 'react-papaparse';
import {
  BodyHeader, ButtonText, FileButton, FlexContainer, Subtitle,
} from './UploadData.styles';

const buttonRef : any = React.createRef();
const UploadData = () => {
  function handleOpenDialog(e: any) {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  function handleOnFileLoad(data: any, file: any) {
    console.log(`${file.name}`);
    console.log(data.errors);// if exististes, return error
    const arrayOfBooleans = data.map((cellOfCsv) => cellOfCsv.data.includes(''));
    const haveAnyEmptyData = arrayOfBooleans.includes(true);// if true, return error
    console.log(haveAnyEmptyData);
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  function handleOnError(err : any, file: any, inputElem : any, reason : any) {
    console.log('---------------------------');
    console.log(err);
    console.log('---------------------------');
  };

  return (
    <FlexContainer>
      <BodyHeader>Upload Data</BodyHeader>
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
    </FlexContainer>
  );
};

export default UploadData;
