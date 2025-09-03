import React from 'react'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout'
import CoursesPage from '../coursesPage'
import ErrorPage from '../ErrorPage'
import Home from '../Home'
import Who from '../who'
import CouresDetailsPage from '../CouresDetailsPage'     
import CouresDetails from '../CouresDetailsCard'    
import ScrollToTop from '../ScrollToTop'

const Router = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Mainlayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/courses",
                    element: <CoursesPage />,
                },
                {
                    path: "/who",
                    element: <Who />,
                },

                {
                    path: "/couresDetailsPage",
                    element: <CouresDetailsPage />,
                },
            ]
        },

    ])
  return <RouterProvider router={router} />
}

export default Router