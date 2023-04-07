import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Campgrounds from "./pages/Campgrounds";
import NewCampground from "./pages/NewCampground";

// Layout
import YelpLayout from "./layouts/YelpLayout";
import Campground from "./pages/Campground";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<YelpLayout />}>
        <Route index path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/campgrounds/new" element={<NewCampground />} />
        <Route path="/campgrounds/:id" element={<Campground />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
