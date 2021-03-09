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
  /* Layout Properties */
  display: flex;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
  height: 36px;
  /* UI Properties */
  background-color: ${(props) => (props.isChecked ? 'var(--isCheckedBack)' : 'var(--isNotCheckedBack)')};
  cursor: pointer;
  border: ${(props) => (props.isChecked ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')} 1px solid;
  border-right-color: ${(props) => (props.isChecked ? 'var(--isCheckedBack)' : 'var(--isNotCheckedBack)')};
  border-radius: 8px 0 0 8px;
`;

export const Border = styled.div`
  /* Layout Properties */
  position: relative;
  border-radius: 40px;
  margin-right: 8px;
  width: 18px;
  height: 18px;
  /* UI Properties */
  box-shadow: 0 1px 3px #00000029;
  border: 1px solid ${barGray};
  opacity: 1;
`;

export const Icon = styled.div`
  /* Layout Properties */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  margin: 2px;
  /* UI Properties */
  color: ${primaryBlue};

`;
