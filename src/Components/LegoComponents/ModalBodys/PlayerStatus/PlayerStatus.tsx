import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  DataTableRow,
  DataTableText,
  FlexColumnContainer, HeaderTableRow, HeaderTableText, Table, TableBody, TableHeader,
  Test, BodyHeaderPlayer,
} from './PlayerStatus.styles';
import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import ButtonBar from '../../ButtonBar/ButtonBar';
import { BodyHeader } from '../UploadData/UploadData.styles';
import { Item } from '../../Dropdown/Dropdown.styles';

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

const PlayerStatus = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data } = modalRedux;
  const tableHeaderKeys = ['Player Name', '#', 'Pos', 'College', 'Status'];
  const playerStatus = ['Active', 'Injured', 'Practice', 'Suspended'];

  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Player Status</BodyHeaderPlayer>
      <Test>
        <Table>
          <TableHeader>
            <HeaderTableRow>
              {
                tableHeaderKeys.map((key) => (
                  <HeaderTableText>{key}</HeaderTableText>
                ))
              }
            </HeaderTableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((row) => (
                <DataTableRow>
                  {
                    tableHeaderKeys.map((key) => (
                      <DataTableText>{row[key]}</DataTableText>
                    ))
                  }
                </DataTableRow>
              ))
            }
          </TableBody>
        </Table>
      </Test>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default PlayerStatus;
