const initial = {
  data:[],
  isLoading: false,
  error: "",
};

const fileReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOAD_FILE":
      return {
        ...state,
        isLoading: true,
      };
    case "LOAD_FILE_SUC":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "LOAD_FILE_FAIL":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default fileReducer;