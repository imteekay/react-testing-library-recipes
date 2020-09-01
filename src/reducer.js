export const fetchActionType = {
  FETCH_INIT: 'FETCH_INIT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

export const fetchStatuses = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  ERROR: 'error'
}

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case fetchActionType.FETCH_INIT:
      return {
        ...state,
        status: fetchStatuses.LOADING,
      };
    case fetchActionType.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStatuses.RESOLVED,
        data: action.payload,
      };
    case fetchActionType.FETCH_ERROR:
      return {
        ...state,
        status: fetchStatuses.ERROR,
      };
    default:
      return state;
  }
};
