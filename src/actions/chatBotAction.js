import axios from "axios";
import { chatBotURL } from "../api";

export const sendMessageToChatBot = (text) => async (dispatch) => {
  // after we clear text state we dont want to send empty question to the API, so we just return if text === ""
  if (!text) return;

  const chatBotData = await axios.get(chatBotURL(text));
  dispatch({
    type: "FETCH_CHATBOT",
    payload: chatBotData.data,
  });
};
