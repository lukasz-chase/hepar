import React, { useEffect, useState, useRef } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Card from "../components/Card";
//actions
import { fetchSearch } from "../actions/searchAction";

const SearchedPage = () => {
  //useState
  const [number, setNumber] = useState(10);
  //getting data
  const { searched } = useSelector((state) => state.searched);
  //ref
  const searchNumber = useRef(null);
  //handlers
  const numberHandler = () => {
    setNumber(
      searchNumber.current.options[searchNumber.current.selectedIndex].value
    );
  };
  //dispatch and axios
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearch(searched.query, number));
  }, [dispatch, number]);

  return (
    <>
      {searched.searchResults ? (
        <div className="searched">
          <div className="searched-component">
            <span className="results-amount">Results for {searched.query}</span>
            <div className="searchedPage-header">
              <span>Choose results amount</span>
              <select name="" id="" ref={searchNumber} onChange={numberHandler}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
            </div>
            {searched.searchResults.map((type) => (
              <div className="searched-item" key={type.name}>
                <h1>{type.name !== "Simple Foods" ? type.name : ""}</h1>
                {type.results.length && type.name !== "Simple Foods" ? (
                  <div className="items-type">
                    {type.results.map((item, index) => (
                      <Card
                        key={index + item.id}
                        id={item.id}
                        title={item.name}
                        img={item.image}
                        link={item.link}
                      />
                    ))}
                  </div>
                ) : (
                  " not found"
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchedPage;
