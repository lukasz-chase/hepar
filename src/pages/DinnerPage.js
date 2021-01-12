import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
//components
import Card from "../components/Card";

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
      <div className="breakfast-container">
        {dinner.map((meal) => (
          <Card key={meal.id} />
        ))}
      </div>
    </div>
  );
};

export default DinnerPage;
