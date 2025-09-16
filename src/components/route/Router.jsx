// import React from 'react'
// import {RouterProvider,createBrowserRouter } from 'react-router-dom'
// import MainLayout from '../MainLayout'
// import Courses from '../Courses'
// import ErrorPage from '../ErrorPage'
// import Home from '../Home'
// import Who from '../Who'
// import CouresDetailsPage from '../CouresDetailsPage'     
// import CouresDetails from '../CouresDetailsCard'    
// import ScrollToTop from '../ScrollToTop'
// import ContactUs from '../ContactUs'
// const Router = () => {
    
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <MainLayout />,
//             errorElement: <ErrorPage />,
//             children: [
//                 {
//                     path: "/",
//                     element: <Home />,
//                 },
//                 {
//                     path: "/Courses",
//                     element: <Courses />,
//                 },
//                 {
//                     path: "/Who",
//                     element: <Who />,
//                 },

//                 {
//                     path: "/CouresDetailsPage",
//                     element: <CouresDetailsPage />,
//                 },

//                 {
//                     path: "/Contact",
//                     element: <ContactUs />,
//                 },
//             ]
//         },

//     ])
//   return <RouterProvider router={router} />
// }

// export default Router


import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout'
import Courses from '../Courses'
import ErrorPage from '../ErrorPage'
import Home from '../Home'
import Who from '../Who'
import CouresDetailsPage from '../CouresDetailsPage'   // ✅ fixed spelling
import CouresDetailsCard from '../CouresDetailsCard'   // ✅ fixed spelling
import ScrollToTop from '../ScrollToTop'
import ContactUs from '../ContactUs'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/courses",  // ✅ lowercased
          element: <Courses />,
        },
        {
          path: "/who",  // ✅ lowercased
          element: <Who />,
        },
        {
          path: "/course-details",  // ✅ renamed for clarity
          element: <CouresDetailsPage />,
        },
        {
          path: "/contact",  // ✅ lowercased
          element: <ContactUs />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
