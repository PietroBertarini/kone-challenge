import styled from 'styled-components';
import {
  disableGray, primaryBlue, pureWhite, textDisableButton,
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
  border-radius: 8px;
  opacity: 0.2;
  margin-left: 8px;
  :hover {
    background-color:  ${primaryBlue};
    opacity: 1;
  }
`;

export const TextButton = styled.text`
  /* UI Properties */
  text-align: left;
  font-size: 14px;
  letter-spacing: 0;
  color: ${textDisableButton};
  opacity: 1;
  :hover {
    color:  ${pureWhite};
  }
`;
