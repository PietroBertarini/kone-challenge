import styled from 'styled-components';
import {
  activeBlue, borderGray, errorRed, primaryBlue, pureBlack, pureWhite,
} from '../../../../global.styles';

export const FlexColumnContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;

  justify-content: start;
  align-items: start;
  
`;

export const FlexRowContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const FlexRowHeaderContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: start;
  align-items: start;
`;

export const BodyHeader = styled.h2`
  /* UI Properties */
  text-align: left;
  font: 14px Poppins;
  font-weight: bold;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
  margin-bottom: 23px;
`;

export const FileButton = styled.text`
  /* Layout Properties */
  width: 102px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* UI Properties */
  background: ${pureWhite} 0 0 no-repeat padding-box;
  color: ${primaryBlue};
  border: 1px solid ${borderGray};
  border-radius: 8px;
  opacity: 1;
  margin-bottom: 17px;
  :hover {
    border:  ${activeBlue};
    background: ${activeBlue} ;
    color: ${pureWhite};
  }
`;

export const Subtitle = styled.text`
  /* UI Properties */
  text-align: left;
  font: normal normal 300 14px/21px Poppins;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
`;

export const TextRectangle = styled.div`
  /* Layout Properties */
  width: 323px;
  height: 36px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  /* UI Properties */
  
  border: 1px solid ${borderGray};
  background: ${pureWhite} 0 0 no-repeat padding-box;
  border-radius: 8px 8px 7px 7px;
  opacity: 1;
  margin-bottom: 33px;
`;
interface IconProps {
    isFailed?: boolean;
}
export const StyledIcon = styled.text<IconProps>`
  --isSuccess: ${primaryBlue};
  --isFailed: ${errorRed};
  letter-spacing: 0;
  color: ${(props) => (props.isFailed ? 'var(--isFailed)' : 'var(--isSuccess)')};
  padding-right:  ${(props) => (props.isFailed ? '8px' : '0')};
  font-size: 14px;
  opacity: 1;
`;

export const TextStyle = styled.text`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
`;

export const InputStyle = styled.input`
  text-align: left;
  width: 100%;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0;
  color: ${pureBlack};
  opacity: 1;
  border: transparent;
`;
