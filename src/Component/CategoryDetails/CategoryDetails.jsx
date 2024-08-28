import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategoryDetails } from "../../Redux/CategoryDetailsSlice";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function CategoryDetails() {
  const { name } = useParams();
  let dispatch = useDispatch();
  const { CategoeiesDetail, isloading, isError } = useSelector(
    (state) => state.CategoryDetail
  );

  useEffect(() => {
    if (name) {
      dispatch(getCategoryDetails(name));
    }
  }, [dispatch, name]);

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
            <title>CategoryDetails</title>
            <meta name="description" content="CategoryDetails Page" />
          </Helmet>{" "}
          <div className="container  margin-top">
            <div className="row g-4 ">
              {CategoeiesDetail.map((product) => (
                <div key={product.idMeal} className="col-md-3 overflow-hidden">
                  <Link className="" to={`/details/${product.idMeal}`}>
                    <div className=" position-relative meal cursor-pointer  rounded-2 text-center text-white">
                      <img
                        className="w-100 rounded-2"
                        src={product.strMealThumb}
                        alt=""
                      />
                      <div className="meal-layer text-white d-flex rounded-2 justify-content-center align-items-center  position-absolute">
                        <h3>{product.strMeal}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
