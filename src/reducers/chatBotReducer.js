// ! this is the chatBot object. If you write it like it was earlier you "wrap" it in another object
// ! e.g. chatBot = { chatBot = { your desired values here } }
// ! but you want something like this: chatBot = { your desired values here }
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
