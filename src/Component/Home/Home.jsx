import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../Redux/HomeSlice";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Home() {
  let dispatch = useDispatch();
  let { Home, isloading, isError } = useSelector((state) => state.Home);

  useEffect(() => {
    dispatch(getHome());
  }, []);

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
            <title>Yummy</title>
            <meta name="description" content="Home Page" />
          </Helmet>
          <div className="container  margin-top">
            <div className="row g-4 ">
              {Home.map((product) => (
                <div key={product.idMeal} className="col-md-3 overflow-hidden">
                  <Link className="" to={`/details/${product.idMeal}`}>
                    <div className="  position-relative meal cursor-pointer text-center text-white">
                      <img
                        className="w-100 rounded-2"
                        src={product.strMealThumb}
                        alt=""
                      />
                      <div className="meal-layer text-white d-flex justify-content-center rounded-2 align-items-center  position-absolute">
                        <h3>{product.strMeal}</h3>
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
