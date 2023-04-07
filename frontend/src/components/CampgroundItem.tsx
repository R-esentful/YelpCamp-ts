import {
  GiCampfire,
  GiShower,
  GiElectric,
  GiHiking,
  GiBoatFishing,
  GiRoundStar,
} from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";

interface CampgroundItemInterface {
  img: string;
  navigate: () => void;
}

function CampgroundItem({ img, navigate }: CampgroundItemInterface) {
  return (
    <div className="hover:cursor-pointer" onClick={navigate}>
      <div className="w-full">
        <img src={img} alt="" className="rounded-xl w-full h-[260px]" />
      </div>
      <div className="p-1">
        <header className="flex justify-between mb-2">
          <p className="text-[14px]">Name</p>
          <div className="flex">
            <GiRoundStar size={12} className="m-auto mr-1" />
            <p className="text-[12px] m-auto">4.9</p>
          </div>
        </header>
        <div className="flex justify-between mb-2">
          <p className="text-[12px] mr-2">Amenities</p>
          <ul className="flex">
            <li className="mr-1">
              <GiCampfire />
            </li>
            <li className="mr-1">
              <GiShower />
            </li>
            <li className="mr-1">
              <GiElectric />
            </li>
          </ul>
        </div>

        <div className="flex justify-between mb-1">
          <p className="text-[12px] mr-2">Activities</p>
          <ul className="flex ">
            <li className="mr-1">
              <GiHiking />
            </li>
            <li className="mr-1">
              <GiBoatFishing />
            </li>
            <li className="mr-1">
              <TbSwimming />
            </li>
          </ul>
        </div>
        <p>Free</p>
      </div>
    </div>
  );
}
export default CampgroundItem;
