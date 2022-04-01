import {useState, useCallback} from 'react';
interface IState<T> {
  status: 'ready' | 'loading' | 'error';
  value?: T;
  error: any;
}

export function useSingleAsync<T = any>(
  asyncFunction: (...params: (number | object | string[]) | any) => Promise<T>,
) {
  const [state, setState] = useState<IState<T>>({
    status: 'ready',
    value: undefined,
    error: null,
  });

  const onSuccess = useCallback((response: T) => {
    setState(prevState => ({
      ...prevState,
      status: 'ready',
      value: response,
    }));
    return Promise.resolve(response);
  }, []);

  const onError = useCallback((error: any) => {
    setState(prevState => ({
      ...prevState,
      status: 'error',
      error: error,
    }));
    return Promise.resolve(error);
  }, []);

  const execute = useCallback(
    (...args: (number | object | string)[]) => {
      if (!asyncFunction) {
        return;
      }
      setState(prevState => ({
        ...prevState,
        status: 'loading',
        value: undefined,
        error: null,
      }));

      return asyncFunction(...args)
        .then(onSuccess)
        .catch(onSuccess);
    },
    [asyncFunction, onSuccess, onError],
  );

  if (!asyncFunction) {
    return;
  }
  return {execute, ...state};
}
