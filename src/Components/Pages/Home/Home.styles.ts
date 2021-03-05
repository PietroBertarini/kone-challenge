import styled from 'styled-components';
import {
  activeBlue, backgroundWhite, fontBlack, primaryBlue,
} from '../../../global.styles';

export const Navbar = styled.div`
  /* Layout Properties */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  /* Layout Properties */
  text-align: left;
  /* UI Properties */
  color: ${fontBlack};
  font: normal normal medium 30px/46px Poppins;
  letter-spacing: 0;
  opacity: 1;
`;
export const ImportButton = styled.button`
  /* Layout Properties */
  width: 123px;
  height: 36px;
  /* UI Properties */
  background:  ${primaryBlue} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 14px/21px Poppins;
  letter-spacing: 0;
  color: ${backgroundWhite};
  :hover {
    background:  ${activeBlue} 0% 0% no-repeat padding-box;
  }
`;