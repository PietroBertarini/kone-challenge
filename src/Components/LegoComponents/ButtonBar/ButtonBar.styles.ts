import styled from 'styled-components';
import {
  borderGray,
  disableGray, errorRed, fontBlack, primaryBlue, pureWhite, textDisableButton,
} from '../../../global.styles';

export const FlexButtonContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 32px;
`;

export const ContinueButton = styled.button`
  width: 97px;
  height: 36px;
  /* UI Properties */
  background: ${disableGray} 0 0 no-repeat padding-box;
  color: ${textDisableButton}; ;
  border-radius: 8px;
  opacity: 0.2;
  margin-left: 8px;
  :hover {
    background-color:  ${primaryBlue};
    opacity: 1;
    color:  ${pureWhite};
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
