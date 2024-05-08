import { useActions } from "../../../../hooks/useActions";
import { signInSchema } from "../../../../schemas/authentication.schema";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormContainer } from "../../../../components/Products/styles";
import { SignUpFormInfo } from "../styles";
import Input from "../../../../components/ui/Input";

const LoginForm = () => {
  const { login } = useActions();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });
  const onSubmit = (data: any) => {
    login(data);
    navigate("/admin/statistic");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <SignUpFormInfo>
          <Input
            label="Email"
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            register={register}
            errors={errors}
          />
        </SignUpFormInfo>
      </FormContainer>
      <Button label="Sign Up" color="white" />
    </form>
  );
};

export default LoginForm;
