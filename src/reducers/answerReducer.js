const initState = {
  answer: [],
};

const answerReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ANSWER":
      return {
        ...state,
        answer: action.payload.answer,
      };
    default:
      return { ...state };
  }
};

export default answerReducer;
