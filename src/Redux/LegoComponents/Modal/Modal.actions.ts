import {
  EModalActionTypes,
  INextModalProgress,
  IBackModalProgress,
  IUpdateModalData,
  IUpdateModalError,
  IError, IUpdateFavoritePlayerIndex, IUpdateTeamName, ICleanModalState,
} from './Modal.types';

/**
 * Update the progress step bar to the next step, changing the body of the modal.
 */
export const nextModalProgress = () : INextModalProgress => ({
  type: EModalActionTypes.NEXT_PROGRESS_STEP,
});

/**
 * Clean the modal state to receive a new .csv file.
 */
export const cleanModalState = () : ICleanModalState => ({
  type: EModalActionTypes.CLEAN_MODAL_STATE,
});

/**
 * Update the progress step bar to the one back step, changing the body of the modal.
 */
export const backModalProgress = () :
    IBackModalProgress => ({
  type: EModalActionTypes.BACK_PROGRESS_STEP,
});

/**
 * Store or update the data from .csv with the file name.
 */
export const updateModalData = (newData: any, fileName: string) :
    IUpdateModalData => ({
  type: EModalActionTypes.UPDATE_MODAL_DATA,
  payload: { data: newData, fileName },
});

/**
 * Store or update the favorite player index to highlight.
 */
export const updateFavoritePlayerIndex = (newIndex: number) :
    IUpdateFavoritePlayerIndex => ({
  type: EModalActionTypes.UPDATE_FAVORITE_PLAYER_INDEX,
  payload: { index: newIndex },
});

/**
 * Store or update the team name that client writes at the modal.
 */
export const updateTeamName = (newTeamName: string) :
    IUpdateTeamName => ({
  type: EModalActionTypes.UPDATE_TEAM_NAME,
  payload: { teamName: newTeamName },
});

/**
 * Store or update any error at the modal, to change the modal state to a error state.
 */
export const updateModalError = (newError: IError, fileName: string) :
    IUpdateModalError => ({
  type: EModalActionTypes.UPDATE_MODAL_ERROR,
  payload: { error: newError, fileName },
});
