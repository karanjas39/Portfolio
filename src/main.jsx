import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import MainOutlet from "./Components/MainOutlet/MainOutlet.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Error from "./Components/Error/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainOutlet />} errorElement={<Error />}>
      <Route path="" element={<Home />} />
      <Route path="skills" element={<Skills />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
