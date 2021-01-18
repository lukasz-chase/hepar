import axios from "axios";
import { recipesURL } from "../api";

//Action Creator

export const loadRecipes = (item, diet, number) => async (dispatch) => {
  //FETCH AXIOS
  const recipesData = await axios.get(recipesURL(item, number, diet));
  dispatch({
    type: "FETCH_RECIPES",
    payload: {
      recipes: recipesData.data.results,
    },
  });
};
