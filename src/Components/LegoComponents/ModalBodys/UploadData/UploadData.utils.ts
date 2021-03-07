import { EModalError, IError } from '../../../../Redux/LegoComponents/Modal/Modal.types';

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
