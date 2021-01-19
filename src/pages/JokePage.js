import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadJoke } from "../actions/jokeAction";

const JokePage = () => {
  //state
  const [loadNew, setLoadNew] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJoke());
  }, [dispatch, loadNew]);
  const { joke } = useSelector((state) => state.joke);
  return (
    <div className="jokePage">
      <div className="jokePage-component">
        <h1>Your Random Food Joke:</h1>

        <div className="joke">{joke.text}</div>
        <div className="another-joke" onClick={() => setLoadNew(!loadNew)}>
          Another One
        </div>
      </div>
    </div>
  );
};

export default JokePage;
