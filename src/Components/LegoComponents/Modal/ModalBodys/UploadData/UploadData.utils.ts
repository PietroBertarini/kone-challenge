import { EModalError, IError } from '../../../../../Redux/LegoComponents/Modal/Modal.types';
import { store } from '../../../../../Redux/store';
import { updateModalData, updateModalError } from '../../../../../Redux/LegoComponents/Modal/Modal.actions';

/**
 * Check if the upload have any error or have a missing value, if true, return a IError.
 * @param data: Data from csv
 */
export function checkCsvErrors(data: any) : IError | undefined {
  if (data.errors) {
    return {
      code: EModalError.UPLOAD_ERROR,
      errorMsg: 'An error occurred while uploading the file. Please ensure your .xsv has a complete information',
      errorHeader: 'Upload Failed',
    };
  }
  const arrayOfBooleans = data.map((rowOfCsv) => Object.values(rowOfCsv.data).includes(''));
  const haveAnyEmptyField = arrayOfBooleans.includes(true);
  if (haveAnyEmptyField) {
    return {
      code: EModalError.MISSING_FIELD,
      errorMsg: 'One of records has a missing value of one columns. Please ensure your .xsv has a complete information',
      errorHeader: 'Missing Value',
    };
  }
  return undefined;
}

/**
 * Handle when the upload is success our failed, saving at redux store the result.
 * @param data: Data from csv
 * @param file: File that client upload to the SPA.
 */
export function handleOnFileLoad(data: any, file: any) {
  const haveSomeError = checkCsvErrors(data);
  if (haveSomeError) {
    store.dispatch(updateModalError(haveSomeError, file.name));
  } else {
    const jsonOfCsv = data.map((rowOfCsv) => rowOfCsv.data);
    store.dispatch(updateModalData(jsonOfCsv, file.name));
  }
};

/**
 * Handle when the upload have a error in the papaparse, saving the error at the redux store.
 * @param err: Param from papaparse.
 * @param file: File that user try to upload.
 * @param inputElem: Param from papaparse.
 * @param reason: Param from papaparse.
 */
export function handleOnError(err : any, file: any, inputElem : any, reason : any) {
  store.dispatch(updateModalError({
    code: EModalError.UPLOAD_ERROR,
    errorMsg: 'One of records has a missing value of one columns. Please ensure your .xsv has a complete information',
    errorHeader: 'Upload Failed',
  }, file.name));
};
