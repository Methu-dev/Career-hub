import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Error from './Components/Error/Error.jsx';
import Applied from './Components/Applied/Applied.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Applied",
        element: <Applied></Applied>,
        loader: ()=>fetch('/jobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
