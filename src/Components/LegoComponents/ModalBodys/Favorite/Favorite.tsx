import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import ButtonBar from '../../ButtonBar/ButtonBar';
import { updateModalData } from '../../../../Redux/LegoComponents/Modal/Modal.actions';
import { FlexColumnContainer } from '../UploadData/UploadData.styles';
import Checkbox from '../../Checkbox/Checkbox';
import {
  OverflowWrapper,
  Table,
  BodyHeaderPlayer,
  HeaderTableRow,
  TableHeader,
  HeaderTableText,
  TableBody, DataTableRow,
  DataTableText,
  ClickableDataTableRow,
} from '../PlayerStatus/PlayerStatus.styles';

const Favorite = () => {
  const dispatch = useDispatch();
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, fileName } = modalRedux;
  const tableHeaderKeys = ['Player Name', '#', 'Pos', 'College'];
  const [checked, setChecked] = useState(false);
  function updatePlayerStatus(newStatus: string, index: number) {
    const newData = data;
    newData[index].Status = newStatus;
    if (fileName) dispatch(updateModalData(newData, fileName));
  }
  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Player Status</BodyHeaderPlayer>
      <OverflowWrapper>
        <Table>
          <TableHeader>
            <HeaderTableRow>
              <HeaderTableText>  </HeaderTableText>
              {
                tableHeaderKeys.map((key) => (
                  <HeaderTableText>{key}</HeaderTableText>
                ))
              }
            </HeaderTableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((row, index) => (
                <ClickableDataTableRow onClick={() => setChecked(!checked)}>
                  <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
                  {
                    tableHeaderKeys.map((key) => (
                      <DataTableText isChecked={checked}>{row[key]}</DataTableText>
                    ))
                  }
                </ClickableDataTableRow>
              ))
            }
          </TableBody>
        </Table>
      </OverflowWrapper>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default Favorite;
