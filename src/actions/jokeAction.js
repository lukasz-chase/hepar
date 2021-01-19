import axios from "axios";
import { jokeURL } from "../api";

export const loadJoke = () => async (dispatch) => {
  const jokeData = await axios.get(jokeURL());
  dispatch({
    type: "FETCH_JOKE",
    payload: {
      joke: jokeData.data,
    },
  });
};
