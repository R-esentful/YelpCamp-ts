import { GiCampfire, GiShower, GiElectric, GiHiking, GiBoatFishing } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { TbSwimming } from "react-icons/tb";

function NewCampground() {
  return (
    <main className="grid grid-cols-2 mt-10">
      <div className="px-16 py-8">
        <header className="mb-2">
          <h1 className="text-4xl font-[900] mb-1">Showcase Your Campsite!</h1>
          <p className="text-[grey]">
            Get discovered by thousands of campers - list your campsite on Yelpcamp.
          </p>
        </header>
        <div>
          <form action="" className="">
            <div className="form-control w-full">
              <label htmlFor="" className="label ">
                <span className="label-text text-black font-[900] flex">
                  <GiCampfire size={20} className="mr-2" />
                  Camp name
                </span>
              </label>
              <input
                type="text"
                className="input input-primary input-bordered input-sm focus:outline-none"
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span className="label-text text-black font-[900] flex">
                  <HiLocationMarker size={20} className="mr-2" />
                  Location
                </span>
              </label>
              <input
                type="text"
                className="input input-primary input-bordered input-sm focus:outline-none"
              />
            </div>

            <div className="w-full">
              <label htmlFor="" className="label">
                <span className="label-text text-black font-[900]">Description</span>
              </label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={2}
                className="textarea textarea-bordered textarea-primary w-full focus:outline-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 mb-4">
              <div>
                <label htmlFor="" className="label">
                  <span className="label-text text-black font-[900]">Amenities</span>
                </label>
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

              <div>
                <label htmlFor="" className="label">
                  <span className="label-text text-black font-[900]">Activities</span>
                </label>
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

            <div className="form-control">
              <button type="submit" className="btn btn-primary">
                ADD CAMP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-16 py-8">
        <header>
          <h1 className="text-2xl font-[900]">Upload Image</h1>
        </header>
      </div>
    </main>
  );
}
export default NewCampground;
