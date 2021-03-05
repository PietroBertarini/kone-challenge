import React from 'react';
import {
  FirstStep, FlexContainer, LastStep, MiddleStep,
} from './StepProgress.styles';

interface OwnProps {
    state?: number, // will be a enum, maybe using redux
}

const StepProgress = ({ state }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  return (
    <FlexContainer>
      <FirstStep />
      <MiddleStep />
      <MiddleStep />
      <LastStep />
    </FlexContainer>
  );
};

export default StepProgress;
