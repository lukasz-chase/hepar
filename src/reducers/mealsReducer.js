const initState = {
  breakfast: [],
  dinner: [],
  supper: [],
};

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return {
        ...state,
        breakfast: action.payload.breakfast,
        dinner: action.payload.dinner,
        supper: action.payload.supper,
      };
    default:
      return { ...state };
  }
};

export default mealsReducer;
