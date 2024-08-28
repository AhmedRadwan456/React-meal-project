import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchByName, getSearchByFirstName } from "../../Redux/searchSlice";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Search() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [firstLetter, setFirstLetter] = useState("");
  const { SearchByName, isLoading, isError, SearchByFirstName } = useSelector(
    (state) => state.searchByName
  );

  useEffect(() => {
    if (name) {
      dispatch(getSearchByFirstName(name));
      dispatch(getSearchByName(name));
    }
  }, [dispatch, name]);

  const handleSearchByName = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(getSearchByName(value));
  };

  const handleSearchByFirstLetter = (e) => {
    const value = e.target.value;
    setFirstLetter(value);
    dispatch(getSearchByFirstName(value));
  };

  return (
    <>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Search Page" />
      </Helmet>
      <div className="container margin-top">
        <div className="row">
          <div className="col-md-6">
            <input
              id="name"
              value={searchTerm}
              onChange={handleSearchByName}
              className="form-control"
              type="text"
              placeholder="Search By Name"
            />
          </div>
          <div className="col-md-6">
            <input
              value={firstLetter}
              onChange={handleSearchByFirstLetter}
              className="form-control"
              maxLength="1"
              type="text"
              placeholder="Search By First Letter"
            />
          </div>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && (
        <p className="text-danger">An error occurred while fetching data.</p>
      )}

      <div className="container">
        <div className="row g-4">
          {SearchByName && SearchByName.length > 0 ? (
            <>
              {" "}
              {SearchByName.map((product) => (
                <div key={product.idMeal} className="col-md-3 overflow-hidden">
                  <Link className="" to={`/details/${product.idMeal}`}>
                    <div className="position-relative meal cursor-pointer   text-center text-white">
                      <img
                        className="w-100 rounded-2"
                        src={product.strMealThumb}
                        alt={product.strMeal}
                      />
                      <div className="meal-layer text-white rounded-2 d-flex justify-content-center align-items-center position-absolute">
                        <h3>{product.strMeal}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="container ">
        <div className="row g-4">
          {SearchByFirstName && SearchByFirstName.length > 0 ? (
            <>
              {SearchByFirstName.map((product) => (
                <div key={product.idMeal} className="col-md-3 overflow-hidden">
                  <Link className="" to={`/details/${product.idMeal}`}>
                    <div className="position-relative meal cursor-pointer  text-center text-white">
                      <img
                        className="w-100 rounded-2"
                        src={product.strMealThumb}
                        alt={product.strMeal}
                      />
                      <div className="meal-layer text-white d-flex rounded-2 justify-content-center align-items-center position-absolute">
                        <h3>{product.strMeal}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
