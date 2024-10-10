import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import GardeningHomepage from "./components/home.tsx";
import Footer from "./components/footer.tsx";
import GardenTips from "./components/GardenTips.tsx";
import Navigate from "./components/nav.tsx";
import Tools from "./components/tools.tsx";
import CommunityForum from "./components/community.tsx";
import PlantGuides from "./components/plantGuides.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GardeningHomepage />,
  },
  {
    path: "/gardenTips",
    element: <GardenTips />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/community",
    element: <CommunityForum />,
  }, 
  {
    path: "/guides",
    element: <PlantGuides/>,
  },  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <Navigate />
    <RouterProvider router={router} />
    <Footer />
  </main>
);
