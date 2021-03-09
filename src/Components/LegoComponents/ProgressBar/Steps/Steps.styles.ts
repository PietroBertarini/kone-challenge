import styled from 'styled-components';
import {
  backgroundWhite, errorRed, fontBlack, lightGray, primaryBlue, pureWhite,
} from '../../../../global.styles';

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
    isErrorStatus?: boolean;
}
export const MiddleStepBackground = styled.div<StepProps>`
  --isActive: ${primaryBlue};
  --isNotActive: ${lightGray};
  --isErrorStatus: ${errorRed};
  /* Layout Properties */
  width: 167px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-right: 8px;
  /* UI Properties */
  border-left: 0;
  opacity: 1;
  background: ${(props) => {
    if (props.isErrorStatus) return 'var(--isErrorStatus)';
    if (props.isActiveStatus) return 'var(--isActive)';
    return 'var(--isNotActive)';
  }
} 0 0 no-repeat padding-box;
  ::before{
    /* Left Triangle Properties */
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
    /* Right Triangle Properties */
    content: "";
    display: flex;
    position: relative;
    left: 14px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid ${(props) => {
    if (props.isErrorStatus) return 'var(--isErrorStatus)';
    if (props.isActiveStatus) return 'var(--isActive)';
    return 'var(--isNotActive)';
  }
};
    z-index: 3;
`;
export const FirstStepBackground = styled(MiddleStepBackground)`
  :before{
    /* Left Triangle Properties */
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
`;
export const LastStepBackground = styled(MiddleStepBackground)`
  /* Layout Properties */
  margin-right: 0;
  ::after{
    /* Right Triangle Properties */
    
    border-top-color: transparent;
    border-bottom-color:transparent;
    border-left-color: transparent;
  }
`;
interface TextProps {
    isActiveStatus?: boolean;
}
export const StyledText = styled.text<TextProps>`
  --isActive: ${pureWhite};
  --isNotActive: ${fontBlack};
  /* Layout Properties */
  margin-left: 9px;
  /* UI Properties */
  color: ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')};
  text-align: left;
  font-size: 13px;
  opacity: 1;
`;

export const StyledIcon = styled.text<TextProps>`
  --isActive: ${pureWhite};
  --isNotActive: ${fontBlack};
  /* UI Properties */
  color: ${(props) => (props.isActiveStatus ? 'var(--isActive)' : 'var(--isNotActive)')};
  text-align: left;
  font-size: 12px;
  opacity: 1;
`;
