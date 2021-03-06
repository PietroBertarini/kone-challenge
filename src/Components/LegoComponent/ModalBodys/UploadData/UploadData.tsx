import React from 'react';
import {
  BodyHeader, ButtonText, FileButton, FlexContainer, Subtitle,
} from './UploadData.styles';

const UploadData = () => {
  const portalDiv = document.getElementById('portal');
  return (
    <FlexContainer>
      <BodyHeader>Upload Data</BodyHeader>
      <FileButton>
        <ButtonText>
          Select File
        </ButtonText>
      </FileButton>
      <Subtitle>File must be .csv format</Subtitle>
    </FlexContainer>
  );
};

export default UploadData;
