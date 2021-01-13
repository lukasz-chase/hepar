import React from "react";

//components
import Card from "../components/Card";

const MealPage = ({ meal, title }) => {
  return (
    <div className="mealPage">
      <h1>{title}</h1>
      <div className="mealPage-container">
        {meal.map((food) => (
          <Card
            key={food.id}
            id={food.id}
            title={food.title}
            img={food.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MealPage;
