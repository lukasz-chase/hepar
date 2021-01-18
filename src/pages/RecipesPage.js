import React, { useEffect, useState, useRef } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadRecipes } from "../actions/recipesAction";
//components
import Card from "../components/Card";

const RecipesPage = () => {
  //state
  const [sort, setSort] = useState("popularity");
  const [number, setNumber] = useState("10");
  const [diet, setDiet] = useState("");
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    dispatch(loadRecipes(sort, number, diet));
  }, [dispatch, sort, number, diet]);
  //get data back
  const { recipes } = useSelector((state) => state.recipes);
  console.log(recipes);
  //ref
  const sortSelect = useRef(null);
  const numberSelect = useRef(null);
  const dietSelect = useRef(null);
  //handlers
  const sortHandler = () => {
    setSort(sortSelect.current.options[sortSelect.current.selectedIndex].value);
  };
  const numberHandler = () => {
    setNumber(
      numberSelect.current.options[numberSelect.current.selectedIndex].value
    );
  };
  const dietHandler = () => {
    setDiet(dietSelect.current.options[dietSelect.current.selectedIndex].value);
  };
  return (
    <div className="recipesPage">
      <div className="recipesPage-component">
        <div className="recipesPage-header">
          <h1>Recipes</h1>
          <div className="recipesPage-header-sort">
            <span>Sort by</span>
            <select name="" id="" ref={sortSelect} onChange={sortHandler}>
              <option value="popularity">popularity</option>
              <option value="healthiness">healthiness</option>
              <option value="time">time</option>
              <option value="calories">calories</option>
              <option value="energy">energy</option>
              <option value="carbs">carbs</option>
              <option value="cholesterol">cholesterol</option>
              <option value="protein">protein</option>
              <option value="sugar">sugar</option>
            </select>
          </div>
          <div className="recipesPage-header-sort">
            <span>Number of results</span>
            <select name="" id="" ref={numberSelect} onChange={numberHandler}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="recipesPage-header-sort">
            <span>Sort by diets</span>
            <select name="" id="" ref={dietSelect} onChange={dietHandler}>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Ketogenic">Ketogenic</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Paleo">Paleo</option>
              <option value="Primal">Primal</option>
              <option value="Whole30">Whole30</option>
            </select>
          </div>
        </div>
        <div className="recipesPage-items">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              img={recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
