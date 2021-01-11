import React, { useEffect } from "react";
import "./styles/app.scss";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { loadPlayers } from "./actions/playersAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlayers());
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
