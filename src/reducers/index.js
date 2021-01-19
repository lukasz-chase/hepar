import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";
import searchReducer from "./searchReducer";
import recipesReducer from "./recipesReducer";
import jokeReducer from "./jokeReducer";
import answerReducer from "./answerReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
  searched: searchReducer,
  recipes: recipesReducer,
  joke: jokeReducer,
  answer: answerReducer,
});

export default rootReducer;
