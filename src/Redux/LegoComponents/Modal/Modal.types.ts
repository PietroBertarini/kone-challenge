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
  UPDATE_FAVORITE_PLAYER_INDEX = 'UPDATE_FAVORITE_PLAYER_INDEX',
  UPDATE_TEAM_NAME = 'UPDATE_TEAM_NAME',
  CLEAN_MODAL_STATE = 'CLEAN_MODAL_STATE',
}
export interface ICleanModalState {
  type: typeof EModalActionTypes.CLEAN_MODAL_STATE,
}
export interface IBackModalProgress {
  type: typeof EModalActionTypes.BACK_PROGRESS_STEP,
}
export interface IUpdateModalData {
  type: typeof EModalActionTypes.UPDATE_MODAL_DATA,
  payload: { data: any,
  fileName: string}
}

export interface IUpdateFavoritePlayerIndex {
  type: typeof EModalActionTypes.UPDATE_FAVORITE_PLAYER_INDEX,
  payload: { index: number}
}

export interface IUpdateTeamName {
  type: typeof EModalActionTypes.UPDATE_TEAM_NAME,
  payload: { teamName: string}
}
export interface IUpdateModalError {
  type: typeof EModalActionTypes.UPDATE_MODAL_ERROR,
  payload: {error: IError, fileName: string }
}
export interface INextModalProgress {
  type: typeof EModalActionTypes.NEXT_PROGRESS_STEP
}

export type EModalActionType =
    INextModalProgress
    | IBackModalProgress
    | IUpdateModalData
    | IUpdateModalError
    | IUpdateFavoritePlayerIndex
    | IUpdateTeamName
    | ICleanModalState

export interface IModalState {
  progressStep: EProgressStepOfModal,
  data?: any, // update to a type in a future
  error?: IError,
  fileName?: string,
  favoritePlayerIndex?: number,
  teamName?: string
}
