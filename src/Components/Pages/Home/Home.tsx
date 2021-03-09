import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ImportButton, Logo, Navbar } from './Home.styles';
import Modal from '../../LegoComponents/Modal/Modal';
import { EProgressStepOfModal, IModalState } from '../../../Redux/LegoComponents/Modal/Modal.types';
import { rootState } from '../../../Redux/root-reducer';
import { cleanModalState } from '../../../Redux/LegoComponents/Modal/Modal.actions';
import { FlexColumnContainer } from '../../LegoComponents/Modal/ModalBodys/UploadData/UploadData.styles';
import {
  DataTableRow, DataTableText, HeaderTableRow, HeaderTableText,
  OverflowWrapper, Table, TableBody, TableHeader,
} from '../../LegoComponents/Table/Table.styles';

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const modalRedux : IModalState = useSelector((state : rootState) => state.modal);
  const {
    progressStep, teamName, data, favoritePlayerIndex,
  } = modalRedux;

  const tableHeaderKeys = data ? Object.keys(data[0]) : [];
  const favoritePlayer = data && favoritePlayerIndex !== undefined ? data[favoritePlayerIndex] : [];

  return (
    <>
      <Navbar>
        <Logo>{teamName || 'My Team'}</Logo>
        <ImportButton onClick={() => {
          if (progressStep > EProgressStepOfModal.COMPLETE) dispatch(cleanModalState());
          setIsOpen(true);
        }}
        >
          Import Team
        </ImportButton>
        {progressStep <= EProgressStepOfModal.COMPLETE && (
          <Modal open={isOpen} onClose={() => setIsOpen(false)} />)}
      </Navbar>
      {data && progressStep > EProgressStepOfModal.COMPLETE && (
        <FlexColumnContainer>
          <OverflowWrapper>
            <Table>
              <TableHeader>
                <HeaderTableRow key={uuidv4()}>
                  {tableHeaderKeys.map((key) => (<HeaderTableText key={uuidv4()}>{key}</HeaderTableText>))}
                </HeaderTableRow>
              </TableHeader>
              <TableBody>
                <DataTableRow key={uuidv4()}>
                  {tableHeaderKeys.map((key) => (
                    <DataTableText key={uuidv4()} isFavoritePlayer>{favoritePlayer[key]}</DataTableText>
                  ))}
                </DataTableRow>
                {data.map((row, index) => {
                  if (index !== favoritePlayerIndex) {
                    return (
                      <DataTableRow key={uuidv4()}>
                        {
                            tableHeaderKeys.map((key) => (<DataTableText key={uuidv4()}>{row[key]}</DataTableText>))
                          }
                      </DataTableRow>
                    );
                  }
                  return (<></>);
                })}
              </TableBody>
            </Table>
          </OverflowWrapper>
        </FlexColumnContainer>
      )}
    </>
  );
};

export default Home;
