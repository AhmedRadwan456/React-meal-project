import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/DetailsSlice";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, isloading, error } = useSelector((state) => state.Details);

  useEffect(() => {
    if (id) {
      dispatch(getDetails(id));
    }
  }, [dispatch, id]);
  
  if (!detail) return null;

  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    if (detail[`strIngredient${i}`]) {
      ingredients.push(
        <li className="alert alert-info m-2 p-2" key={i}>
          {detail[`strMeasure${i}`]} {detail[`strIngredient${i}`]}
        </li>
      );
    }
  }

  const tags = detail.strTags ? detail.strTags.split(",") : [];
  const tagsList = tags.map((tag, index) => (
    <li className="alert alert-danger m-2 p-2" key={index}>
      {tag}
    </li>
  ));

  return (
    <>
      {isloading ? (
        <>
          <div className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center overlay">
            <InfinitySpin width="200" color="black" />
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>Details</title>
            <meta name="description" content="Details Page" />
          </Helmet>{" "}
          <div className="container  margin-top">
            <div className="row g-4">
              <div className="row">
                <div className="col-md-4 details text-black">
                  <div className="details margin-top">
                    <img
                      className="w-100 rounded-2"
                      src={detail.strMealThumb}
                      alt={detail.strMeal}
                    />
                    <h1>{detail.strMeal}</h1>
                  </div>
                </div>
                <div className="col-md-8 text-black">
                  <div className="instruction-details">
                    <h3>Instructions</h3>
                    <p className="text-color my-3">{detail.strInstructions}</p>
                    <h3>
                      Area: <span className="text-color">{detail.strArea}</span>
                    </h3>
                    <h3>
                      Category:{" "}
                      <span className="text-color">{detail.strCategory}</span>
                    </h3>
                    <h3 className="mb-4">Recipes:</h3>
                    <ul className="list-unstyled d-flex g-3 flex-wrap">
                      {ingredients}
                    </ul>
                    <h3>Tags:</h3>
                    <ul className="list-unstyled d-flex g-3 flex-wrap pb-3">
                      {tagsList}
                    </ul>
                    <a
                      target="-blank"
                      href={detail.strSource}
                      className="btn btn-outline-info"
                    >
                      Source
                    </a>
                    <a
                      target="-blank"
                      href={detail.strYoutube}
                      className="btn mx-2 btn-outline-danger"
                    >
                      Youtube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
