import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
//components
import Card from "../components/Card";

const BreakfastPage = () => {
  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  //get data back
  const { breakfast } = useSelector((state) => state.meals);
  console.log(breakfast);
  return (
    <div className="breakfast">
      <div className="breakfast-container">
        {breakfast.map((meal) => (
          <Card key={meal.id} />
        ))}
      </div>
    </div>
  );
};

export default BreakfastPage;
