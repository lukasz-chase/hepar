import React from "react";
//router
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-component">
        <div className="left-side">
          <ul>
            <li>
              <Link to="/recipes" className="Link">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/joke" className="Link">
                Food jokes
              </Link>
            </li>
            <li>Menu Items</li>
          </ul>
        </div>
        <div className="right-side">
          <div className="info">
            <div className="text">
              Welcome to <span>HEPAR</span>, milions of food, ingredients and
              products to discover.
            </div>
            <div className="image">
              <img
                src="https://image.freepik.com/free-vector/people-eating-their-food-table_23-2148473327.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="cards">
            <Link to="/breakfast" className="Link">
              <div className="card-meal">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M22.224 14.928c-.634.313-1.212.471-1.53 1.14-.371.781-.094 1.372.409 2.061.517.721-.22 1.133-1.103 1.153v-8.432l.29-.263.001.01c.428.154.503.353.539.81.073 1-.081 1.938 1.217 2.759.451.268.717.475.177.762m-4.224-5.21v10.282h-12v-10.282c-1.127-.484-2.053-1.459-1.967-2.969.148-2.593 5.123-2.755 7.836-2.773 2.908-.005 8.155.36 8.155 3.067 0 1.078-.854 2.175-2.024 2.675m-14.532 9.625c-.116-.734-.103-1.066-.614-1.61-.318-.338-.605-.474-.982-.718-.534-.347-.398-.725.107-1.09.245-.171.503-.327.734-.518.604-.497.924-1.2.742-1.94-.11-.451-.349-.747-.602-1.134-.611-.936.014-1.657.852-1.777v-.001l.295.295v8.776c-.275.003-.485-.016-.532-.283m19.801-6.19c-.579-.392-.855-.372-.908-1.07-.066-1.078-.01-2.008-1.068-2.661h-.006c.677-1.03.863-2.165.674-3.182-.671-3.626-6.103-4.213-9.792-4.24-4.588-.009-10.094.43-10.142 4.907-.011 1 .234 1.724.652 2.407l-.01-.001c-1.061.512-1.609 1.476-1.592 2.329.015.809.345 1.231.761 1.871.22.336.292.468-.231.853-.896.622-1.616 1.061-1.607 2.217.01 1.059.663 1.428 1.49 1.961.522.348.414.461.489.989.15 1.071 1.003 1.643 2.141 1.607l.004-.018c.209.695.675.869 1.4.878h13.055c.878-.002 1.34-.349 1.428-1.219l.001.001c1.8-.043 2.689-1.013 2.766-2.071.06-.837-.279-1.162-.677-1.764-.133-.215-.043-.276.179-.389.956-.467 1.724-.785 1.724-1.959 0-.665-.247-1.092-.731-1.446" />
                </svg>
                <span>breakfast</span>
              </div>
            </Link>
            <Link to="/dinner" className="Link">
              <div className="card-meal">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M23 19l.02.096c.379 1.918-.564 3.894-3.02 3.904-4.611.019-11.389 0-16 0-2.492 0-3.348-1.976-3-4h22zm-1-1h-20c-1.104 0-2-.896-2-2s.896-2 2-2h4.481c2.37.017 2.852 2.006 4.019 2 1.167-.006 1.781-1.976 3.965-2h7.535c1.104 0 2 .896 2 2s-.896 2-2 2zm-3.978-4.751c-.677 0-1.293-.308-1.837-.579-1.12-.557-1.212-.558-2.333 0-.543.271-1.159.579-1.837.579-.679 0-1.294-.308-1.838-.579-1.117-.557-1.214-.558-2.332 0-.544.271-1.159.579-1.838.579-.677 0-1.294-.308-1.837-.579-1.002-.499-1.472-.756-2.952.415-.143.114-.304.165-.462.165-.39 0-.756-.312-.756-.751 0-.219.096-.437.282-.584 2.08-1.661 3.239-1.244 4.559-.585.434.216.843.42 1.166.42.324 0 .734-.204 1.166-.42 1.543-.769 2.12-.776 3.676 0 .433.216.843.42 1.166.42.323 0 .733-.204 1.166-.42 1.543-.769 2.119-.776 3.675 0 .435.216.843.42 1.166.42.324 0 .732-.204 1.167-.42 1.301-.649 2.474-1.09 4.536.59.181.148.275.363.275.579 0 .412-.333.749-.751.749-.166 0-.334-.055-.475-.168-1.437-1.168-1.913-.909-2.914-.41-.544.271-1.16.579-1.838.579zm4.978-3.249h-22c0-4.967 4.377-9 11-9s11 4.033 11 9zm-15.5-5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-11-2c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-3 1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm9-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm3 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-6-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
                </svg>
                <span>dinner</span>
              </div>
            </Link>
            <Link to="/supper" className="Link">
              <div className="card-meal">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M20.671 12.989c-1.201-.751-1.714-.465-2.224.29-.799 1.19-1.735 1.374-3.043.796-.768-.339-1.073-.37-1.817.393-1.164 1.197-2.356 1.161-3.495-.042-.561-.594-.874-.787-1.66-.413-.366.175-.867.416-1.594.19-.791-.244-1.07-.785-1.273-1.18-.454-.877-1.273-.823-2.081-.285-.608.403-1.211-.51-.613-.913 1-.676 2.767-1.059 3.671.693.324.628.671.859 1.416.503 1.223-.587 2.049-.286 2.934.649.689.727 1.138.821 1.907.031 1.059-1.09 1.855-1.157 3.049-.633.795.353 1.173.362 1.686-.403 1.04-1.54 2.536-1.501 3.795-.557.584.437-.078 1.318-.658.881m-8.67 7.011c-5.411 0-9.001-2.207-9.001-3.667 0-.999 1.18-1.629 2.163-1.195 1 .437 3.331 1.862 6.837 1.862 3.139 0 4.862-.652 6.441-1.63 1.347-.838 2.559-.025 2.559.966 0 1.278-3.091 3.664-8.999 3.664m11.999-7.248c0-2.103-1.665-3.749-3.792-3.749-2.255.054-3.888 2.748-8.243 2.748-4.727 0-5.878-3.129-8.743-2.714-1.837.263-3.222 1.858-3.222 3.713 0 .956.445 1.821 1.175 2.587-1.215 3.623 4.246 6.663 10.826 6.663 6.807 0 11.948-3.142 10.83-6.651.726-.764 1.169-1.632 1.169-2.597m-14.03-2.752c3.384-3.229-.712-3.545.093-5.828-2.834 3.184 1.021 3.268-.093 5.828m2.983-.001c5.084-4.88-1.051-4.622.126-7.999-4.058 4.362 1.512 4.459-.126 7.999" />
                </svg>
                <span>supper</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
