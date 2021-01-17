import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
  searched: searchReducer,
});

export default rootReducer;
