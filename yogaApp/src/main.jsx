import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../src/pages/home.jsx'
import Explore from '../src/pages/explore.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {path: "/",element: <Home/>},
      {path: "/explore",element: <Explore/>},
      { path: "/card/:id", element: <CardBookingView /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
