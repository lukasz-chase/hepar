import axios from "axios";
import { chatBotURL } from "../api";

export const sendMessageToChatBot = (text) => async (dispatch) => {
  if (!text) return;
  const chatBotData = await axios.get(chatBotURL(text));
  dispatch({
    type: "FETCH_CHATBOT",
    payload: chatBotData.data,
  });
};
