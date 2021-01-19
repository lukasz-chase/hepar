import axios from "axios";
import { searchURL } from "../api";

export const fetchSearch = (text, number) => async (dispatch) => {
  const searchFood = await axios.get(searchURL(text, number));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchFood.data,
    },
  });
};
