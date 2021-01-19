import axios from "axios";
import { recipeURL, similarRecipeURL } from "../api";

//Action Creator

export const loadRecipe = (id) => async (dispatch) => {
  //FETCH AXIOS
  const recipeData = await axios.get(recipeURL(id));
  const similarRecipeData = await axios.get(similarRecipeURL(id));
  dispatch({
    type: "FETCH_RECIPE",
    payload: {
      recipe: recipeData.data,
      similar: similarRecipeData.data,
    },
  });
};
