import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from 'react-redux';
import {
  FirstStepBackground,
  LastStepBackground,
  MiddleStepBackground,
  StepFlexContainer,
  StyledIcon,
  StyledText,
} from './Steps.styles';
import { rootState } from '../../../Redux/root-reducer';
import { EProgressStepOfModal, IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';

interface StepProps {
    iconImage: IconProp,
    text: string,
    stepOrder: number,
}
export const FirstStep = ({ iconImage, text, stepOrder } : StepProps) => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep } = modalRedux;
  const isActive = progressStep >= stepOrder;
  const haveAnyError = progressStep === EProgressStepOfModal.UPLOAD_FAILED;
  return (
    <FirstStepBackground isActiveStatus={isActive} isErrorStatus={haveAnyError}>
      <StepFlexContainer>
        <StyledIcon isActiveStatus={isActive}>
          <FontAwesomeIcon icon={iconImage} />
        </StyledIcon>
        <StyledText isActiveStatus={isActive}>{text}</StyledText>
      </StepFlexContainer>
    </FirstStepBackground>
  );
};

export const MiddleStep = ({ iconImage, text, stepOrder } : StepProps) => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep } = modalRedux;
  const isActive = progressStep >= stepOrder;
  return (
    <MiddleStepBackground isActiveStatus={isActive}>
      <StepFlexContainer>
        <StyledIcon isActiveStatus={isActive}>
          <FontAwesomeIcon icon={iconImage} />
        </StyledIcon>
        <StyledText isActiveStatus={isActive}>{text}</StyledText>
      </StepFlexContainer>
    </MiddleStepBackground>
  );
};

export const LastStep = ({ iconImage, text, stepOrder } : StepProps) => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep } = modalRedux;
  const isActive = progressStep >= stepOrder;
  return (
    <LastStepBackground isActiveStatus={isActive}>
      <StepFlexContainer>
        <StyledIcon isActiveStatus={isActive}>
          <FontAwesomeIcon icon={iconImage} />
        </StyledIcon>
        <StyledText isActiveStatus={isActive}>{text}</StyledText>
      </StepFlexContainer>
    </LastStepBackground>
  );
};
