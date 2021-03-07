import React from 'react';
import {
  faCheck,
  faFootballBall, faStar, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FlexContainer } from './StepProgress.styles';
import { FirstStep, LastStep, MiddleStep } from '../Steps/Steps';

interface OwnProps {
    state?: number, // will be a enum, maybe using redux
}

const StepProgress = ({ state }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  return (
    <FlexContainer>
      <FirstStep isActive iconImage={faUpload} text="Upload Data" />
      <MiddleStep iconImage={faFootballBall} text="Player Status" />
      <MiddleStep iconImage={faStar} text="Favorite" />
      <LastStep iconImage={faCheck} text="Complete" />
    </FlexContainer>
  );
};

export default StepProgress;
