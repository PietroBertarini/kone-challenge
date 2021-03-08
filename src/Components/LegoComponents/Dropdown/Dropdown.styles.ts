import styled from 'styled-components';
import {
  activeBlue, borderGray, fontBlack, primaryBlue, pureBlack, pureWhite,
} from '../../../global.styles';

export const DropdownStyle = styled.td`
  position: relative;
  color: #333;
  background-color: ${pureWhite};
  width: 150px;
`;

interface ArrowProps {
  isOpen?: boolean;
}
export const Arrow = styled.div<ArrowProps>`
  color: ${pureBlack};
  position: absolute;
  right: 21px;
  top: 14px;
  width: 0;
`;
interface SelectedProps {
  isOpen?: boolean;
}
export const SelectedValue = styled.button<SelectedProps>`
  --isOpen: ${primaryBlue};
  --isClose: ${borderGray};
  line-height: 1.5;
  width: 150px;
  font-size: 1rem;
  background-color: ${pureWhite};
  border: 1px solid;
  border-color: ${(props) => (props.isOpen ? 'var(--isOpen)' : 'var(--isClose)')};
  border-bottom-color: ${(props) => (props.isOpen ? 'transparent' : 'var(--isClose)')};
  border-radius: ${(props) => (props.isOpen ? '0px 8px 0px 0px' : '0px 8px 8px 0px')};
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
  :hover {
    cursor: pointer;
  }
`;
export const Control = styled.button`
    
`;
interface ItemProps {
  isSelected?: boolean;
}
export const Item = styled.button<ItemProps>`
  --isSelected: ${fontBlack};
  --isNotSelected: ${borderGray};
  box-sizing: border-box;
  cursor: pointer;
  text-align: start;
  background-color: ${pureWhite};
  display: block;
  width: 150px;
  z-index: 2;
  padding: 8px 10px;
  color: ${(props) => (props.isSelected ? 'var(--isOpen)' : 'rgba(51, 51, 51, 0.8)')};
  :hover{
    background-color: ${activeBlue};
    color: ${fontBlack};
    
  }
`;
interface ItensProps {
  isOpen?: boolean;
}
export const Itens = styled.div<ItensProps>`
  width: 150px;
  
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: ${pureWhite};
  border-radius: 0 0 8px 8px;
  border: 1px solid ${primaryBlue};
  border-top: transparent;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  z-index: 1;
  -webkit-overflow-scrolling: touch;

`;
