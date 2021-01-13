import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, img }) => {
  return (
    <Link className="Link" to={`/recipe/${id}`}>
      <div className="card">
        <div className="card-image">
          <img src={img} alt="" />
        </div>
        <div className="card-info">
          <span> {title}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
