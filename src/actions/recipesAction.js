import axios from "axios";
import { recipesURL } from "../api";

//Action Creator

export const loadRecipes = (
  item,
  diet,
  cuisine,
  intolerances,
  number
) => async (dispatch) => {
  //FETCH AXIOS
  const recipesData = await axios.get(
    recipesURL(item, number, cuisine, intolerances, diet)
  );
  dispatch({
    type: "FETCH_RECIPES",
    payload: {
      recipes: recipesData.data.results,
    },
  });
};
