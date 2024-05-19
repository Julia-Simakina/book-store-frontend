import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import StyledMainWrapper from './StyledMainWrapper ';
import Title from '../Title';
import Form from '../Form';
import boyImg from '../../images/boy.svg';
import StyledPage from './StyledPage';
import { useState } from 'react';
import Input from '../Input';
import emailIcon from '../../images/Mail.svg';
import hideIcon from '../../images/Hide.svg';
import { createUser } from '../../http/api';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value);
  };

  const handleSignUp = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== repeatPassword) return;
    try {
      const newUser = {
        email,
        password
      };

      const createdUser = await createUser(newUser);
      console.log('User created successfully:', createdUser);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledPage>
      <StyledMainWrapper>
        <Header />
        <StyledPageContainer>
          <div>
            <Title>Sign Up</Title>
            <Form onSubmit={handleSignUp}>
              <Input
                src={emailIcon}
                type='email'
                id='email'
                value={email}
                onChange={handleEmailInputChange}
                inputTitle='Email'
                hintTitle='Enter your email'
              />
              <Input
                src={hideIcon}
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordInputChange}
                inputTitle='Password'
                hintTitle='Enter your password'
              />
              <Input
                src={hideIcon}
                type='password'
                id='password'
                value={repeatPassword}
                onChange={handleRepeatPasswordInputChange}
                inputTitle='Password replay'
                hintTitle='Repeat your password without errors'
              />
            </Form>
          </div>
          <img src={boyImg} alt='The boy is reading' className='background-image' />
        </StyledPageContainer>
      </StyledMainWrapper>
      <Footer />
    </StyledPage>
  );
};

const StyledPageContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 90px auto 55px;
  justify-content: space-between;

  .background-image {
    width: 612px;
  }
`;

export default SignUp;
