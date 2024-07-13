import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TripPlanner } from "./page/trip-planer/trip-planer";
import { TripDetails } from "./page/trip-details";
import ErrorScreen from "./page/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TripPlanner />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "trips/:tripId",
    element: <TripDetails />,
    errorElement: <ErrorScreen />,
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
};
