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

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};

const PlayerStatus = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, error, fileName } = modalRedux;
  const [teamName, setTeamName] = useState('');

  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Player Status</BodyHeaderPlayer>
      <Test>
        <Table>
          <TableHeader>
            <HeaderTableRow>
              <HeaderTableText>Company</HeaderTableText>
              <HeaderTableText>Contact</HeaderTableText>
              <HeaderTableText>Country</HeaderTableText>
            </HeaderTableRow>
          </TableHeader>
          <TableBody>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
            <DataTableRow>
              <DataTableText>Alfreds Futterkiste</DataTableText>
              <DataTableText>Maria Anders</DataTableText>
              <DataTableText>Germany</DataTableText>
            </DataTableRow>
          </TableBody>
        </Table>
      </Test>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default PlayerStatus;
