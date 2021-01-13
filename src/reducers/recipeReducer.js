const initState = {
  recipe: [],
  isLoading: true,
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RECIPE":
      return {
        ...state,
        recipe: action.payload.recipe,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default recipeReducer;
