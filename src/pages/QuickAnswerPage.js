import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadAnswer } from "../actions/answerAction";

const QuickAnswerPage = () => {
  //state
  const [text, setText] = useState("");
  //redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAnswer(text));
  }, [dispatch, text]);
  //getting data
  const { answer } = useSelector((state) => state.answer);
  console.log(answer);
  //handlers
  const textHandler = (e) => {
    setText(e.target.value);
  };
  //   const submitQuestion = (e) => {
  //     e.preventDefault();
  //     dispatch(loadAnswer(text));
  //   };
  return (
    <div className="answerPage">
      <div className="answerPage-component">
        <div className="answerPage-header">
          {/* <form> */}
          <input
            type="text"
            placeholder="question"
            value={text}
            onChange={textHandler}
          />
          {/* <button type="submit" onClick={submitQuestion}>
              submit
            </button>
          </form> */}
        </div>
        <div className="answerPage-article">
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswerPage;
