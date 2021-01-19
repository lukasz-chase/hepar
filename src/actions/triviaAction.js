import axios from "axios";
import { triviaURL } from "../api";

export const loadTrivia = () => async (dispatch) => {
  const triviaData = await axios.get(triviaURL());
  dispatch({
    type: "FETCH_TRIVIA",
    payload: {
      trivia: triviaData.data,
    },
  });
};
