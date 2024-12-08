import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { AboutMe } from "../pages/AboutMe"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutme',
    element: <AboutMe />
  },
  {
    path: "/*",
    element: <NotFound />
  }
])
