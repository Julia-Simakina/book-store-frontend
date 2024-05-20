import { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import StyledMainWrapper from './StyledMainWrapper';
import Title from '../Title';
import Form from '../Form';
import boyImg from '../../images/boy.svg';
import Input from '../Input';
import StyledPage from './StyledPage';
import { useDispatch } from 'react-redux';
import emailIcon from '../../images/Mail.svg';
import hideIcon from '../../images/Hide.svg';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../http/api';
import { setUser } from '../../store/UserSlice';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();
  const handleSignIn = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const newUser = {
        email,
        password
      };

      const loginedUser = await loginUser(newUser);

      localStorage.setItem('jwt', loginedUser.tokens.accessToken);
      console.log('User logined successfully:', loginedUser);

      dispatch(setUser(loginedUser.user));
      navigate('/');
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
            <Title>Log In</Title>
            <Form onSubmit={handleSignIn}>
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

export default SignIn;
