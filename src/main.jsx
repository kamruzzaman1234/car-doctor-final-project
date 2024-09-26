
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import AuthProvider from '../Provider/AuthProvider.jsx';
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import LogIn from './Pages/Login/Login.jsx';
import SignUp from './Pages/Signup/Signup.jsx';
import CheckOut from './Pages/CheckOut/CheckOut.jsx';
import Booking from './Pages/BookingPage/Booking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      },
      {
        path:"signup",
        element: <SignUp></SignUp>
      },
      {
        path:"checkout/:id",
        element: <CheckOut></CheckOut>,
        loader:({params})=> fetch(`http://localhost:6009/services/${params.id}`)

      },
      {
        path:"bookingPage",
        element: <Booking></Booking>,
        loader: ()=>fetch(`http://localhost:6009/booking`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  </div>,
)
