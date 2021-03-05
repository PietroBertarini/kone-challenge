import styled from 'styled-components';
import {
  backgroundWhite, fontBlack, lightGray, primaryBlue, pureWhite,
} from '../../../global.styles';

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

interface StepProps {
    isActiveStatus?: boolean;
}
export const MiddleStepBackground = styled.div<StepProps>`
  /* Layout Properties */
  width: 167px;
  height: 30px;
  display: flex;
  flex-direction: row;
  --isActive: ${primaryBlue};
  --isNotActive: ${lightGray};
  background: ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')} 0 0 no-repeat padding-box;
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
    border-left: 15px solid ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')};
    z-index: 3;
`;
export const FirstStepBackground = styled(MiddleStepBackground)`
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
export const LastStepBackground = styled(MiddleStepBackground)`
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
interface TextProps {
    isActiveStatus?: boolean;
}
export const StyledText = styled.text<TextProps>`
  --isActive: ${pureWhite};
  --isNotActive: ${fontBlack};
  margin-left: 9px;
  letter-spacing: 0;
  color: ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')};
  text-align: left;
  font-size: 13px;
  opacity: 1;
`;

export const StyledIcon = styled.text<TextProps>`
  --isActive: ${pureWhite};
  --isNotActive: ${fontBlack};
  letter-spacing: 0;
  color: ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')};
  text-align: left;
  font-size: 12px;
  opacity: 1;
`;
