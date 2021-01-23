// const apiKey = "?apiKey=f91e93a03c524f8a94b35fd483426a86";
const apiKey = "?apiKey=d21126a4be7f4731abb8245b3da3a79b";
// const apiKey = "?apiKey=7ac5f5c783e64ad6bbf03a78e8a3568a";

const mainURL = `https://api.spoonacular.com/recipes/complexSearch${apiKey}`;
export const mealTypeURL = (type) => `${mainURL}&type=${type}`;
export const recipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/information${apiKey}&includeNutrition=true`;
export const similarRecipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/similar${apiKey}`;
export const searchURL = (item, number) =>
  `https://api.spoonacular.com/food/search${apiKey}&query=${item}&number=${number}`;
export const recipesURL = (item, diet, intolerance, cuisine, number) =>
  `${mainURL}&sort=${item}&diet=${diet}&intolerances=${intolerance}&cuisine=${cuisine}&number=${number}`;
export const jokeURL = () =>
  `https://api.spoonacular.com/food/jokes/random${apiKey}`;
export const triviaURL = () =>
  `https://api.spoonacular.com/food/trivia/random${apiKey}`;
export const chatBotURL = (text) =>
  `https://api.spoonacular.com/food/converse${apiKey}&text=${text}`;
