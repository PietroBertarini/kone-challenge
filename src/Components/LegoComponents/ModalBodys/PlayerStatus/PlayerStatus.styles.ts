import styled from 'styled-components';
import {
  activeBlue, borderGray, errorRed, fontBlack, labelGray, primaryBlue, pureBlack, pureWhite,
} from '../../../../global.styles';
import { BodyHeader } from '../UploadData/UploadData.styles';

export const Test = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 4000px;
  display: flex;
  justify-items: start;
  align-content: start;
  overflow-y: auto;
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${pureWhite};
  
`;

export const TableBody = styled.tbody`

`;

export const FlexColumnContainer = styled.div`
  /* Layout Properties */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  overflow:auto;
  justify-content: start;
  align-items: start;

`;

export const Table = styled.table`
  /* UI Properties */
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  height: 100px;

`;
export const HeaderTableRow = styled.tr`
    background-color: ${pureWhite};
    height: 36px;
`;

export const BodyHeaderPlayer = styled(BodyHeader)`
  /* UI Properties */
  margin-bottom: 0;
`;

export const HeaderTableText = styled.th`
  /* UI Properties */
  background-color: ${pureWhite};
  top: 0;
  position: sticky;
  color: ${labelGray};
  text-align: left;
  text-justify: auto;
  font: normal normal 300 11px/17px Poppins;
  letter-spacing: 0;
  opacity: 1;
  padding-left: 16px;
`;

export const DataTableRow = styled.tr`
  height: 36px;
`;

export const DataTableText = styled.td`
  /* UI Properties */
  text-align: left;
  font: normal normal medium 12px/18px Poppins;
  letter-spacing: 0;
  color: ${fontBlack};
  opacity: 1;
  border-top: 1px solid ${borderGray};
  border-bottom: 1px solid ${borderGray};
  padding-left: 16px;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 1px solid ${borderGray};
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border-right: 1px solid ${borderGray};
  }
`;
