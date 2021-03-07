/* Modal Types */
export enum EProgressStepOfModal {
  UPLOAD_DATA,
  PLAYER_STATUS,
  FAVORITE,
  COMPLETE,
}
export enum EModalError {
  MISSING_FIELD,
  UPLOAD_ERROR,
}
export interface IError {
  code: EModalError,
  errorMsg: string,
  errorHeader: string,
}

/* Modal Redux Types */
export enum EModalActionTypes {
  NEXT_PROGRESS_STEP = 'NEXT_PROGRESS_STEP',
  BACK_PROGRESS_STEP = 'BACK_PROGRESS_STEP',
  UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA',
  UPDATE_MODAL_ERROR = 'UPDATE_MODAL_ERROR',
}

export interface IBackModalProgress {
  type: typeof EModalActionTypes.BACK_PROGRESS_STEP,
}
export interface IUpdateModalData {
  type: typeof EModalActionTypes.UPDATE_MODAL_DATA,
  payload: { data: any,
  fileName: string}
}
export interface IUpdateModalError {
  type: typeof EModalActionTypes.UPDATE_MODAL_ERROR,
  payload: {error: IError, fileName: string }
}
export interface INextModalProgress {
  type: typeof EModalActionTypes.NEXT_PROGRESS_STEP
}

export type EModalActionType = INextModalProgress | IBackModalProgress | IUpdateModalData | IUpdateModalError

export interface IModalState {
  progressStep: EProgressStepOfModal,
  data?: any, // update to a type in a future
  error?: IError,
  fileName?: string,
}
