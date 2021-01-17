import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Card from "../components/Card";
//actions
import { fetchSearch } from "../actions/searchAction";

const SearchedPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);
  const { searched } = useSelector((state) => state.searched);
  console.log(searched);
  return (
    <>
      {searched ? (
        <div className="searched">
          <div className="searched-component">
            {searched.map((type) => (
              <div className="searched-item" key={type.name}>
                <h1>{type.name}</h1>
                {type.results.length ? (
                  <>
                    {type.results.map((item) => (
                      <div className="items">
                        <Card
                          key={item.id}
                          id={item.id}
                          title={item.name}
                          img={item.image}
                          link={item.link}
                        />
                      </div>
                    ))}
                  </>
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
