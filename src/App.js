import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Component/Categories/Categories.jsx";
import Layout from "./Component/Layout/Layout";
import Area from "./Component/Area/Area.jsx";
import Ingredient from "./Component/Ingredient/Ingredient";
import IngredientsDetails from "./Component/IngredientsDetails/IngredientsDetails";
import Home from "./Component/Home/Home.jsx";
import Search from "./Component/Search/Search.jsx";
import AreaDetails from "./Component/AreaDetails/AreaDetails.jsx";
import Details from "./Component/Details/Details.jsx";
import CategoryDetails from "./Component/CategoryDetails/CategoryDetails.jsx";
import ContactUs from "./Component/ContactUs/ContactUs.jsx";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "area", element: <Area /> },
      { path: "areaDetails/:name", element: <AreaDetails /> },
      { path: "details/:id", element: <Details /> },
      { path: "ingredient", element: <Ingredient /> },
      { path: "ingredientsDetails/:name", element: <IngredientsDetails /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "categories", element: <Categories /> },
      { path: "categoriesDetails/:name", element: <CategoryDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
