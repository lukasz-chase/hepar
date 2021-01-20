const initState = {
  chatBot: [],
};

const chatBotReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CHATBOT":
      return {
        ...state,
        chatBot: action.payload.chatBot,
      };
    default:
      return { ...state };
  }
};

export default chatBotReducer;
