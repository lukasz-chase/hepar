import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, img, link }) => {
  return (
    <>
      {img ? (
        <Link className="Link" to={`/recipe/${id}`}>
          <div className="card">
            <div className="card-image">
              {img ? <img src={img} alt="" /> : ""}
            </div>
            <div className="card-info">
              <span> {title}</span>
            </div>
          </div>
        </Link>
      ) : (
        <a target="_blank" href={link} className="card-link">
          {title}
        </a>
      )}
    </>
  );
};

export default Card;
