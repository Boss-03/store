import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]); 

  return (
    <>
      <div>

        <RouterProvider router={router } />
      </div>
    </>
  );
}

export default App
