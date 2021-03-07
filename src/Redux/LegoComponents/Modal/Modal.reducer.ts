import {
  EModalActionType, EModalActionTypes, EProgressStateOfModal, IModalState,
} from './Modal.types';

const INITIAL_STATE : IModalState = {
  progress: EProgressStateOfModal.UPLOAD_DATA,
  data: [],
};

export default function modalReducer(
  state: IModalState = INITIAL_STATE, action: EModalActionType,
) {
  switch (action.type) {
    case EModalActionTypes.CHANGE_PROGRESS_STATE:
      return {
        ...state,
        progress: action.payload,
      };
    case EModalActionTypes.UPDATE_MODAL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case EModalActionTypes.NEXT_PROGRESS_STATE:
      return {
        ...state,
        progress: state.progress + 1,
      };
    default:
      return state;
  }
}
