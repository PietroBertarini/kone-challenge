import styled from 'styled-components';
import {
  barGray, borderGray, favoriteYellow, lightGray, primaryBlue, pureWhite,
} from '../../../global.styles';

interface CheckboxStyleProps {
  isChecked?: boolean;
}
export const CheckboxStyle = styled.td<CheckboxStyleProps>`
  --isCheckedBorder: ${favoriteYellow};
  --isNotCheckedBorder: ${borderGray};
  --isCheckedBack: ${lightGray};
  --isNotCheckedBack: ${pureWhite};
  display: flex;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isChecked ? 'var(--isCheckedBack)' : 'var(--isNotCheckedBack)')};
  cursor: pointer;
  border: ${(props) => (props.isChecked ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')} 1px solid;
  border-right-color: ${(props) => (props.isChecked ? 'var(--isCheckedBack)' : 'var(--isNotCheckedBack)')};
  height: 36px;
  border-radius: 8px 0 0 8px;
  
`;

export const Border = styled.div`
  position: relative;
  border-radius: 40px;
  margin-right: 8px;
  width: 18px;
  height: 18px;


  box-shadow: 0 1px 3px #00000029;
  border: 1px solid ${barGray};
  opacity: 1;
`;

export const Indicator = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryBlue};
  width: 12px;
  height: 12px;
  margin: 2px;
`;
