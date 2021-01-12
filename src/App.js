import React, { useEffect } from "react";
import "./styles/app.scss";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { loadMeals } from "./actions/mealsAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
