import {
  EModalActionType, EModalActionTypes, EProgressStepOfModal, IModalState,
} from './Modal.types';

export const INITIAL_STATE : IModalState = {
  progressStep: EProgressStepOfModal.UPLOAD_DATA,
};

export default function modalReducer(
  state: IModalState = INITIAL_STATE, action: EModalActionType,
) {
  switch (action.type) {
    case EModalActionTypes.NEXT_PROGRESS_STEP:
      return {
        ...state,
        progressStep: state.progressStep + 1,
      };
    case EModalActionTypes.BACK_PROGRESS_STEP:
      return {
        ...state,
        progressStep: state.progressStep - 1,
      };
    case EModalActionTypes.UPDATE_MODAL_DATA:
      return {
        ...state,
        data: action.payload.data,
        fileName: action.payload.fileName,
        error: undefined,
      };
    case EModalActionTypes.UPDATE_MODAL_ERROR:
      return {
        ...state,
        error: action.payload.error,
        fileName: action.payload.fileName,
        data: undefined,
      };
    case EModalActionTypes.UPDATE_FAVORITE_PLAYER_INDEX:
      return {
        ...state,
        favoritePlayerIndex: action.payload.index,
      };
    case EModalActionTypes.UPDATE_TEAM_NAME:
      return {
        ...state,
        teamName: action.payload.teamName,
      };
    default:
      return state;
  }
}
