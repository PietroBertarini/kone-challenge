import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
                <HeaderTableRow>
                  {tableHeaderKeys.map((key) => (<HeaderTableText>{key}</HeaderTableText>))}
                </HeaderTableRow>
              </TableHeader>
              <TableBody>
                <DataTableRow>
                  {tableHeaderKeys.map((key) => (
                    <DataTableText isFavoritePlayer>{favoritePlayer[key]}</DataTableText>
                  ))}
                </DataTableRow>
                {data.map((row, index) => {
                  if (index !== favoritePlayerIndex) {
                    return (
                      <DataTableRow>
                        {
                            tableHeaderKeys.map((key) => (<DataTableText>{row[key]}</DataTableText>))
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
