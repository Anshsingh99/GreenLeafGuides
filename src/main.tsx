import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './index.css'
import GardeningHomepage from './components/home.tsx'
import Footer from './components/footer.tsx'
import GardenTips from './components/GardenTips.tsx'
import Navigate from './components/nav.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <GardeningHomepage />,
  },
  {
    path: "/gardenTips",
    element: <GardenTips />,
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <Navigate/>
    <RouterProvider router ={router} />
    <Footer/>
  </main>,
)


