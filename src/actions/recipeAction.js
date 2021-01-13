import axios from "axios";
import { recipeURL } from "../api";

//Action Creator

export const loadRecipe = (id) => async (dispatch) => {
  //FETCH AXIOS
  const recipeData = await axios.get(recipeURL(id));
  dispatch({
    type: "FETCH_RECIPE",
    payload: {
      recipe: recipeData.data,
    },
  });
};
