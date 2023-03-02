const initialState = {
  exportData: null,
  exportDataError: null,
};

const exportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPORT_DATA_SUCCESS':
      return {
        ...state,
        exportData: action.payload,
        exportDataError: null,
      };
    case 'EXPORT_DATA_ERROR':
      return {
        ...state,
        exportData: null,
        exportDataError: action.error,
      };
    default:
      return state;
  }
};
export default exportReducer;