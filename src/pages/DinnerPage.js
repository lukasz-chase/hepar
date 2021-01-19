import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
//components
import MealPage from "../components/mealPage";

const DinnerPage = () => {
  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  //get data back
  const { dinner } = useSelector((state) => state.meals);
  return (
    <div className="breakfast">
      <MealPage meal={dinner} title={"Dinner recipes"} />
    </div>
  );
};

export default DinnerPage;
