import axios from "axios";
import { quickAnswerURL } from "../api";

export const loadAnswer = (quickAnswer) => async (dispatch) => {
  const answerData = await axios.get(quickAnswerURL(quickAnswer));
  dispatch({
    type: "FETCH_ANSWER",
    payload: {
      answer: answerData.data,
    },
  });
};
