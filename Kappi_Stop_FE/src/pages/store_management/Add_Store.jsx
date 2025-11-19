import React from "react";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../components/InputField";
import axios from "axios";
import {API} from "../../Host"

const schema = yup.object().shape({
  store_name: yup.string().required("Store Name is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  contact_number: yup.string().required("Contact Number is required"),
  opening_hours: yup.string().required("Opening Hours is required"),
});
const Add_Store = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${API}/store/createstore`, data);

      if (response.status === 201 || response.status === 200) {
        onClose();
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <>
      <Modal
        title="Add Store"
        onClose={onClose}
        Children={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" px-7 py-6">
                <div className=" lg:space-y-4 space-y-3">
                  <InputField
                    label="Store Name"
                    name="store_name"
                    placeholder="Enter the Store Name"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="City"
                    name="city"
                    placeholder="Enter the City"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Address"
                    name="address"
                    placeholder="Enter the Address"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Contact Number"
                    name="store_number"
                    placeholder="Enter the Contact Number"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Opening Hours"
                    name="opening_hours"
                    placeholder="Enter the Opening Hours"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer  border  border-dark-yellow  text-dark-yellow px-6 py-2   rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-6 bg-layout-text text-white py-2   rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </>
        }
      />
    </>
  );
};

export default Add_Store;
