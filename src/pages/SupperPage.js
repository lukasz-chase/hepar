import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
//components
import MealPage from "../components/mealPage";

const SupperPage = () => {
  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  //get data back
  const { supper } = useSelector((state) => state.meals);
  return (
    <div className="breakfast">
      <MealPage meal={supper} title={"Supper recipes"} />
    </div>
  );
};

export default SupperPage;
