import styled from 'styled-components';
import {
  borderGray,
  disableGray, errorRed, fontBlack, primaryBlue, pureWhite, textDisableButton,
} from '../../../global.styles';

export const FlexButtonContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  min-height: 20px;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 32px;
  padding-top: 16px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContinueButton = styled.button`
  width: 97px;
  height: 36px;
  /* UI Properties */
  background: ${primaryBlue} 0 0 no-repeat padding-box;
  color: ${pureWhite}; ;
  border-radius: 8px;
  margin-left: 8px;
  :hover {
    background-color:  ${primaryBlue};
    opacity: 1;
    color:  ${pureWhite};
  }
  :disabled {
    background: ${disableGray};
    color: ${textDisableButton} ;
    opacity: 0.2;
    cursor: default;
  }
`;

export const ReUploadButton = styled(ContinueButton)`
  width: 135px;
  /* UI Properties */
  border: 1px solid ${borderGray};
  background-color:  ${pureWhite};
  color:  ${primaryBlue};
  opacity: 1;
  :hover {
    background-color:  ${primaryBlue};
  }
`;

export const BackButton = styled(ReUploadButton)`
  width: 66px;
  color:  ${fontBlack};
  /* UI Properties */
  opacity: 1;
  :hover {
    background-color:  ${errorRed};
  }
`;
