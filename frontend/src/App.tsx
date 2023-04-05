import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout
import YelpLayout from "./layouts/YelpLayout";
import Campground from "./pages/Campground";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<YelpLayout />}>
        <Route index path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/campgrounds" element={<Campground />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
