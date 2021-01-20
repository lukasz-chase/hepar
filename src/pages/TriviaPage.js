import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadTrivia } from "../actions/triviaAction";
//components
import SmallPage from "../components/SmallPage";

const TriviaPage = () => {
  //state
  const [loadNew, setLoadNew] = useState(false);
  //dispatch, axios
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTrivia());
  }, [dispatch, loadNew]);
  //data
  const { trivia } = useSelector((state) => state.trivia);
  //render
  return (
    <SmallPage
      text={"Your Random Food Trivia:"}
      item={trivia.text}
      loadNew={loadNew}
      setLoadNew={setLoadNew}
    />
  );
};

export default TriviaPage;
