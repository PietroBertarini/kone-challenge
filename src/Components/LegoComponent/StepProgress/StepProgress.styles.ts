import styled from 'styled-components';
import { backgroundWhite, fontBlack, lightGray } from '../../../global.styles';

export const FlexContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  
`;

export const StepFlexContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  padding-left: 32px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  
`;
export const MiddleStep = styled.div`
  /* Layout Properties */
  width: 167px;
  height: 30px;
  display: flex;
  flex-direction: row;
  background: ${lightGray} 0 0 no-repeat padding-box;
  border-left: 0;
  opacity: 1;
  margin-right: 8px;
  ::before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid ${backgroundWhite};
    z-index: 2;
  }
  ::after{
    content: "";
    display: flex;
    position: relative;
    left: 14px;
  
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid ${lightGray};
    z-index: 3;
`;
export const FirstStep = styled(MiddleStep)`
  :before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    z-index: 2;
  }
`;
export const LastStep = styled(MiddleStep)`
  margin-right: 0;
  ::after{
    content: "";
    display: flex;
    position: relative;
    left: 8px;

    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    z-index: 3;
  }
`;
export const StyledText = styled.text`
  margin-left: 9px;
  letter-spacing: 0;
  color: ${fontBlack};
  text-align: left;
  font-size: 13px;
  opacity: 1;
`;
