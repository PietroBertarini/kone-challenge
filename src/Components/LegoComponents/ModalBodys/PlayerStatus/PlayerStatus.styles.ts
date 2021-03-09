import styled from 'styled-components';
import {
  borderGray, fontBlack, labelGray, pureWhite,
} from '../../../../global.styles';
import { BodyHeader } from '../UploadData/UploadData.styles';

export const OverflowWrapper = styled.div`
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
z-index: 10;
  background-color: ${pureWhite};
  
`;

export const TableBody = styled.tbody`

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
  z-index: 10;
`;

export const BodyHeaderPlayer = styled(BodyHeader)`
  /* UI Properties */
  margin-bottom: 0;
`;

export const HeaderTableText = styled.th`
  /* UI Properties */
  background-color: ${pureWhite};
  top: 0;
  z-index: 10;
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
export const ClickableDataTableRow = styled.tr`
  height: 36px;
  cursor: pointer;
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
