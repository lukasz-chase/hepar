import axios from "axios";
import { searchURL } from "../api";

export const fetchSearch = (text) => async (dispatch) => {
  const searchFood = await axios.get(searchURL(text));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchFood.data.searchResults,
    },
  });
};
