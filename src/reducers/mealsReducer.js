const initState = {
  breakfast: [],
  dinner: [],
  supper: [],
  searched: [],
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
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default mealsReducer;
