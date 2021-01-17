import React, { useEffect, useRef } from "react";
//import router
import { useLocation } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//action
import { loadRecipe } from "../actions/recipeAction";
//components
import Ingredient from "../components/Ingredient";
import Step from "../components/step";

const MealDetails = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipe(pathId));
  }, [dispatch, pathId]);
  //get data back
  const { recipe, isLoading } = useSelector((state) => state.recipe);
  //ref
  const fullNutrition = useRef(null);
  //handlers
  const closeIngredients = (e) => {
    if (e.target.classList.contains("full-nutrition")) {
      fullNutrition.current.style.display = "none";
    }
  };
  return (
    <>
      {!isLoading && (
        <div className="mealDetails">
          <div className="mealDetails-container">
            <h1>{recipe.title}</h1>
            <div className="mainDetails">
              <div className="meal-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="smallDetails">
                {recipe.preparationMinutes ? (
                  <p>
                    <span>Prep:</span>
                    {recipe.preparationMinutes}mins
                  </p>
                ) : (
                  ""
                )}
                <p>
                  {" "}
                  <span>total time:</span> {recipe.readyInMinutes}mins
                </p>
                <p>
                  {" "}
                  <span>servings:</span> {recipe.servings}
                </p>
                <p>
                  {" "}
                  <span>Price per serving:</span>{" "}
                  {Math.round(recipe.pricePerServing)}
                </p>

                <p>
                  <span>Diets:</span>
                  {recipe.diets
                    .map((diet) => (
                      <span
                        style={{ color: "#7c83fd", fontWeight: "normal" }}
                        key={diet}
                      >
                        {diet}
                      </span>
                    ))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
              </div>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              {recipe.extendedIngredients.map((ingredient) => (
                <Ingredient ingredient={ingredient} key={ingredient.name} />
              ))}
            </div>
            <div className="steps">
              <h2>Directions</h2>
              {recipe.analyzedInstructions[0].steps.map((step) => (
                <Step key={step.number} step={step} />
              ))}
            </div>
            <div className="nutrition">
              <h2>Nutrition in 1 serving</h2>
              {recipe.nutrition.nutrients.slice(0, 4).map((item, index) => (
                <span
                  key={item.title}
                  style={{
                    color: index % 2 ? "blue" : "black",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.title} {item.amount}
                  {item.unit}
                </span>
              ))}
              <span
                className="more"
                onClick={() => (fullNutrition.current.style.display = "flex")}
              >
                Full Nutrition
              </span>
            </div>
            <div
              className="full-nutrition"
              ref={fullNutrition}
              onClick={closeIngredients}
            >
              <div className="items">
                {recipe.nutrition.nutrients.map((item) => (
                  <span key={item.title} className="one-item">
                    {item.title} {item.amount}
                    {item.unit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealDetails;
