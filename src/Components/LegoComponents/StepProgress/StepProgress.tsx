import React from 'react';
import {
  faCheck,
  faFootballBall, faStar, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FlexContainer } from './StepProgress.styles';
import { FirstStep, LastStep, MiddleStep } from '../Steps/Steps';

const StepProgress = () => (
  <FlexContainer>
    <FirstStep iconImage={faUpload} text="Upload Data" stepOrder={1} />
    <MiddleStep iconImage={faFootballBall} text="Player Status" stepOrder={2} />
    <MiddleStep iconImage={faStar} text="Favorite" stepOrder={3} />
    <LastStep iconImage={faCheck} text="Complete" stepOrder={4} />
  </FlexContainer>
);

export default StepProgress;
