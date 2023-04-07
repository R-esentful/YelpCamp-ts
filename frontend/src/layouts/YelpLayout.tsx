import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
import logo from "../assets/logo.png";
import landing from "../assets/landing-hero.png";
import sample from "../assets/sample.jpg";

function LandingLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const campground: boolean =
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/login";

  const handleNavigate = (where: string) => {
    if (where === "home") {
      navigate("/");
    }
    if (where === "profile") {
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col p-[10px]" id="Home">
        <header
          className={`h-[50px] flex justify-between ${
            campground
              ? ""
              : " border-b-[1px] border-solid border-gray-200 fixed top-0 left-0 w-full bg-white z-10   "
          }`}
        >
          <section className="flex hover:cursor-pointer" onClick={() => handleNavigate("home")}>
            <img src={logo} alt="YelpCamp Logo" className=" w-[50px] h-[50px]" />
            <h1 className="text-[18px] py-[12px] font-[900]">YelpCamp</h1>
          </section>

          {location.pathname === "/" ? (
            <>
              <section className="py-[12px]">
                <a href="#Home" className="m-[1rem]">
                  Home
                </a>
                <a href="#About" className="m-[1rem]">
                  About
                </a>
                <a href="#Contact" className="m-[1rem]">
                  Contact
                </a>
              </section>

              <section className="flex content-center">
                <Link to="/login" className="btn btn-primary rounded-full mr-1 ">
                  Login
                </Link>
                <Link to="/register" className="btn btn-ghost rounded-full ">
                  Register
                </Link>
              </section>
            </>
          ) : (
            ""
          )}

          {location.pathname.includes("/campgrounds") || location.pathname === "/profile" ? (
            <>
              <section className="flex mr-4">
                <section className="flex mr-4">
                  <Link to="/campgrounds" className="flex text-[12px] my-auto mx-4">
                    <FaHome size={20} className="" />
                  </Link>

                  <Link to="/campgrounds/new" className="flex text-[12px] my-auto mx-4">
                    <GiCampingTent size={22} className="" />
                  </Link>

                  <Link to="/" className="flex text-[12px] my-auto mx-4">
                    <TbLogout size={22} className="" />
                  </Link>
                </section>
                <section className="flex flex-col justify-center">
                  <section
                    className="avatar hover:cursor-pointer"
                    onClick={() => handleNavigate("profile")}
                  >
                    <div className=" w-[36px] rounded-full">
                      <img src={sample} alt="" />
                    </div>
                  </section>
                </section>
              </section>
            </>
          ) : (
            ""
          )}
        </header>

        {location.pathname === "/" ? (
          <section className="flex-1 flex flex-col">
            <div className="m-auto grid grid-cols-2 gap-[1rem]">
              <div className="p-[20px] flex flex-col justify-center content-start">
                <p className="text-[45px] font-[900]">
                  Discover the natural wonders of the Philippines with YelpCamp.
                </p>
                <p className="text-[20px] mb-[1rem] text-[grey]">
                  Your ultimate guide to camping, hiking, and outdoor fun.
                </p>

                <div className="">
                  <Link
                    to="/campgrounds"
                    className="text-white text-[14px]  btn btn-primary rounded-full p-4"
                  >
                    View Campgrounds
                  </Link>
                </div>
              </div>

              <div className="p-[20px] flex justify-center">
                <img src={landing} alt="" />
              </div>
            </div>
          </section>
        ) : (
          <Outlet />
        )}
      </div>

      {location.pathname === "/" && <Outlet />}
    </>
  );
}
export default LandingLayout;
