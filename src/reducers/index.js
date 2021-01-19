import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import recipeReducer from "./recipeReducer";
import searchReducer from "./searchReducer";
import recipesReducer from "./recipesReducer";
import jokeReducer from "./jokeReducer";
import answerReducer from "./answerReducer";
import triviaReducer from "./triviaReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  recipe: recipeReducer,
  searched: searchReducer,
  recipes: recipesReducer,
  joke: jokeReducer,
  answer: answerReducer,
  trivia: triviaReducer,
});

export default rootReducer;
