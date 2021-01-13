import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
});

export default rootReducer;
