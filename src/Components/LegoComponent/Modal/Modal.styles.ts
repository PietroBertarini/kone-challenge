import styled from 'styled-components';
import {
  activeBlue, closeGray, fontBlack, overlayGray, pureWhite,
} from '../../../global.styles';

export const Overlay = styled.div`
  /* Layout Properties */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-content: center;
  justify-content: center;
  z-index: 10000;
  /* UI Properties */
  background: ${overlayGray} 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
export const Container = styled.div`
  /* Layout Properties */
  width: 658px;
  height: 447px;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  z-index: 10000;
  position: fixed;
  /* UI Properties */
  background: ${pureWhite} 0% 0% no-repeat padding-box;
  box-shadow: 0 9px 26px #0000003D;
  border-radius: 16px;
  opacity: 1;
`;
export const Header = styled.h2`
  /* Layout Properties */
  margin: 16px 0 16px 32px;
  text-align: left;
  letter-spacing: 0;

  color: ${fontBlack};
  font: normal normal medium 22px/33px Poppins;
  opacity: 1;
`;

export const CloseButton = styled.button`
  /* Layout Properties */
  width: 12px;
  height: 12px;
  align-self: end;
  margin: 24px 32px 27px 0;
  /* UI Properties */
  color: ${closeGray};
  background-color: transparent;
  :hover {
    color:  ${activeBlue};
  }
`;

export const HeaderBar = styled.div`
  /* Layout Properties */
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
