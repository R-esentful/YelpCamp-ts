import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { ClipLoader } from "react-spinners";

// Component
import FormControlInput from "../components/Shared/FormControlInput";
import { loginSchema } from "../schema/loginSchema";

interface LoginInterface {
  email: string;
  password: string;
}

function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: LoginInterface = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {};
  return (
    <main className="flex-1 flex justify-center content-center">
      <div className="flex-1 grid grid-cols-2 bg-white gap-4 p-[10px]">
        <section className="p-4 flex flex-col">
          <div className="py-8 px-32 flex-1">
            <header className="mb-4">
              <h1 className="text-4xl font-[900] mb-2">Welcome back!</h1>
              <p className="text-[grey]">Login to your existing yelpcamp account ...</p>
            </header>

            <section className="">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
              >
                <Form>
                  <FormControlInput
                    fcstyle="w-full mb-4"
                    lblstyle="text-[black] font-[800]"
                    lblname="Email"
                    name="email"
                    type="text"
                    placeholder="Email address"
                    className="input input-bordered w-full input-ghost"
                  />

                  <FormControlInput
                    fcstyle="w-full mb-8"
                    lblstyle="text-[black] font-[800]"
                    lblname="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full input-ghost"
                  />

                  <div className="form-control w-full">
                    {loading ? (
                      <ClipLoader color="#ea5422" className="m-auto" />
                    ) : (
                      <button type="submit" className="btn btn-primary rounded-full">
                        LOGIN
                      </button>
                    )}
                  </div>
                </Form>
              </Formik>
            </section>

            <div className="flex mt-4 justify-center content-center">
              <hr className="w-full m-auto  " />
              <p className="px-4 text-[grey]">or</p>
              <hr className="w-full m-auto" />
            </div>

            <section className="flex justify-center mt-4">
              <div className="">
                <figure className="rounded-full bg-white flex justify-center p-1">
                  <FcGoogle size={30} className="" />
                </figure>
              </div>
            </section>

            <section className="mt-4 text-center">
              <p className="text-[grey]">
                Dont have an account?{" "}
                <Link to="/register" className="ml-2 text-primary">
                  Create an account!
                </Link>
              </p>
            </section>
          </div>
        </section>

        <section className="text-[#fff] bg-[url('./assets/login.jpg')] bg-no-repeat bg-center bg-cover rounded-tl-[30px] rounded-br-[30px] flex justify-center content-center ">
          <div className="flex justify-center content-center flex-col">
            <h1 className="text-[32px] text-center">Start your camping with us</h1>
            <p className="text-[12px] text-center">
              Discover the natural wonders of the Philippines with YelpCamp.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Login;
