import { createBrowserRouter } from "react-router-dom"
import { AboutMe } from "../pages/AboutMe"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"

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
