import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import ButtonBar from '../../ButtonBar/ButtonBar';
import { FlexColumnContainer, FlexRowContainer } from '../UploadData/UploadData.styles';
import { BodyHeaderPlayer } from '../PlayerStatus/PlayerStatus.styles';
import {
  DataContainer, DataText, Label,
} from './Complete.styles';

const buttonRef : any = React.createRef();

export function handleOpenDialog(e: any) {
  // Note that the ref is set async, so it might be null at some point
  if (buttonRef.current) {
    buttonRef.current.open(e);
  }
};
interface DataInformationProps {
    label: string,
    data?: string
}
const DataInformation = ({ label, data } : DataInformationProps) => (
  <DataContainer>
    <Label>{label}</Label>
    <DataText>{data}</DataText>
  </DataContainer>
);

const Complete = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const { data, fileName, favoritePlayerIndex } = modalRedux;
  const favoritePlayerName = favoritePlayerIndex ? data[favoritePlayerIndex]['Player Name'] : 'Nobody';
  const statusData = data.map((item) => item.Status);
  const allPlayersStatus = statusData.reduce((statusCount, currentStatus) => {
    if (typeof statusCount[currentStatus] !== 'undefined') {
      statusCount[currentStatus] += 1;
      return statusCount;
    }
    statusCount[currentStatus] = 1;
    return statusCount;
  }, {});
  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Summary</BodyHeaderPlayer>
      <FlexRowContainer>
        <DataInformation label="Data" data={fileName} />
        {/* <DataInformation label="Team" data={teamName} /> */}
        <DataInformation label="Favorite Player" data={favoritePlayerName} />
      </FlexRowContainer>
      <FlexRowContainer>
        <DataInformation label="Active" data={allPlayersStatus.Active ? allPlayersStatus.Active : 0} />
        <DataInformation label="Injured" data={allPlayersStatus.Injuried ? allPlayersStatus.Injuried : 0} />
        <DataInformation label="Practice Squad" data={allPlayersStatus.Practice ? allPlayersStatus.Practice : 0} />
        <DataInformation label="Suspended" data={allPlayersStatus.Suspended ? allPlayersStatus.Suspended : 0} />
      </FlexRowContainer>
      <ButtonBar />
    </FlexColumnContainer>
  );
};

export default Complete;
