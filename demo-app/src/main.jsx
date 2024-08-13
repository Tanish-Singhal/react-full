import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'

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
      }
    ],
    errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
