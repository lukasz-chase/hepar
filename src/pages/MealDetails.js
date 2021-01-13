import React, { useEffect } from "react";
//import router
import { useLocation } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadRecipe } from "../actions/recipeAction";

const MealDetails = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch data
  const dispatch = useDispatch();
  dispatch({
    type: "LOADING_DETAIL",
  });
  useEffect(() => {
    dispatch(loadRecipe(pathId));
  }, [dispatch, pathId]);
  //get data back
  const { recipe, isLoading } = useSelector((state) => state.recipe);
  console.log(recipe);
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
                {recipe.diets ? (
                  <p>
                    <span>Diets:</span>
                    {recipe.diets.map((diet) => (
                      <span
                        style={{ color: "#7c83fd", fontWeight: "normal" }}
                        key={diet}
                      >
                        {diet},
                      </span>
                    ))}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {recipe.analyzedInstructions[0].steps ? (
              <div className="steps">
                <h2>Directions</h2>
                {recipe.analyzedInstructions[0].steps.map((step) => (
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>{" "}
                    Step {step.number} <p>{step.step}</p>
                  </h3>
                ))}
              </div>
            ) : (
              ""
            )}
            <div className="ingredients">
              <h2>Ingredients</h2>
              {recipe.extendedIngredients.map((ingredient) => (
                <div className="ingredient">
                  <input type="checkbox" className="check" /> {ingredient.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealDetails;
