import sample from "../assets/sample.jpg";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

function Profile() {
  return (
    <main className="flex-1 grid grid-cols-3 mt-10">
      <section className="p-8 flex flex-col">
        <div className="test flex-1">
          <div className="m-4 flex flex-col border-b-[1px] border-solid border-primary ">
            <div className="avatar mx-auto mb-3">
              <div className="w-24 rounded-full">
                <img src={sample} alt="" />
              </div>
            </div>
            <h1 className="text-center mb-2 font-[900] ">Name</h1>
          </div>
          <div className="p-4">
            <div className="mb-2">
              <h1 className="font-[900]">Bio</h1>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, in?
              </p>
            </div>
            <div className="mb-2">
              <h1 className="font-[900]">Email</h1>
              <p className="text-[12px]">someEmail@gmail.com</p>
            </div>

            <div>
              <h1 className="font-[900]">Socials</h1>
              <div className="flex mt-2">
                <FaFacebookSquare size={25} className="mx-2" />
                <FaInstagram size={25} className="mx-2" />
                <FaTwitter size={25} className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 pr-4 col-span-2 flex flex-col">
        <section className="test flex-1">
          <header className="flex p-4">
            <h1 className="mr-4">My Reviews</h1>
            <h1>My Listings</h1>
          </header>
        </section>
      </section>
    </main>
  );
}
export default Profile;
