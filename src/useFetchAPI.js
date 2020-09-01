import { useEffect, useReducer } from 'react';
import { fetchReducer, fetchActionType, fetchStatuses } from './reducer';

export const useFetchAPI = (url) => {
  const initialState = {
    status: fetchStatuses.IDLE,
    data: {},
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: fetchActionType.FETCH_INIT });

      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
          type: fetchActionType.FETCH_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({ type: fetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, [url]);

  const { status, data } = state;
  const hasError = status === fetchStatuses.ERROR;
  const isLoading = status === fetchStatuses.LOADING;
  const isResolved = status === fetchStatuses.RESOLVED;

  return { hasError, isLoading, isResolved, data };
};
