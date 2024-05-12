import Button from '../Button';
import Title from '../Title';
import styled from 'styled-components';

const Header = styled.header`
  padding: 20px;
`;

const SubTitle = styled.p`
  color: #666;
  font-size: 16px;
`;

const HomePage: React.FC = () => {
  return (
    <Header>
      <Title color={'blue'}>Home page</Title>
      <SubTitle>Organize your work and life, finally.</SubTitle>
      <Button $primary>button</Button>
    </Header>
  );
};

export default HomePage;
