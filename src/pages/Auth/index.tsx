import { useState } from 'react';
import {
  Container,
  Title,
  Description,
  StyledForm,
  FormSwitcher,
  SwitchButton,
  Spacer,
} from './styles';
import LoginForm from './Forms/LogIn';
import SignUp from './Forms/SignUp';

export default function ExplorePage() {
  const [activeForm, setActiveForm] = useState('login');

  const handleSwitchForm = (formType: string) => {
    setActiveForm(formType);
  };
  return (
    <Container>
      <Title>CHAI</Title>
      <Description> For admin </Description>

      <StyledForm>
        <FormSwitcher>
          <SwitchButton
            onClick={() => handleSwitchForm('login')}
            isActive={activeForm === 'login'}
          >
            Login
          </SwitchButton>
          <Spacer />
          <SwitchButton
            onClick={() => handleSwitchForm('signup')}
            isActive={activeForm === 'signup'}
          >
            Signup
          </SwitchButton>
        </FormSwitcher>
        {activeForm === 'login' ? <LoginForm /> : <SignUp />}
      </StyledForm>
    </Container>
  );
}
