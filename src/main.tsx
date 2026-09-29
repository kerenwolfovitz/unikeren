import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Management from "./pages/Management";
import DesignSystems from "./pages/DesignSystems";
import BlastFromThePast from "./pages/BlastFromThePast";
import ManagementConsoleDetails from "./pages/ManagementConsoleDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "management", element: <Management /> },
      { path: "design-systems", element: <DesignSystems /> },
      { path: "blast-from-the-past", element: <BlastFromThePast /> },
      { path: "management-console-discovery", element: <ManagementConsoleDetails /> },
      // Keep the old Wix URLs working so existing links and bookmarks don't break.
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "about-9", element: <Navigate to="/management" replace /> },
      { path: "general-8", element: <Navigate to="/design-systems" replace /> },
      { path: "about-1", element: <Navigate to="/blast-from-the-past" replace /> },
      { path: "projects-6", element: <Navigate to="/management-console-discovery" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
