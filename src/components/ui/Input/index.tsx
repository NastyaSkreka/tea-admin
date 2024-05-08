import { InputContainer, Label, StyledInput, ErrorMessage, StyledTextArea, IconContainer, InputWithIcon} from './styles'

interface FormInputProps {
    label: string;
    name: string;
    register: any; 
    errors: any; 
    type?: 'text' | 'number' | 'password' | 'textarea' | 'file';
    icon?: JSX.Element; 
  }

export default function Input({ label, name, register, errors, type = 'text',icon  }: FormInputProps) {
    return (
        <InputContainer>
        <Label>{label}</Label>
         {type === 'textarea' ? (
        <StyledTextArea {...register('description')}  />
      ) : (
        <InputWithIcon>
            {icon && <IconContainer>{icon}</IconContainer>}
        <StyledInput type={type} {...register(name)} />
        </InputWithIcon>
      )}
        {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
      </InputContainer>
    )
}
