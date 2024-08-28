import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredient } from "../../Redux/IngredientSlice";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Ingredient() {
  let dispatch = useDispatch();
  let { Ingredient, isloading, isError } = useSelector(
    (state) => state.ingredient
  );

  useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);

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
            <title>Ingredient</title>
            <meta name="description" content="Ingredient Page" />
          </Helmet>{" "}
          <div className="container  margin-top">
            <div className="row g-4">
              {Ingredient.map((product, index) => (
                <div
                  key={
                    product.strIngredient
                      ? product.strIngredient
                      : `ingredient-${index}`
                  }
                  className="col-md-3"
                >
                  <Link
                    className=" text-decoration-none text-black"
                    to={`/ingredientsDetails/${product.strIngredient}`}
                  >
                    <div className="meal cursor-pointer product shadow1 rounded-2 text-center">
                      <i className="fa fa-cookie-bite"></i>
                      <h3 className="p-2 ">{product.strIngredient}</h3>
                      <p className="p-2 ">
                        {product.strDescription
                          ?.split(" ")
                          .slice(0, 20)
                          .join(" ")}
                      </p>
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
