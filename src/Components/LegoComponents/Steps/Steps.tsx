import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  FirstStepBackground,
  StepFlexContainer,
  LastStepBackground,
  MiddleStepBackground,
  StyledText,
  StyledIcon,
} from './Steps.styles';

interface StepProps {
    isActive?: boolean,
    iconImage: IconProp,
    text: string,
}
export const FirstStep = ({
  isActive, iconImage, text,
} : StepProps) => (
  <FirstStepBackground isActiveStatus={isActive}>
    <StepFlexContainer>
      <StyledIcon isActiveStatus={isActive}>
        <FontAwesomeIcon icon={iconImage} />
      </StyledIcon>
      <StyledText isActiveStatus={isActive}>{text}</StyledText>
    </StepFlexContainer>
  </FirstStepBackground>
);

export const MiddleStep = ({
  isActive, iconImage, text,
} : StepProps) => (
  <MiddleStepBackground isActiveStatus={isActive}>
    <StepFlexContainer>
      <StyledIcon isActiveStatus={isActive}>
        <FontAwesomeIcon icon={iconImage} />
      </StyledIcon>
      <StyledText isActiveStatus={isActive}>{text}</StyledText>
    </StepFlexContainer>
  </MiddleStepBackground>
);

export const LastStep = ({
  isActive, iconImage, text,
} : StepProps) => (
  <LastStepBackground isActiveStatus={isActive}>
    <StepFlexContainer>
      <StyledIcon isActiveStatus={isActive}>
        <FontAwesomeIcon icon={iconImage} />
      </StyledIcon>
      <StyledText isActiveStatus={isActive}>{text}</StyledText>
    </StepFlexContainer>
  </LastStepBackground>
);
