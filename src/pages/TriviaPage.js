import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadTrivia } from "../actions/triviaAction";

const TriviaPage = () => {
  //state
  const [loadNew, setLoadNew] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTrivia());
  }, [dispatch, loadNew]);
  const { trivia } = useSelector((state) => state.trivia);
  return (
    <div className="jokePage">
      <div className="jokePage-component">
        <h1>Your Random Food Trivia:</h1>

        <div className="joke">{trivia.text}</div>
        <div className="another-joke" onClick={() => setLoadNew(!loadNew)}>
          Another One
        </div>
      </div>
    </div>
  );
};

export default TriviaPage;
