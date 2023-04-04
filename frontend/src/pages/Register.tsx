import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="main-login">
      <div className="flex-1 grid grid-cols-2 bg-white gap-4 p-[10px]">
        <section className="text-[#fff] bg-[url('./assets/login.jpg')] bg-no-repeat bg-center bg-cover rounded-tl-[30px] rounded-br-[30px] flex justify-center content-center ">
          <div className="flex justify-center content-center flex-col">
            <h1 className="text-[32px] text-center">Start your camping with us</h1>
            <p className="text-[12px] text-center">
              Discover the natural wonders of the Philippines with YelpCamp.
            </p>
          </div>
        </section>
        <section className=" ml-8 flex flex-col">
          <header>
            <h1 className="text-2xl font-[900] mb-2">Sign Up</h1>
            <p>
              Have an account already? <Link to="/login">Login</Link>
            </p>
          </header>

          <form action="" className="my-10 ">
            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span className="label-text text-[black] font-[800]">Full name</span>
              </label>
              <input type="text" className="input input-bordered w-full input-primary" />
            </div>

            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span className="label-text text-[black] font-[800]">Email</span>
              </label>
              <input type="text" className="input input-bordered w-full input-primary" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label htmlFor="" className="label">
                  <span className="label-text text-[black] font-[800]">Password</span>
                </label>
                <input type="text" className="input input-bordered w-full input-primary" />
              </div>

              <div className="form-control w-full">
                <label htmlFor="" className="label">
                  <span className="label-text text-[black] font-[800]">Confirm Password</span>
                </label>
                <input type="text" className="input input-bordered w-full input-primary" />
              </div>
            </div>

            <div className="form-control w-full">
              <label htmlFor="" className="label">
                <span className="label-text text-[black] font-[800]">Full name</span>
              </label>
              <select className="select select-bordered w-full select-primary">
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1s</option>
              </select>
            </div>

            <div className="form-control w-full mt-4">
              <button type="submit" className="btn btn-primary rounded-full">
                Create Account
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
export default Register;
