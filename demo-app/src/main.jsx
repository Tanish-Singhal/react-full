import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
