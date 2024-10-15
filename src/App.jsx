import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./Components/layout/AppLayou";
import './index.css';

import { ErrorPage } from "./pages/ErrorPage";
import { GetMoviesData } from "./API/GetApiData";
import { MoviesDetail, GetMoviesDetail } from "./Components/Ui/MovieDetails"; // Import correctly

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: "/Movie/:movieID",
          element: <MoviesDetail/>,  // Use the correct component here
          loader: GetMoviesDetail,    // Use the correct loader here
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
