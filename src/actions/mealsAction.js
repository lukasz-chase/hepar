import axios from "axios";
import { mealTypeURL } from "../api";

//Action Creator

export const loadMeals = () => async (dispatch) => {
  //FETCH AXIOS
  const breakfastData = await axios.get(mealTypeURL("breakfast"));
  const dinnerData = await axios.get(mealTypeURL("dinner"));
  const supperData = await axios.get(mealTypeURL("supper"));
  dispatch({
    type: "FETCH_MRALS",
    payload: {
      breakfast: breakfastData,
      dinner: dinnerData,
      supper: supperData,
    },
  });
};
