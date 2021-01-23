// ! see comment in chatBotReducer.js file
const initState = "";

const answerReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ANSWER":
      return action.payload.answer;
    default:
      return "";
  }
};

export default answerReducer;
