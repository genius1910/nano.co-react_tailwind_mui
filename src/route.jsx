import Index from "./layouts";
import Dashboard from "./pages/dashboard";

const AppRoutes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      }
    ],
  },
];

export default AppRoutes;
