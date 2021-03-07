import {
  EModalActionTypes,
  EProgressStateOfModal,
  INextModalProgress,
  IChangeModalProgress,
  IUpdateModalData,
} from './Modal.types';

export const nextModalProgress = () : INextModalProgress => ({
  type: EModalActionTypes.NEXT_PROGRESS_STATE,
});

export const changeModalProgress = (newProgressState: EProgressStateOfModal) :
    IChangeModalProgress => ({
  type: EModalActionTypes.CHANGE_PROGRESS_STATE,
  payload: newProgressState,
});

export const updateModalData = (newData: any) :
    IUpdateModalData => ({
  type: EModalActionTypes.UPDATE_MODAL_DATA,
  payload: newData,
});
