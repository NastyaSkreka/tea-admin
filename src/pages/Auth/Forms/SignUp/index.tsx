import { FormContainer, SignUpFormInfo } from "../styles";
import { useActions } from "../../../../hooks/useActions";
import { signUpSchema } from "../../../../schemas/authentication.schema";
import Button from "../../../../components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/ui/Input";
import { Role } from "../../../../store/user/user.interface";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register: signUp } = useActions();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const onSubmit = (data: any) => {
    signUp({ ...data, role: Role.ADMIN });
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
          <Input
            label="Mobile number"
            name="phone"
            register={register}
            errors={errors}
          />
        </SignUpFormInfo>
      </FormContainer>

      <Button label="Sign Up" color="white" />
    </form>
  );
};

export default SignUp;
