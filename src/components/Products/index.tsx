import { useForm } from "react-hook-form";
import Title from "../ui/Title";
import { BsCurrencyDollar } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdTime } from "react-icons/io";
import {
  FormContainer,
  InputValuesContainer,
  UploadedImageContainer,
  StyledImage,
} from "./styles";
import UploadImage from "../ui/UploadImage";
import { CiDeliveryTruck } from "react-icons/ci";
import Button from "../ui/Button";
import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../../services/category/CategoryService";
import Select from "react-select";
import Input from "../ui/Input";
import { customStyles } from "../../utils/select.custom.styles";
import { validationSchema } from "../../schemas/create.new.product";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useProfile } from "../../hooks/useProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products() {
  const [selectedOption, setSelectedOption] = useState(null); // value = number
  const { profile } = useProfile();
  const [image, setImage] = useState<File | null>(null);
  const { data: categories } = useQuery({
    queryKey: ["get category"],
    queryFn: () => CategoryService.getAll(),
  });
  const { createProduct } = useActions();
  const selectOptions = categories?.data.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("miles", data.miles);
    formData.append("time", data.time);
    formData.append("userId", String(profile?.data.id));

    if (image) {
      formData.append("image", image);
    }
    if (selectedOption) {
      formData.append("categoryId", selectedOption);
    }

    toast.success("Product successfully created!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    createProduct(formData);
    setSelectedOption(null);
    setImage(null);
    reset();
  };

  return (
    <>
      <Title text="Add new tea" />
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          {image ? (
            <UploadedImageContainer>
              <StyledImage src={URL.createObjectURL(image)} alt="image" />
            </UploadedImageContainer>
          ) : (
            <UploadImage setImage={setImage} />
          )}
          <Input label="Name" name="name" register={register} errors={errors} />
          <Input
            label="Description"
            name="description"
            register={register}
            errors={errors}
            type="textarea"
          />
          <InputValuesContainer>
            <Input
              label="Price"
              name="price"
              register={register}
              errors={errors}
              icon={<BsCurrencyDollar />}
            />
            <Input
              label="Miles"
              name="miles"
              register={register}
              errors={errors}
              icon={<CiDeliveryTruck />}
            />
            <Input
              label="Time (minutes)"
              name="time"
              register={register}
              errors={errors}
              icon={<IoMdTime />}
            />
          </InputValuesContainer>
          <Select
            options={selectOptions}
            onChange={(item: any) => setSelectedOption(item.value)}
            placeholder="Select tea category"
            styles={customStyles}
          />
          <Button label="Create new product" color="white" />
        </FormContainer>
      </form>
    </>
  );
}
