import React, { useState } from "react";

const Ingredient = ({ ingredient }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="ingredient" key={ingredient.name}>
        <input
          type="checkbox"
          className="check"
          onChange={(e) => setChecked(e.target.checked)} // on value change update "checked" state
        />{" "}
        {/* 
            class changes because state gets updated - to rerender component state has to change, 
            not just one property inside the object 
            for example if we had ingredient as a state and set 
            newIngredient.checked = true and setIngredient(newIngredient) 
            it wouldnt rerender, because ingredient its still the same object, doesnt matter 
            that one property changed it would work only if you would change whole object eg. setIngredient(null) 
        */}
        <span className={checked ? "item-checked" : "item-not-checked"}>
          {ingredient.name}
        </span>
      </div>
    </>
  );
};

export default Ingredient;
