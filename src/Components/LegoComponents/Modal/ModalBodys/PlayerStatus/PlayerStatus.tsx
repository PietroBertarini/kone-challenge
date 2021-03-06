import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import {
  DataTableRow,
  DataTableText,
  HeaderTableRow,
  HeaderTableText,
  Table,
  TableBody,
  TableHeader,
  OverflowWrapper,
} from '../../../Table/Table.styles';
import { IModalState } from '../../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../../Redux/root-reducer';
import ButtonBar from '../../../ButtonBar/ButtonBar';
import Dropdown from '../../../Dropdown/Dropdown';
import { updateModalData } from '../../../../../Redux/LegoComponents/Modal/Modal.actions';
import { FlexColumnContainer } from '../UploadData/UploadData.styles';
import { BodyHeaderPlayer } from './PlayerStatus.styles';

const PlayerStatus = () => {
  const dispatch = useDispatch();
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, fileName } = modalRedux;
  const tableHeaderKeys = ['Player Name', '#', 'Pos', 'College', 'Status'];
  const playerStatus = ['Active', 'Injured', 'Practice', 'Suspended'];

  function updatePlayerStatus(newStatus: string, index: number) {
    const newData = data;
    newData[index].Status = newStatus;
    if (fileName) dispatch(updateModalData(newData, fileName));
  }

  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Player Status</BodyHeaderPlayer>
      <OverflowWrapper>
        <Table>
          <TableHeader>
            <HeaderTableRow key={uuidv4()}>
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
                <DataTableRow key={uuidv4()}>
                  {
                    tableHeaderKeys.map((key) => {
                      if (key === 'Status') {
                        return (
                          <Dropdown
                            itensArray={playerStatus}
                            prompt={row[key]}
                            onChange={(val) => updatePlayerStatus(val, index)}
                            value={row[key]}
                            key={uuidv4()}
                          />
                        );
                      }
                      return (
                        <DataTableText key={uuidv4()}>{row[key]}</DataTableText>
                      );
                    })
                  }
                </DataTableRow>
              ))
            }
          </TableBody>
        </Table>
      </OverflowWrapper>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default PlayerStatus;
