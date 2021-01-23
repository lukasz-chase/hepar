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
import RecipesPage from "./pages/RecipesPage";
import JokePage from "./pages/JokePage";
import TriviaPage from "./pages/TriviaPage";
//component
import Nav from "./components/Nav";
import ChatBot from "./components/chatBot";

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
      <Route path="/recipes" exact>
        <RecipesPage />
      </Route>
      <Route path="/joke" exact>
        <JokePage />
      </Route>
      <Route path="/trivia" exact>
        <TriviaPage />
      </Route>
      <ChatBot />
    </div>
  );
}

export default App;
