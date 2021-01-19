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
  const [number, setNumber] = useState(10);
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [intolerances, setIntolernaces] = useState("");
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    dispatch(loadRecipes(sort, number, diet, cuisine, intolerances));
  }, [dispatch, sort, number, diet, cuisine, intolerances]);
  //get data back
  const { recipes } = useSelector((state) => state.recipes);
  //ref
  const sortSelect = useRef(null);
  const dietSelect = useRef(null);
  const cuisineSelect = useRef(null);
  const intolerancesSelect = useRef(null);
  //handlers
  const sortHandler = (set, refer) => {
    set(refer.current.options[refer.current.selectedIndex].value);
  };
  // const sortHandler = () => {
  //   setSort(sortSelect.current.options[sortSelect.current.selectedIndex].value);
  // };
  // const dietHandler = () => {
  //   setDiet(dietSelect.current.options[dietSelect.current.selectedIndex].value);
  // };
  // const cuisineHandler = () => {
  //   setCuisine(
  //     cuisineSelect.current.options[cuisineSelect.current.selectedIndex].value
  //   );
  // };
  // const intolerancesHandler = () => {
  //   setIntolernaces(
  //     intolerancesSelect.current.options[
  //       intolerancesSelect.current.selectedIndex
  //     ].value
  //   );
  // };
  return (
    <div className="recipesPage">
      <div className="recipesPage-component">
        <div className="recipesPage-header">
          <h1>Recipes</h1>
          <div className="recipesPage-sorting-component">
            <div className="recipesPage-header-sort">
              <span>Sort by</span>
              <select
                name=""
                id=""
                ref={sortSelect}
                onChange={() => sortHandler(setSort, sortSelect)}
              >
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
              <span>diets</span>
              <select
                name=""
                id=""
                ref={dietSelect}
                onChange={() => sortHandler(setDiet, dietSelect)}
              >
                <option value="">choose diet</option>
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
            <div className="recipesPage-header-sort">
              <span>Cuisines</span>
              <select
                name=""
                id=""
                ref={cuisineSelect}
                onChange={() => sortHandler(setCuisine, cuisineSelect)}
              >
                <option value="">choose cuisine</option>
                <option value="African">African</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Cajun">Cajun</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Chinese">Chinese</option>
                <option value="Eastern European">Eastern European</option>
                <option value="European">European</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Indian">Indian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Jewish">Jewish</option>
                <option value="Korean">Korean</option>
                <option value="Latin American">Latin American</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Nordic">Nordic</option>
                <option value="Southern">Southern</option>
                <option value="Spanish">Spanish</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
              </select>
            </div>
            <div className="recipesPage-header-sort">
              <span>Intolerances</span>
              <select
                name=""
                id=""
                ref={intolerancesSelect}
                onChange={() =>
                  sortHandler(setIntolernaces, intolerancesSelect)
                }
              >
                <option value="">choose intolerances</option>
                <option value="Dairy">Dairy</option>
                <option value="Egg">Egg</option>
                <option value="Gluten">Gluten</option>
                <option value="Grain">Grain</option>
                <option value="Peanut">Peanut</option>
                <option value="Seafood">Seafood</option>
                <option value="Sesame">Sesame</option>
                <option value="Shellfish">Shellfish</option>
                <option value="Soy">Soy</option>
                <option value="Sulfite">Sulfite</option>
                <option value="Tree Nut">Tree Nut</option>
                <option value="Wheat">Wheat</option>
              </select>
            </div>
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
        <div
          className="number-of-results"
          onClick={() => {
            setNumber(number + 10);
          }}
        >
          View More
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
