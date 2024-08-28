import React, { useEffect } from "react";
import { getArea } from "../../Redux/AreaSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Area() {
  let dispatch = useDispatch();
  const { Area, isloading, isError } = useSelector((state) => state.Area);

  useEffect(() => {
    dispatch(getArea());
  }, [dispatch]);
  return (
    <>
      {isloading == false ? (
        <>
          <Helmet>
            <title>Area</title>
            <meta name="description" content="Area Page" />
          </Helmet>
          <div className="container  margin-top">
            <div className="row g-4">
              {Area.map((product) => (
                <div key={product.strArea} className="col-md-3">
                  <Link
                    className=" text-decoration-none text-black"
                    to={`/areaDetails/${product.strArea}`}
                  >
                    <div className="meal cursor-pointer product shadow1 rounded-2 text-center">
                      <i className="fa-solid fa-earth-americas"></i>
                      <h3 className="p-2 ">{product.strArea}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center overlay">
            <InfinitySpin width="200" color="black" />
          </div>
        </>
      )}
    </>
  );
}
