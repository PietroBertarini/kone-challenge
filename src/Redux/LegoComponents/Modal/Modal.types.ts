export enum EModalActionTypes {
  NEXT_PROGRESS_STATE = 'NEXT_PROGRESS_STATE',
  CHANGE_PROGRESS_STATE = 'CHANGE_PROGRESS_STATE',
  UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA',
}

export interface IChangeModalProgress {
  type: typeof EModalActionTypes.CHANGE_PROGRESS_STATE,
  payload: EProgressStateOfModal
}
export interface IUpdateModalData {
  type: typeof EModalActionTypes.UPDATE_MODAL_DATA,
  payload: any
}
export interface INextModalProgress {
  type: typeof EModalActionTypes.NEXT_PROGRESS_STATE
}

export type EModalActionType = INextModalProgress | IChangeModalProgress | IUpdateModalData

export interface IModalState {
  progress: EProgressStateOfModal,
  data: any, // update to a type in a future
}
export enum EProgressStateOfModal {
  UPLOAD_FAILED,
  UPLOAD_DATA,
  UPLOAD_SUCCESS,
  PLAYER_STATUS,
  FAVORITE,
  COMPLETE,
}
