import { useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiCampfire, GiShower, GiElectric, GiHiking, GiBoatFishing } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import CampgroundItem from "../components/CampgroundItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import sample from "../assets/sample.jpg";
import login from "../assets/login.jpg";
import hero from "../assets/landing-hero.png";

import Philippines from "../data/Philippines.json";
function Campgrounds() {
  const [view, setView] = useState<Boolean>(false);
  const [locationFilter, setLocationFilter] = useState(Philippines);
  const navigate = useNavigate();

  const provinceName = locationFilter.map(({ province }) => province);
  const provinceCity = locationFilter.find(
    (province) => province.province === "Cebu"
  )?.CityOrMunicipalities;

  const initialValues = {
    Province: "",
    CityOrMunicipalities: "",
    min: 1,
    max: 1,
    Amenities: [],
    Activities: [],
  };

  const clicked = () => {
    return navigate("/campgrounds/1");
  };
  return (
    <main className="flex-1 flex">
      <section className="grid grid-cols-5 flex-1">
        <div className="p-4 flex  bg-white  ">
          <section className="flex-1 border-r-[1px] border-solid border-gray-200 fixed top-20">
            <div className="px-5">
              <h1 className="font-[800] text-sm mb-4">Filter</h1>

              <div className="mb-4 w-[210px]">
                <h1 className="font-[800] text-sm mb-2">Location</h1>
                <div className="form-control w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    list="provinces"
                    placeholder="Province"
                    className="input input-sm input-primary mb-2"
                  />
                  <datalist id="provinces">
                    {provinceName.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </datalist>
                  <input
                    type="text"
                    name=""
                    id=""
                    list="CityOrMunicipalities"
                    placeholder="City or Municipality"
                    className="input input-sm input-primary"
                  />
                  <datalist id="CityOrMunicipalities">
                    {provinceCity?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </datalist>
                </div>
              </div>

              <div className="flex justify-between">
                <h1 className="font-[800] text-sm">Price range</h1>
                <button onClick={() => setView((prev) => !prev)}>
                  <IoMdArrowDropdown />
                </button>
              </div>
              <div className={`w-full p-1 ${view ? "block" : "hidden"}`}>
                <div className="form-control mb-2">
                  <label className="">
                    <span className="label-text text-[12px] text-black">Min</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-primary text-[12px] text-white">₱</span>
                    <input
                      type="text"
                      className="input input-primary input-xs rounded-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="form-control mb-2">
                  <label className="">
                    <span className="label-text text-[12px] text-black">Max</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-primary text-[12px] text-white">₱</span>
                    <input
                      type="text"
                      className="input input-primary input-xs rounded-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-">
                <div className="flex justify-between">
                  <h1 className="font-[800] text-sm">Amenities</h1>
                  <button onClick={() => setView((prev) => !prev)}>
                    <IoMdArrowDropdown />
                  </button>
                </div>

                <div className={`w-full p-1 ${view ? "block" : "hidden"}`}>
                  <div className="form-control mb-1">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <GiCampfire size={16} className="mr-2" />
                        <span>CAMPFIRE</span>
                      </span>
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <GiShower size={16} className="mr-2" />
                        <span>SHOWER</span>
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <GiElectric size={16} className="mr-2" />
                        <span>ELECTRIC HOOKUP</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between">
                  <h1 className="font-[800] text-sm">Activities</h1>
                  <button onClick={() => setView((prev) => !prev)}>
                    <IoMdArrowDropdown />
                  </button>
                </div>

                <div className={`w-full p-1 ${view ? "block" : "hidden"}`}>
                  <div className="form-control mb-1">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <GiHiking size={16} className="mr-2" />
                        <span>HIKING</span>
                      </span>
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <GiBoatFishing size={16} className="mr-2" />
                        <span>FISHING</span>
                      </span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label htmlFor="" className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-primary checkbox-xs mr-3"
                      />
                      <span className="text-[12px] flex">
                        <TbSwimming size={16} className="mr-2" />
                        <span>SWIMMING</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-control w-full mb-2">
                <h1 className="font-[800] text-sm mb-1">Ratings</h1>
                <div className="rating-group flex mr-auto">
                  <input
                    disabled
                    checked
                    className="rating__input rating__input--none"
                    name="rating3"
                    id="rating3-none"
                    value="0"
                    type="radio"
                  />
                  <label aria-label="1 star" className="rating__label" htmlFor="rating3-1">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-1"
                    value="1"
                    type="radio"
                  />
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-2"
                    value="2"
                    type="radio"
                  />
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-3"
                    value="3"
                    type="radio"
                  />
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-4"
                    value="4"
                    type="radio"
                  />
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5">
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-5"
                    value="5"
                    type="radio"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <button type="submit" className="btn btn-primary btn-sm">
                  SEARCH
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-4 p-4 grid grid-cols-4 gap-4 mt-12 ">
          <CampgroundItem img={sample} navigate={clicked} />
          <CampgroundItem img={login} navigate={clicked} />
          <CampgroundItem img={hero} navigate={clicked} />
          <CampgroundItem img={sample} navigate={clicked} />
          <CampgroundItem img={login} navigate={clicked} />
          <CampgroundItem img={sample} navigate={clicked} />
          <CampgroundItem img={login} navigate={clicked} />
          <CampgroundItem img={hero} navigate={clicked} />
          <CampgroundItem img={sample} navigate={clicked} />
        </div>
      </section>
    </main>
  );
}
export default Campgrounds;
