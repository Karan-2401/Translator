import React, { Children } from 'react';
import Parents from '../pages/Parents';
import Speak from '../pages/Speak';
import Write from '../pages/Write';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  
const Start2 = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      Element:<Parents/>,
      Children:[
        {
          path:'/',
          Element:<Write/>,
        },
        {
          path:'/speak',
          Element:<Speak/>,
        }
      ]
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Start2