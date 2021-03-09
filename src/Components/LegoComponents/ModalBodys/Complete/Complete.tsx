import React from 'react';
import { useSelector } from 'react-redux';

import { IModalState } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../Redux/root-reducer';
import ButtonBar from '../../ButtonBar/ButtonBar';
import { FlexColumnContainer, FlexRowContainer } from '../UploadData/UploadData.styles';
import { BodyHeaderPlayer } from '../PlayerStatus/PlayerStatus.styles';
import {
  DataContainer, DataText, Label,
} from './Complete.styles';
import { getPlayersStatusCount } from './Complete.utils';

const Complete = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const {
    data, fileName, favoritePlayerIndex, teamName,
  } = modalRedux;
  const favoritePlayerName = favoritePlayerIndex ? data[favoritePlayerIndex]['Player Name'] : 'Nobody';
  const allPlayersStatusCount = getPlayersStatusCount(data);
  return (
    <FlexColumnContainer>
      <BodyHeaderPlayer>Summary</BodyHeaderPlayer>
      <FlexRowContainer>
        <DataInformation
          label="Data"
          data={fileName}
        />
        <DataInformation
          label="Team"
          data={teamName}
        />
        <DataInformation
          label="Favorite Player"
          data={favoritePlayerName}
        />
      </FlexRowContainer>
      <FlexRowContainer>
        <DataInformation
          label="Active"
          data={allPlayersStatusCount.Active ? allPlayersStatusCount.Active : 0}
        />
        <DataInformation
          label="Injured"
          data={allPlayersStatusCount.Injuried ? allPlayersStatusCount.Injuried : 0}
        />
        <DataInformation
          label="Practice Squad"
          data={allPlayersStatusCount.Practice ? allPlayersStatusCount.Practice : 0}
        />
        <DataInformation
          label="Suspended"
          data={allPlayersStatusCount.Suspended ? allPlayersStatusCount.Suspended : 0}
        />
      </FlexRowContainer>
      <ButtonBar />
    </FlexColumnContainer>
  );
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

export default Complete;
