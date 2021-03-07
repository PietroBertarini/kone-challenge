import styled from 'styled-components';
import {
  activeBlue, borderGray, fontBlack, primaryBlue, pureBlack, pureWhite,
} from '../../../../global.styles';

export const FlexContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 32px;

  justify-content: start;
  align-items: start;
  
`;

export const BodyHeader = styled.h2`
  /* UI Properties */
  text-align: left;
  font: 14px/21px Poppins;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
  margin-bottom: 23px;
`;

export const ButtonText = styled.text`
  /* UI Properties */
  color: ${primaryBlue};
  text-align: left;
  font: normal normal medium 14px/21px Poppins;
  letter-spacing: 0;

`;

export const FileButton = styled.text`
  /* Layout Properties */
  width: 102px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* UI Properties */
  background: ${pureWhite} 0 0 no-repeat padding-box;
  border: 1px solid ${borderGray};
  border-radius: 8px;
  opacity: 1;
  margin-bottom: 17px;
  :hover {
    border:  ${activeBlue};
    background: ${activeBlue} ;
    ${ButtonText}{
      color: ${pureWhite};
    }
  }
`;

export const Subtitle = styled.text`
  /* UI Properties */
  text-align: left;
  font: normal normal 300 14px/21px Poppins;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
`;
