const initState = {
  players: [],
};

const playersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PLAYERS":
      return { ...state, players: action.payload.players };
    default:
      return { ...state };
  }
};

export default playersReducer;
