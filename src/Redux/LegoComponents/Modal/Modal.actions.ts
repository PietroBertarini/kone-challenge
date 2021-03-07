import {
  EModalActionTypes,
  INextModalProgress,
  IBackModalProgress,
  IUpdateModalData,
  EProgressStepOfModal, IUpdateModalError, IError,
} from './Modal.types';

export const nextModalProgress = () : INextModalProgress => ({
  type: EModalActionTypes.NEXT_PROGRESS_STEP,
});

export const backModalProgress = (newProgressState: EProgressStepOfModal) :
    IBackModalProgress => ({
  type: EModalActionTypes.BACK_PROGRESS_STEP,
});

export const updateModalData = (newData: any, fileName: string) :
    IUpdateModalData => ({
  type: EModalActionTypes.UPDATE_MODAL_DATA,
  payload: { data: newData, fileName },
});

export const updateModalError = (newError: IError, fileName: string) :
    IUpdateModalError => ({
  type: EModalActionTypes.UPDATE_MODAL_ERROR,
  payload: { error: newError, fileName },
});
