import styled from 'styled-components';
import {
  barGray, borderGray, primaryBlue, pureWhite,
} from '../../../global.styles';

export const CheckboxContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${borderGray} 1px solid;
  border-right-color: ${pureWhite};
  height: 36px;
  border-radius: 8px 0 0 8px;
  
`;

interface IndicatorProps {
  isChecked?: boolean;
}
export const Border = styled.div<IndicatorProps>`
  --isChecked: ${primaryBlue};
  --isNotCheced: ${pureWhite};
  position: relative;
  border-radius: 40px;
  margin-right: 8px;
  width: 18px;
  height: 18px;


  box-shadow: 0 1px 3px #00000029;
  border: 1px solid ${barGray};
  opacity: 1;
`;
interface IndicatorProps {
  isChecked?: boolean;
}
export const Indicator = styled.div<IndicatorProps>`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryBlue};
  width: 12px;
  height: 12px;
  margin: 2px;
`;
