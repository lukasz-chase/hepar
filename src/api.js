const apiKey = "?apiKey=f91e93a03c524f8a94b35fd483426a86";

const mainURL = `https://api.spoonacular.com/recipes/complexSearch${apiKey}`;
export const mealTypeURL = (type) => `${mainURL}&type=${type}`;
export const recipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/information${apiKey}&includeNutrition=true`;
export const similarRecipeURL = (id) =>
  `https://api.spoonacular.com/recipes/${id}/similar${apiKey}`;
export const searchURL = (item) =>
  `https://api.spoonacular.com/food/search${apiKey}&query=${item}&number=10`;
export const recipesURL = (item, diet, number) =>
  `${mainURL}&sort=${item}&diet=${diet}&number=${number}`;
