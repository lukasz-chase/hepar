const initState = {
  trivia: [],
};

const triviaReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TRIVIA":
      return {
        ...state,
        trivia: action.payload.trivia,
      };
    default:
      return { ...state };
  }
};

export default triviaReducer;
