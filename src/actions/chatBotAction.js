import axios from "axios";
import { chatBotURL } from "../api";

export const loadChatBot = (text) => async (dispatch) => {
  const chatBotData = await axios.get(chatBotURL(text));
  dispatch({
    type: "FETCH_CHATBOT",
    payload: {
      chatBot: chatBotData.data,
    },
  });
};
