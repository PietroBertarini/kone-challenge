import styled from 'styled-components';
import {
  activeBlue, borderGray, fontBlack, primaryBlue, pureBlack, pureWhite,
} from '../../../global.styles';

export const DropdownStyle = styled.td`
  /* Layout Properties */
  position: relative;
  width: 150px;
  /* UI Properties */
  color: #333;
  background-color: ${pureWhite};
`;

interface ArrowProps {
  isOpen?: boolean;
}
export const Arrow = styled.div<ArrowProps>`
  /* Layout Properties */
  position: absolute;
  right: 21px;
  top: 14px;
  width: 0;
  /* UI Properties */
  color: ${pureBlack};

`;
interface SelectedProps {
  isOpen?: boolean;
}
export const SelectedValue = styled.button<SelectedProps>`
  --isOpen: ${primaryBlue};
  --isClose: ${borderGray};
  /* Layout Properties */
  padding: 8px 52px 8px 10px;
  /* UI Properties */
  line-height: 1.5;
  width: 150px;
  font-size: 1rem;
  background-color: ${pureWhite};
  border: ${(props) => (props.isOpen ? 'var(--isOpen)' : 'var(--isClose)')} 1px solid;
  border-bottom-color: ${(props) => (props.isOpen ? 'transparent' : 'var(--isClose)')};
  border-radius: ${(props) => (props.isOpen ? '0px 8px 0px 0px' : '0px 8px 8px 0px')};
  cursor: default;
  outline: none;
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
  /* Layout Properties */
  display: block;
  width: 150px;
  z-index: 2;
  padding: 8px 10px;
  /* UI Properties */
  cursor: pointer;
  text-align: start;
  background-color: ${pureWhite};
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
  /* Layout Properties */
  width: 150px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  z-index: 1;
  /* UI Properties */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: ${pureWhite};
  border-radius: 0 0 8px 8px;
  border: 1px solid ${primaryBlue};
  border-top: transparent;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  top: 100%;
  -webkit-overflow-scrolling: touch;
`;
