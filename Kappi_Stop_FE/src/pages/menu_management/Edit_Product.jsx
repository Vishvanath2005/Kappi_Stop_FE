import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../components/Modal";
import { InputField } from "../../components/InputField";

const schema = yup.object().shape({
  productname: yup.string().required("UserID is required"),
  category: yup.string().required("Name is required"),
  price: yup.string().required("EmailID is required"),
  add_ons: yup.string().required("Add-Ons is required"),
  status: yup
    .string()
    .oneOf(["Available", "Unavailable"], "Invalid Status")
    .required("Status is required"),
});

const Edit_Product = ({onClose,item}) => {
    console.log(item);
    
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
        title="Edit Product"
        onClose={onClose}
        Children={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" px-7 py-6">
                <div className=" lg:space-y-4 space-y-3">
                  <InputField
                    label="Product Name"
                    name="product_name"
                    placeholder={item.product_name}
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Category"
                    name="category"
                    placeholder={item.category}
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Add-ons"
                    name="add_ons"
                    placeholder={item.add_ons}
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="Price"
                    name="price"
                    placeholder={item.price}
                    register={register}
                    errors={errors}
                  />

                  <InputField
                    label="Status"
                    name="status"
                    register={register}
                    errors={errors}
                    placeholder={item.status}
                    type="select"
                    options={[
                      {
                        value: "Available",
                        label: "Available",
                      },
                      { value: "Unavailable", label: "Unavailable" },
                    ]}
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

export default Edit_Product;
