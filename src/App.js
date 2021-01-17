import React from "react";
//styles
import "./styles/app.scss";
//pages
import Home from "./pages/Home";
import BreakfastPage from "./pages/BreakfastPage";
import DinnerPage from "./pages/DinnerPage";
import SupperPage from "./pages/SupperPage";
import MealDetails from "./pages/MealDetails";
import SearchedPage from "./pages/SearchedPage";
//component
import Nav from "./components/Nav";

//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/breakfast" exact>
        <BreakfastPage />
      </Route>
      <Route path="/dinner" exact>
        <DinnerPage />
      </Route>
      <Route path="/recipe/:id" exact>
        <MealDetails />
      </Route>
      <Route path="/supper" exact>
        <SupperPage />
      </Route>
      <Route path="/search" exact>
        <SearchedPage />
      </Route>
    </div>
  );
}

export default App;
