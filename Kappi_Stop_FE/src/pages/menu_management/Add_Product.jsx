import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../components/Modal";
import { InputField } from "../../components/InputField";

const schema = yup.object().shape({
  product_name: yup.string().required("UserID is required"),
  category: yup.string().required("Name is required"),
  price: yup.string().required("EmailID is required"),
  add_ons: yup.string().required("Add-Ons is required"),
  status: yup
    .string()
    .oneOf(["Available", "Unavailable"], "Invalid Status")
    .required("Status is required"),
});

const Add_Product = ({onClose}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };
  return (
    <>
      <Modal
        title="Add Product"
        onClose={onClose}
        Children={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" px-7 py-6">
                <div className=" lg:space-y-4 space-y-3">
                  <InputField
                    label="Product Name"
                    name="product_name"
                    placeholder="Enter the Product Name "
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Category"
                    name="category"
                    placeholder="Enter the Category"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Add-ons"
                    name="add_ons"
                    placeholder="Enter the Add-ons"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Price"
                    name="price"
                    placeholder="Enter the price"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer  border  border-ltext-layout-text text-layout-text px-6 py-2   rounded"
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

export default Add_Product;
