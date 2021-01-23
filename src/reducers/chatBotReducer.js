const initState = {};

const chatBotReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CHATBOT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default chatBotReducer;
