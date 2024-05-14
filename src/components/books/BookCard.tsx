import styled from 'styled-components';
import like from '../../images/button_save.svg';
import Button from '../Button';
import StarRating from '../Rating';

const StyledBookCard = styled.div`
  color: ${props => props.color || '#0D1821'};
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  width: 305px;
  position: relative;

  .book-title {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    color: #344966;
    width: 300px;
    /* margin-top: 30px; */
  }

  .book-author {
    width: 300px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    color: #b9bac3;
  }

  .book-like-btn {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    background-image: url(${like});
    opacity: 0.5;
    border: none;
    cursor: pointer;
  }
`;

type BookCardType = {
  color?: string;
  src: string;
  title: string;
  author: string;
};

const BookCard: React.FC<BookCardType> = props => {
  return (
    <StyledBookCard>
      <button className='book-like-btn'></button>
      <img src={props.src} alt='' />
      <h3 className='book-title'>{props.title}</h3>
      <p className='book-author'>{props.author}</p>
      <StarRating />
      {/* <BasicRating /> */}
      <Button width='305px' fontSize='20px'>
        $23.00 USD
      </Button>
    </StyledBookCard>
  );
};

export default BookCard;
