import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, img, link }) => {
  return (
    <>
      {img ? (
        <div className="card">
          <Link
            className="Link"
            to={`/recipe/${id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="card-image">
              {img ? <img src={img} alt="" /> : ""}
            </div>
            <div className="card-info">
              <span> {title}</span>
            </div>
          </Link>
        </div>
      ) : (
        <a target="_blank" href={link} rel="noreferrer" className="card-link">
          {title}
        </a>
      )}
    </>
  );
};

export default Card;
