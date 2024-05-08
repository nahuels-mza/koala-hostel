import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import ErrorPage from "./pages/error";
import Reserve from "./pages/Reservation/reservation";
import MainHostel from "./pages/Hostel/MainHostel";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />

            },
            {
                path: "hostel",
                element: <MainHostel />
            },
            {
                path: "reserve",
                element: <Reserve />
            }
        ]
    },
])

export default router;