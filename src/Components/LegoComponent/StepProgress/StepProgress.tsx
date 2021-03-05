import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faFootballBall, faStar, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import {
  FirstStep, FlexContainer, StepFlexContainer, LastStep, MiddleStep, StyledText,
} from './StepProgress.styles';

interface OwnProps {
    state?: number, // will be a enum, maybe using redux
}

const StepProgress = ({ state }: OwnProps) => {
  const portalDiv = document.getElementById('portal');
  return (
    <FlexContainer>
      <FirstStep>
        <StepFlexContainer>
          <FontAwesomeIcon icon={faUpload} />
          <StyledText>Upload Data</StyledText>
        </StepFlexContainer>
      </FirstStep>
      <MiddleStep>
        <StepFlexContainer>
          <FontAwesomeIcon icon={faFootballBall} />
          <StyledText>Player Status</StyledText>
        </StepFlexContainer>
      </MiddleStep>
      <MiddleStep>
        <StepFlexContainer>
          <FontAwesomeIcon icon={faStar} />
          <StyledText>Favorite</StyledText>
        </StepFlexContainer>
      </MiddleStep>
      <LastStep>
        <StepFlexContainer>
          <FontAwesomeIcon icon={faCheck} />
          <StyledText>Complete</StyledText>
        </StepFlexContainer>
      </LastStep>
    </FlexContainer>
  );
};

export default StepProgress;
