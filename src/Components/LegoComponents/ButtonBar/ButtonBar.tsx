import React from 'react';
import { ContinueButton, FlexButtonContainer, TextButton } from './ButtonBar.styles';

const ButtonBar = () => (
  <FlexButtonContainer>
    <ContinueButton>
      <TextButton>
        Continue
      </TextButton>
    </ContinueButton>
  </FlexButtonContainer>
);

export default ButtonBar;
