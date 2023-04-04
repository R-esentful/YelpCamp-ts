import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import tent from "../assets/animat-tent-color.gif";
import ui from "../assets/animat-day-night-color.gif";
import search from "../assets/animat-flashlight-color.gif";
import { ReactComponent as Camp } from "../assets/stat-camp.svg";
import { ReactComponent as Review } from "../assets/stat-review.svg";
import { ReactComponent as User } from "../assets/stat-user.svg";
import { ReactComponent as Feature } from "../assets/features.svg";
import { ReactComponent as Map } from "../assets/features-map.svg";
function Landing() {
  return (
    <>
      <main className="main-landing">
        <section className="bg-[#ea5422] grid grid-cols-3 gap-[1rem] h-[130px] p-[20px]">
          <div className="text-[#fff] flex justify-center content-center">
            <figure className="flex mr-4">
              <Camp width={80} height={80} className="m-auto" />
            </figure>
            <div className="flex flex-col p-4">
              <h2 className="text-2xl font-[900]">Camping Destination</h2>
              <p className="text-[16px]">6969</p>
            </div>
          </div>

          <div className="text-[#fff] flex justify-center content-center">
            <figure className="flex mr-4">
              <Review width={80} height={80} className="m-auto" />
            </figure>
            <div className="flex flex-col p-4">
              <h2 className="text-2xl font-[900]">Positive Reviews</h2>
              <p className="text-[16px]">6969</p>
            </div>
          </div>

          <div className="text-[#fff] flex justify-center content-center">
            <figure className="flex mr-4">
              <User width={80} height={80} className="m-auto" />
            </figure>
            <div className="flex flex-col p-4">
              <h2 className="text-2xl font-[900]">Active User</h2>
              <p className="text-[16px]">6969</p>
            </div>
          </div>
        </section>
        <section className="mt-[2rem] grid p-[20px] grid-cols-3">
          <div className="flex flex-col justify-center content-center">
            <h2 className="text-center text-2xl font-[900]">WHY CHOOSE US?</h2>
            <Feature width={400} height={400} />
          </div>
          <div className="flex flex-col justify-center content-center col-span-2">
            <div className="grid gap-[1rem] grid-cols-3">
              <section className="p-[10px]">
                <figure className="flex">
                  <img src={tent} alt="" className="m-auto w-[80px] h-[80px]" />
                </figure>
                <h2 className="text-center mb-[5px] text-2xl font-[900]">Comprehensive listings</h2>
                <p className="text-justify leading-[1.5] text-[grey]">
                  Detailed information on hundreds of campgrounds across the Philippines, making it
                  easy for you to find the perfect spot for your next adventure.
                </p>
              </section>

              <section className="p-[10px]">
                <figure className="flex">
                  <img src={ui} alt="" className="m-auto w-[80px] h-[80px]" />
                </figure>
                <h2 className="text-center mb-[5px] text-2xl font-[900]">
                  User-friendly interface
                </h2>
                <p className="text-justify leading-[1.5] text-[grey]">
                  Designed to be intuitive and easy to use, so you can spend less time navigating
                  and more time planning your trip.
                </p>
              </section>

              <section className="p-[10px]">
                <figure className="flex">
                  <img src={search} alt="" className="m-auto w-[80px] h-[80px]" />
                </figure>
                <h2 className="text-center mb-[5px] text-2xl font-[900]">Customized search</h2>
                <p className="text-justify leading-[1.5] text-[grey]">
                  Narrow down your options by location, amenities, and more, so you can quickly find
                  the campgrounds that meet your specific needs.
                </p>
              </section>
            </div>
          </div>
        </section>
        <section className="grid p-[20px] grid-cols-4 gap-[1rem]">
          <div className="flex flex-col justify-center content-center col-span-2">
            <h1 className="text-[28px] text-center mb-[1rem] font-[900]">
              YelpCamp connects passionate Filipino campers to unforgettable outdoor adventures
              across the Philippines.
            </h1>

            <p className="mb-[1rem] text-[grey]">
              Join our community of passionate campers and unlock the full potential of your outdoor
              adventure.
            </p>
            <div className="flex justify-center">
              <Link to="/register" className="btn btn-primary rounded-full">
                Join Community
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center col-span-2">
            <Map width={700} height={400} />
          </div>
        </section>
      </main>
    </>
  );
}
export default Landing;
