const initState = {
  recipes: [],
  isLoading: true,
};

const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        recipes: action.payload.recipes,
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

export default recipesReducer;
