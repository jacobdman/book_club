// LAYOUTS
import DefaultLayout from "layouts/DefaultLayout";
// VIEWS
import Home from "views/Home";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    Layout: DefaultLayout,
  },
];

export default routes;
