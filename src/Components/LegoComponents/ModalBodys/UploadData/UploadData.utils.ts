import { EModalError, IError } from '../../../../Redux/LegoComponents/Modal/Modal.types';
import { store } from '../../../../Redux/store';
import { updateModalData, updateModalError } from '../../../../Redux/LegoComponents/Modal/Modal.actions';

export function checkCsvErrors(data: any) : IError | undefined {
  if (data.errors) {
    return {
      code: EModalError.UPLOAD_ERROR,
      error: data.errors,
    };
  }
  const arrayOfBooleans = data.map((cellOfCsv) => cellOfCsv.data.includes(''));
  const haveAnyEmptyField = arrayOfBooleans.includes(true);
  if (haveAnyEmptyField) {
    return {
      code: EModalError.MISSING_FIELD,
      error: 'One of records has a missing value of one columns. Please ensure your .xsv has a complete information',
    };
  }
  return undefined;
}

export function handleOnFileLoad(data: any, file: any) {
  const haveSomeError = checkCsvErrors(data);
  if (haveSomeError) {
    store.dispatch(updateModalError(haveSomeError, file.name));
  } else {
    store.dispatch(updateModalData(data, file.name));
  }
};
export function handleOnError(err : any, file: any, inputElem : any, reason : any) {
  store.dispatch(updateModalError({
    code: EModalError.UPLOAD_ERROR,
    error: err,
  }, file.name));
};
