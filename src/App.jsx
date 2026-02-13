import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NavbarLayout from "./container/Layout/Navbar"
import Career from "./container/app/career/Career"
import Blog from "./container/app/Blog/Blog"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarLayout/>,
      children: [
        {
          path: '/vacancy',
          element: <Career/>
        },
        {
          path: '/blog',
          element: <Blog/>
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export  default App
