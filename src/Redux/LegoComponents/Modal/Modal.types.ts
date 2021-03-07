export enum EModalActionTypes {
  NEXT_PROGRESS_STEP = 'NEXT_PROGRESS_STEP',
  CHANGE_PROGRESS_STEP = 'CHANGE_PROGRESS_STEP',
  UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA',
}

export interface IChangeModalProgress {
  type: typeof EModalActionTypes.CHANGE_PROGRESS_STEP,
  payload: EProgressStepOfModal
}
export interface IUpdateModalData {
  type: typeof EModalActionTypes.UPDATE_MODAL_DATA,
  payload: any
}
export interface INextModalProgress {
  type: typeof EModalActionTypes.NEXT_PROGRESS_STEP
}

export type EModalActionType = INextModalProgress | IChangeModalProgress | IUpdateModalData

export interface IModalState {
  progressStep: EProgressStepOfModal,
  data: any, // update to a type in a future
}
export enum EProgressStepOfModal {
  UPLOAD_FAILED,
  UPLOAD_DATA,
  UPLOAD_SUCCESS,
  PLAYER_STATUS,
  FAVORITE,
  COMPLETE,
}
