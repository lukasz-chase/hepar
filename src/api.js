const apiKey = "?apiKey=f91e93a03c524f8a94b35fd483426a86";

const mainURL = `https://api.spoonacular.com/recipes/complexSearch${apiKey}`;
export const mealTypeURL = (type) => `${mainURL}&type=${type}`;
export const recipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/information${apiKey}&includeNutrition=true`;
export const similarRecipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/similar${apiKey}`;
export const searchURL = (item, number) =>
  `https://api.spoonacular.com/food/search${apiKey}&query=${item}&number=${number}`;
export const recipesURL = (item, diet, number) =>
  `${mainURL}&sort=${item}&diet=${diet}&number=${number}`;
export const quickAnswerURL = (query) =>
  `https://api.spoonacular.com/recipes/quickAnswer${apiKey}&q=${query}`;
export const jokeURL = () =>
  `https://api.spoonacular.com/food/jokes/random${apiKey}`;
export const triviaURL = () =>
  `https://api.spoonacular.com/food/trivia/random${apiKey}`;
export const chatBotURL = (text) =>
  `https://api.spoonacular.com/food/converse${apiKey}&text=${text}`;
