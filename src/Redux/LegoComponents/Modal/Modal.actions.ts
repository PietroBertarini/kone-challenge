import {
  EModalActionTypes,
  INextModalProgress,
  IChangeModalProgress,
  IUpdateModalData,
  EProgressStepOfModal,
} from './Modal.types';

export const nextModalProgress = () : INextModalProgress => ({
  type: EModalActionTypes.NEXT_PROGRESS_STEP,
});

export const changeModalProgress = (newProgressState: EProgressStepOfModal) :
    IChangeModalProgress => ({
  type: EModalActionTypes.CHANGE_PROGRESS_STEP,
  payload: newProgressState,
});

export const updateModalData = (newData: any) :
    IUpdateModalData => ({
  type: EModalActionTypes.UPDATE_MODAL_DATA,
  payload: newData,
});
