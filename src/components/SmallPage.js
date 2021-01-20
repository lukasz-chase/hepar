import React from "react";

const SmallPage = ({ text, item, setLoadNew, loadNew }) => {
  return (
    <div className="smallPage">
      <div className="smallPage-component">
        <h1>{text}</h1>
        <div className="item">{item}</div>
        <div className="another-item" onClick={() => setLoadNew(!loadNew)}>
          Another One
        </div>
      </div>
    </div>
  );
};

export default SmallPage;
