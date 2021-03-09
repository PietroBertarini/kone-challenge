import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { IModalState } from '../../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../../Redux/root-reducer';
import ButtonBar from '../../../ButtonBar/ButtonBar';
import { updateFavoritePlayerIndex } from '../../../../../Redux/LegoComponents/Modal/Modal.actions';
import { FlexColumnContainer } from '../UploadData/UploadData.styles';
import Checkbox from '../../../Checkbox/Checkbox';
import {
  OverflowWrapper,
  Table,
  TextTableHeader,
  HeaderTableRow,
  TableHeader,
  HeaderTableText,
  TableBody,
  DataTableText,
  ClickableDataTableRow,
} from '../../../Table/Table.styles';

const Favorite = () => {
  const dispatch = useDispatch();
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, favoritePlayerIndex } = modalRedux;
  const tableHeaderKeys = ['Player Name', '#', 'Pos', 'College'];

  function isFavoritePlayer(actualIndex: number) {
    return actualIndex === favoritePlayerIndex;
  }
  function updatePlayer(index: number) {
    dispatch(updateFavoritePlayerIndex(index));
  }

  return (
    <FlexColumnContainer>
      <TextTableHeader>Player Status</TextTableHeader>
      <OverflowWrapper>
        <Table>
          <TableHeader>
            <HeaderTableRow key={uuidv4()}>
              <HeaderTableText key={uuidv4()}>  </HeaderTableText>
              {
                tableHeaderKeys.map((key) => (
                  <HeaderTableText key={uuidv4()}>{key}</HeaderTableText>
                ))
              }
            </HeaderTableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((row, index) => (
                <ClickableDataTableRow
                  key={uuidv4()}
                  onClick={() => {
                    updatePlayer(index);
                  }}
                >
                  <Checkbox
                    key={uuidv4()}
                    checked={isFavoritePlayer(index)}
                    onChange={() => {
                      updatePlayer(index);
                    }}
                  />
                  {
                    tableHeaderKeys.map((key) => (
                      <DataTableText key={uuidv4()} isChecked={isFavoritePlayer(index)}>{row[key]}</DataTableText>
                    ))
                  }
                </ClickableDataTableRow>
              ))
            }
          </TableBody>
        </Table>
      </OverflowWrapper>
      <ButtonBar disableContinue={favoritePlayerIndex === undefined} />
    </FlexColumnContainer>
  );
};

export default Favorite;
