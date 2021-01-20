import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadJoke } from "../actions/jokeAction";
//components
import SmallPage from "../components/SmallPage";

const JokePage = () => {
  //state
  const [loadNew, setLoadNew] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJoke());
  }, [dispatch, loadNew]);
  const { joke } = useSelector((state) => state.joke);
  return (
    <SmallPage
      text={"Your Random Food Joke:"}
      item={joke.text}
      loadNew={loadNew}
      setLoadNew={setLoadNew}
    />
  );
};

export default JokePage;
