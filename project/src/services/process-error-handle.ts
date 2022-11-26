import {store} from '../store/store';
import {setError} from '../store/actions';


export const processErrorHandle = (errorCode: number): void => {
  store.dispatch(setError(errorCode));
};
