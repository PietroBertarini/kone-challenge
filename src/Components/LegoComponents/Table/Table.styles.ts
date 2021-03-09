import styled from 'styled-components';
import {
  borderGray, favoriteYellow, fontBlack, labelGray, lightGray, pureWhite,
} from '../../../global.styles';
import { BodyHeader } from '../Modal/ModalBodys/UploadData/UploadData.styles';

export const OverflowWrapper = styled.div`
  /* Layout Properties */
  width: 100%;
  height: auto;
  display: flex;
  justify-items: start;
  align-content: start;
  overflow-y: auto;
`;

export const TableHeader = styled.thead`
  /* Layout Properties */
  position: sticky;
  top: 0;
  z-index: 10;
  /* UI Properties */
  background-color: ${pureWhite};
`;

export const TableBody = styled.tbody``;

export const Table = styled.table`
  /* Layout Properties */
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  height: 100px;
`;
export const HeaderTableRow = styled.tr`
  /* Layout Properties */
  height: 36px;
  z-index: 10;
  /* UI Properties */
  background-color: ${pureWhite};
`;

export const TextTableHeader = styled(BodyHeader)`
  /* Layout Properties */
  margin-bottom: 0;
`;

export const HeaderTableText = styled.th`
  /* Layout Properties */
  top: 0;
  z-index: 10;
  position: sticky;
  text-align: left;
  padding-left: 16px;
  /* UI Properties */
  background-color: ${pureWhite};
  color: ${labelGray};
  text-justify: auto;
  font: normal normal 300 11px/17px Poppins;
  opacity: 1;

`;

export const DataTableRow = styled.tr`
  /* Layout Properties */
  height: 36px;
`;
export const ClickableDataTableRow = styled.tr`
  /* Layout Properties */
  height: 36px;
  cursor: pointer;
`;
interface DataTableTextProps {
  isChecked?: boolean,
  isFavoritePlayer?: boolean,
}
export const DataTableText = styled.td<DataTableTextProps>`
  --isCheckedBorder: ${favoriteYellow};
  --isNotCheckedBorder: ${borderGray};
  --isCheckedBack: ${lightGray};
  --isNotCheckedBack: ${pureWhite};
  /* Layout Properties */
  padding-left: 16px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 12px/18px Poppins;
  color: ${fontBlack};
  background-color: ${(props) => (props.isChecked ? 'var(--isCheckedBack)' : 'var(--isNotCheckedBack)')};
  opacity: 1;
  border-top: 1px solid ${(props) => (props.isChecked || props.isFavoritePlayer
    ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')};
  border-bottom: 1px solid ${(props) => (props.isChecked || props.isFavoritePlayer
    ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')};
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 1px solid ${(props) => (props.isChecked || props.isFavoritePlayer
    ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')};
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border-right: 1px solid ${(props) => (props.isChecked || props.isFavoritePlayer
    ? 'var(--isCheckedBorder)' : 'var(--isNotCheckedBorder)')};
  }
`;
