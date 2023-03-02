const initial = {
  translatedText: "",
  isLoading: false,
  error: "",
};

const apiReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        isLoading: true,
      };
    case "LOAD_SUC":
      return {
        ...state,
        translatedText: action.payload,
        isLoading: false,
      };
    case "LOAD_FAIL":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default apiReducer;