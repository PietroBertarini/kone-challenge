import React from 'react';
import { useSelector } from 'react-redux';

import { IModalState } from '../../../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../../../Redux/root-reducer';
import ButtonBar from '../../../ButtonBar/ButtonBar';
import { FlexRowContainer } from '../UploadData/UploadData.styles';
import { TextTableHeader } from '../../../Table/Table.styles';
import {
  CompleteFlexColumnContainer, DataContainer, DataText, Label,
} from './Complete.styles';
import { getPlayersStatusCount } from './Complete.utils';

const Complete = () => {
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const {
    data, fileName, favoritePlayerIndex, teamName,
  } = modalRedux;
  const favoritePlayerName = favoritePlayerIndex !== undefined ? data[favoritePlayerIndex]['Player Name'] : 'Nobody';
  const allPlayersStatusCount = getPlayersStatusCount(data);

  return (
    <CompleteFlexColumnContainer>
      <TextTableHeader>Summary</TextTableHeader>
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
          data={allPlayersStatusCount.active ? allPlayersStatusCount.active : 0}
        />
        <DataInformation
          label="Injured"
          data={allPlayersStatusCount.injuried ? allPlayersStatusCount.injuried : 0}
        />
        <DataInformation
          label="Practice Squad"
          data={allPlayersStatusCount.practice ? allPlayersStatusCount.practice : 0}
        />
        <DataInformation
          label="Suspended"
          data={allPlayersStatusCount.suspended ? allPlayersStatusCount.suspended : 0}
        />
      </FlexRowContainer>
      <ButtonBar />
    </CompleteFlexColumnContainer>
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
