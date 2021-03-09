import styled from 'styled-components';
import { labelGray, pureBlack } from '../../../../../global.styles';

export const DataContainer = styled.div`
  /* Layout Properties */
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;//32px - 27px from Label = 5px
  justify-content: start;
  align-items: start;
  
`;

export const Label = styled.text`
  /* Layout Properties */
  padding-top: 27px;
  /* UI Properties */
  text-align: left;
  font: normal normal 300 11px/17px Poppins;
  color: ${labelGray};
  opacity: 1;
`;

export const DataText = styled.text`
  /* UI Properties */
  text-align: left;
  font: normal normal medium 14px/21px Poppins;
  color: ${pureBlack};
  opacity: 1;
  
`;
export const CompleteFlexColumnContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 48px;
  justify-content: start;
  align-items: start;
`;
