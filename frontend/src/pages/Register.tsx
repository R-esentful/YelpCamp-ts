import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

// Schema
import { registerSchema } from "../schema/registerSchema";

// Components
import FormControlInput from "../components/FormControlInput";

// Variables
import { user_api } from "../utils/variables";
interface DataInterface {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  location: string;
}

function Register() {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: DataInterface = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    location: "",
  };

  const handleSubmit = async (
    values: DataInterface,
    { resetForm, setFieldError }: FormikHelpers<DataInterface>
  ) => {
    setLoading(true);
    const response = await axios.post(user_api, values);
    if (response.data.message) {
      console.log("test");
      for (let [key, value] of Object.entries(initialValues)) {
        setFieldError(key, " ");
      }
      setLoading(false);
    }
  };

  return (
    <main className="main-register">
      <div className="flex-1 grid grid-cols-2 bg-white gap-4 p-[10px]">
        <section className="text-[#fff] bg-[url('./assets/login.jpg')] bg-no-repeat bg-center bg-cover rounded-tl-[30px] rounded-br-[30px] flex justify-center content-center ">
          <div className="flex justify-center content-center flex-col">
            <h1 className="text-[32px] text-center">Start your camping with us</h1>
            <p className="text-[12px] text-center">
              Discover the natural wonders of the Philippines with YelpCamp.
            </p>
          </div>
        </section>
        <section className="p-4 flex flex-col">
          <header>
            <h1 className="text-4xl font-[900] mb-2">Sign Up</h1>
            <p>
              Have an account already?{" "}
              <Link to="/login" className="ml-2 text-primary">
                Login
              </Link>
            </p>
          </header>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={registerSchema}
          >
            <Form className="p-4">
              <FormControlInput
                fcstyle="w-full"
                lblstyle="text-[black] font-[800]"
                lblname="Full name"
                name="name"
                type="text"
                placeholder="Full name"
                className="input input-bordered w-full input-ghost text-black"
              />

              <FormControlInput
                fcstyle="w-full"
                lblstyle="text-[black] font-[800]"
                lblname="Email "
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full input-ghost text-black"
              />

              <div className="grid grid-cols-2 gap-4">
                <FormControlInput
                  fcstyle="w-full"
                  lblstyle="text-[black] font-[800]"
                  lblname="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full input-ghost text-black"
                />

                <FormControlInput
                  fcstyle="w-full"
                  lblstyle="text-[black] font-[800]"
                  lblname="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full input-ghost text-black"
                />
              </div>

              <FormControlInput
                fcstyle="w-full"
                lblstyle="text-[black] font-[800]"
                lblname="Location"
                name="location"
                type="text"
                placeholder="Location"
                className="input input-bordered w-full input-ghost text-black"
              />

              <div className="form-control w-full mt-4">
                {loading ? (
                  <ClipLoader color="#ea5422" className="m-auto" />
                ) : (
                  <button type="submit" className="btn btn-primary rounded-full">
                    CREATE ACCOUNT
                  </button>
                )}
              </div>
            </Form>
          </Formik>

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
        </section>
      </div>
    </main>
  );
}
export default Register;
