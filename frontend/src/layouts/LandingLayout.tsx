import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import landing from "../assets/landing-hero.png";

function LandingLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="h-screen flex flex-col p-[10px]">
        <header className="h-[50px] flex justify-between">
          <section className="flex hover:cursor-pointer" onClick={handleNavigate}>
            <img src={logo} alt="YelpCamp Logo" className=" w-[60px] h-[60px]" />
            <h1 className="text-[20px] py-[15px] font-[900]">YelpCamp</h1>
          </section>

          {location.pathname === "/" ? (
            <>
              <section className="py-[10px]">
                <a href="#asda" className="m-[10px]">
                  Home
                </a>
                <a href="#asda" className="m-[10px]">
                  About
                </a>
                <a href="#asdasd" className="m-[10px]">
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
                  <Link to="/campgrounds" className="btn btn-primary rounded-full p-[16px]">
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

      <footer className="grid grid-cols-5 p-[2rem]">
        <section>
          <section className="flex hover:cursor-pointer text-[20px] py-[15px] font-[900]">
            <img src={logo} alt="YelpCamp Logo" className="w-[50px] h-[50px]" />
            <h1 className="text-[20px] py-[10px]">YelpCamp</h1>
          </section>
          <p>Discover the Great Outdoors with YelpCamp!</p>
        </section>

        <section>
          <h3 className="text-[20px]  font-[900]">Company</h3>
          <ul>
            <li className="py-[5px]">Features</li>
            <li className="py-[5px]">News</li>
            <li className="py-[5px]">FAQ</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px]  font-[900]">Resources</h3>
          <ul>
            <li className="py-[5px]">Events</li>
            <li className="py-[5px]">Promos</li>
            <li className="py-[5px]">Demo</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px]  font-[900]">Support</h3>
          <ul>
            <li className="py-[5px]">Account</li>
            <li className="py-[5px]">Support Center</li>
            <li className="py-[5px]">Feedback</li>
            <li className="py-[5px]">Contact Us</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px]  font-[900]">Social Media</h3>
          <p>Yelpcamp@support.ts</p>
        </section>
      </footer>
    </>
  );
}
export default LandingLayout;
