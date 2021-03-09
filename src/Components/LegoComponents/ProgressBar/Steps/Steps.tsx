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
import { rootState } from '../../../../Redux/root-reducer';
import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';

interface StepProps {
    iconImage: IconProp,
    text: string,
    stepOrder: number,
}

/**
 * The step bar have 3 different styles, when is the first, when is the middle of two steps or when is the last step,
 * this component represent the first one.
 * @param iconImage: Icon that will shown inside the step component.
 * @param text: Text that will be shown inside the step component.
 * @param stepOrder: The order of this step inside the progress, ex: the first one
 *  will be order 0, the second one will be order 1.
 * @constructor
 */
export const FirstStep = ({ iconImage, text, stepOrder } : StepProps) => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { progressStep, error } = modalRedux;
  const isActive = progressStep >= stepOrder;
  const haveAnyError = error !== undefined;

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

/**
 * The step bar have 3 different styles, when is the first, when is the middle of two steps or when is the last step,
 *  this component represent the middle one.
 * @param iconImage: Icon that will shown inside the step component.
 * @param text: Text that will be shown inside the step component.
 * @param stepOrder: The order of this step inside the progress, ex: the first one
 *  will be order 0, the second one will be order 1.
 * @constructor
 */
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

/**
 * The step bar have 3 different styles, when is the first, when is the middle of two steps or when is the last step,
 *  this component represent the last one.
 * @param iconImage: Icon that will shown inside the step component.
 * @param text: Text that will be shown inside the step component.
 * @param stepOrder: The order of this step inside the progress, ex: the first one
 *  will be order 0, the second one will be order 1.
 * @constructor
 */
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
