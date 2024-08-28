import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/categorySlice.js";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Categories() {
  let dispatch = useDispatch();
  const { categories, isloading, isError } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(getCategories());
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
            <title>Categories</title>
            <meta name="description" content="Categories Page" />
          </Helmet>
          <div className="container  margin-top">
            <div className="row g-4 ">
              {categories.map((product) => (
                <div
                  key={product.idCategory}
                  className="col-md-3 overflow-hidden"
                >
                  <Link
                    className=" text-decoration-none text-black"
                    to={`/categoriesDetails/${product.strCategory}`}
                  >
                    <div className=" position-relative meal cursor-pointer  rounded-2 text-center text-white">
                      <img
                        className="w-100 rounded-2 "
                        src={product.strCategoryThumb}
                        alt=""
                      />
                      <div className="meal-layer text-white rounded-2 text-center position-absolute">
                        <h3>{product.strCategory}</h3>
                        <p className="p-2">
                          {product.strCategoryDescription
                            ?.split(" ")
                            .slice(0, 25)
                            .join(" ")}
                        </p>
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
