import { Formik, Field, Form, FormikHelpers } from "formik";
import { GiCampfire, GiShower, GiElectric, GiHiking, GiBoatFishing } from "react-icons/gi";
import { HiLocationMarker, HiOutlineUpload } from "react-icons/hi";
import { TbSwimming } from "react-icons/tb";
import { useDropzone } from "react-dropzone";

import { useState } from "react";
import ImageItem from "../components/ImageItem";

import Philippines from "../data/Philippines.json";
import axios from "axios";
import { campground_api } from "../utils/variables";

interface FileInterface extends File {
  preview: string;
}
interface NewCampInterface {
  CampName: string;
  Province: string;
  CityOrMunicipalities: string;
  Address: string;
  Description: string;
  Amenities: string[];
  Activites: string[];
}

function NewCampground() {
  const [files, setFiles] = useState<FileInterface[]>([]);
  const [locationFilter, setLocationFilter] = useState(Philippines);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const provinceName = locationFilter.map(({ province }) => province);
  const provinceCity = locationFilter.find(
    (province) => province.province === "Cebu"
  )?.CityOrMunicipalities;

  const removeFile = (name: string): void => {
    setFiles(files.filter((file) => name !== file.preview));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const initialValues: NewCampInterface = {
    CampName: "",
    Province: "",
    CityOrMunicipalities: "",
    Address: "",
    Description: "",
    Amenities: [],
    Activites: [],
  };

  const handleSubmit = async (values: NewCampInterface) => {
    const response = await axios.post(`${campground_api}`, values);
    console.log(response);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    { setFieldValue }: FormikHelpers<NewCampInterface>
  ) => {
    const selected = e.target.value;
    setFieldValue("Province", e.target.value);
    setSelectedLocation(e.target.value);
    console.log(selectedLocation);
  };
  return (
    <main className="flex-1 grid grid-cols-2 mt-10">
      <div className="px-16 py-4 my-10 mx-auto">
        <header className="mb-2">
          <h1 className="text-4xl font-[900] mb-1">Showcase Your Campsite!</h1>
          <p className="text-[grey]">
            Get discovered by thousands of campers - list your campsite on Yelpcamp.
          </p>
        </header>
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="form-control w-full">
                <label htmlFor="" className="label ">
                  <span className="label-text text-black font-[900] flex">
                    <GiCampfire size={20} className="mr-2" />
                    Camp name
                  </span>
                </label>
                <Field
                  name="CampName"
                  placeholder="Camp name"
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

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    component="select"
                    type="text"
                    name="Province"
                    id=""
                    list="provinces"
                    placeholder="Province"
                    className="select select-sm select-primary mb-2"
                  >
                    {provinceName.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Field>

                  <Field
                    component="select"
                    type="text"
                    name="CityOrMunicipalities"
                    list="CityOrMunicipalities"
                    placeholder="City or Municipality"
                    className="select select-sm select-primary"
                  >
                    {provinceCity?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                </div>
                <Field
                  type="text"
                  name="Address"
                  id=""
                  placeholder="Address"
                  className="input input-sm input-primary"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="label">
                  <span className="label-text text-black font-[900]">Description</span>
                </label>
                <Field
                  component="textarea"
                  name="Description"
                  placeholder="A short or brief description about the campsite."
                  id=""
                  cols={30}
                  rows={2}
                  className="textarea textarea-bordered textarea-primary w-full focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 mb-4">
                <div>
                  <label htmlFor="" className="label">
                    <span className="label-text text-black font-[900]">Activities</span>
                  </label>
                  <div className="form-control mb-1">
                    <label htmlFor="" className="flex">
                      <Field
                        type="checkbox"
                        name="Activities"
                        value="Hiking"
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
                      <Field
                        type="checkbox"
                        name="Activities"
                        value="Fishing"
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
                      <Field
                        type="checkbox"
                        name="Activities"
                        value="Swimming"
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
                    <span className="label-text text-black font-[900]">Amenities</span>
                  </label>
                  <div className="form-control mb-1">
                    <label htmlFor="" className="flex">
                      <Field
                        type="checkbox"
                        name="Amenities"
                        value="Campfire"
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
                      <Field
                        type="checkbox"
                        name="Amenities"
                        value="Shower"
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
                      <Field
                        type="checkbox"
                        name="Activities"
                        value="Electric Hookups"
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
            </Form>
          </Formik>
        </div>
      </div>
      <div className="w-full py-4  my-10 mx-auto ">
        <header>
          <h1 className="text-2xl font-[900] text-start">Upload Image</h1>
        </header>

        <section className="w-full">
          <div className="grid grid-cols-5 gap-2 mt-2">
            {files.length > 0
              ? files.map((file) => (
                  <ImageItem key={file.name} source={file.preview} remove={removeFile} />
                ))
              : ""}
          </div>

          <div
            className="p-4 border-gray-500 border-dashed border-2 mt-2 hover:cursor-pointer"
            {...getRootProps()}
          >
            <div className="flex justify-center">
              <HiOutlineUpload size={20} className="my-auto mr-2" />
              <h1 className="italic">Select or Drag & Drop file to upload.</h1>
              <input className="h-full" {...getInputProps()} />
            </div>
            <p className="text-[12px] text-center text-[grey]">Maximum of 5 Images.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
export default NewCampground;
