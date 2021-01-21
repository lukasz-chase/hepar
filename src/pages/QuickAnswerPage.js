import React, { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadAnswer } from "../actions/answerAction";

const QuickAnswerPage = () => {
  //state
  const [text, setText] = useState("");
  //redux
  const dispatch = useDispatch();

  //handlers
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(loadAnswer(text));
    setText("");
  };
  //getting data
  const { answer } = useSelector((state) => state.answer);

  return (
    <div className="answerPage">
      <div className="answerPage-component">
        <div className="answerPage-header">
          <form action="">
            <input
              type="text"
              placeholder="question"
              value={text}
              onChange={textHandler}
            />

            <button onClick={submitSearch}>Ask</button>
            <p>Your questions need to end with "?"</p>
          </form>
        </div>
        <div className="answerPage-article">
          <span>{answer ? answer.answer : "Ask away"}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswerPage;
