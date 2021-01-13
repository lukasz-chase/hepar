import React, { useEffect } from "react";
//components
import MealPage from "../components/mealPage";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";

const BreakfastPage = () => {
  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  //get data back
  const { breakfast } = useSelector((state) => state.meals);
  return (
    <div className="breakfast">
      <MealPage meal={breakfast} title={"Breakfast recipes"} />
    </div>
  );
};

export default BreakfastPage;
