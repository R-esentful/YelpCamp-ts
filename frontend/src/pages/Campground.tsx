import sample from "../assets/sample.jpg";
import login from "../assets/login.jpg";
import { GiCampfire, GiShower, GiElectric, GiHiking, GiBoatFishing } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import mapboxgl from "mapbox-gl";
import { useRef, useState, useEffect } from "react";
const mapboxapi = process.env.REACT_APP_MAPBOX as string;

mapboxgl.accessToken = mapboxapi.replace(/"/g, "").replace(/;/g, "");
function Campground() {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: 9,
    });
  }, [lng, lat]);
  return (
    <main className="flex-1 grid grid-cols-3 mt-10">
      <section className="p-8 col-span-2">
        <div className="flex h-[280px]">
          <div className="w-[420px] mr-2">
            <img src={login} alt="" className="w-full max-h-full rounded-xl" />
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-full flex-1">
            <img src={sample} alt="" className="w-full h-[136px] rounded-xl" />
            <img src={sample} alt="" className="w-full h-[136px] rounded-xl" />
            <img src={sample} alt="" className="w-full h-[136px] rounded-xl" />
            <img src={sample} alt="" className="w-full h-[136px] rounded-xl" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl font-[900]">Nature Spring LOL</h1>
          <h2 className="text-[grey]">Tubod, Surigao del Norte</h2>
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-[800]">Amenities & Activities</h1>
          <section className="grid grid-cols-2">
            <section className="mt-3">
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <GiCampfire className="my-auto mr-2" />
                </span>
                Campfire
              </p>
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <GiShower className="my-auto mr-2" />
                </span>
                Shower
              </p>
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <GiElectric className="my-auto mr-2" />
                </span>
                Electric Hookup
              </p>
            </section>

            <section>
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <GiHiking className="my-auto mr-2" />
                </span>
                Hiking
              </p>
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <GiBoatFishing className="my-auto mr-2" />
                </span>
                Fishing
              </p>
              <p className="flex text-[16px]">
                <span className="flex content-center">
                  <TbSwimming className="my-auto mr-2" />
                </span>
                Swimming
              </p>
            </section>
          </section>
        </div>
        <div className="mt-3 mb-2">
          <h2 className="text-lg font-[800] mb-2">Location</h2>
          <div ref={mapContainer} className="h-[300px] w-[400px] rounded-xl"></div>
        </div>

        <div>
          <h2 className="text-lg font-[800]">Price</h2>
        </div>
      </section>
      <section className="p-8">
        <header className="mb-4">
          <h1 className="text-3xl font-[900] text-primary">Reviews</h1>
        </header>

        <div className="">
          <div className="flex justify-end test p-4 mb-2">
            <div className="my-auto mr-auto pr-4">
              <p className="text-[12px] mb-2">Rate: ★★★★★</p>
              <p className="text-[12px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe aperiam
                voluptatum corporis adipisci officiis illum nobis natus hic? Omnis perferendis,
                magni rerum molestias cum quas voluptates debitis nesciunt minima. Odio totam
                sapiente blanditiis, vel harum recusandae porro, reiciendis ab, provident fugiat
                laborum id. Repudiandae autem odio cumque necessitatibus voluptas, quis aspernatur
                soluta? Doloremque enim accusantium minima eos non consequuntur!
              </p>
            </div>
            <div className="my-auto">
              <h2 className="text-[12px] mb-1 text-center font-[900]">Nel</h2>
              <div className="avatar">
                <div className="rounded-full w-10">
                  <img src={sample} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end test p-4">
            <div className="my-auto mr-auto pr-4">
              <p className="text-[12px] mb-2">Rate: ★★★★★</p>
              <p className="text-[12px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe aperiam
                soluta? Doloremque enim accusantium minima eos non consequuntur!
              </p>
            </div>
            <div className="my-auto">
              <h2 className="text-[12px] mb-1 text-center font-[900]">Nel</h2>
              <div className="avatar">
                <div className="rounded-full w-10">
                  <img src={sample} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Campground;
