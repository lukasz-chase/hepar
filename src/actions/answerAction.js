import axios from "axios";
import { quickAnswerURL } from "../api";

export const loadAnswer = (query) => async (dispatch) => {
  const answerData = await axios.get(quickAnswerURL(query));
  dispatch({
    type: "FETCH_ANSWER",
    payload: {
      answer: answerData.data,
    },
  });
};
