import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";
import searchReducer from "./searchReducer";
import recipesReducer from "./recipesReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
  searched: searchReducer,
  recipes: recipesReducer,
});

export default rootReducer;
