import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
//components
import Card from "../components/Card";

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
      <div className="breakfast-container">
        {supper.map((meal) => (
          <Card key={meal.id} />
        ))}
      </div>
    </div>
  );
};

export default SupperPage;
