const initState = {
  joke: [],
};

const jokeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_JOKE":
      return {
        ...state,
        joke: action.payload.joke,
      };
    default:
      return { ...state };
  }
};

export default jokeReducer;
