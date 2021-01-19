import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";
import searchReducer from "./searchReducer";
import recipesReducer from "./recipesReducer";
import jokeReducer from "./jokeReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
  searched: searchReducer,
  recipes: recipesReducer,
  joke: jokeReducer,
});

export default rootReducer;
