import Index from "./layouts";

import Dashboard from "./pages/dashboard";
import Technology from "./pages/technology";
import Mission from "./pages/mission";
import Careers from "./pages/careers";
import FAQ from "./pages/faq";

const AppRoutes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  }
]

export default AppRoutes;
