const apiKey = "?apiKey=f91e93a03c524f8a94b35fd483426a86";

const mainURL = `https://api.spoonacular.com/recipes/complexSearch${apiKey}`;
export const mealTypeURL = (type) => `${mainURL}&type=${type}`;
