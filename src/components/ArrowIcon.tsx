import styled from "styled-components";

type ArrowIconType = {
  rotate?: string;
};

const ArrowIcon: React.FC<ArrowIconType> = props => (
  <StyledArrowIcon
    {...props}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 5L15.9632 11.9632L9 18.9263'
      stroke='#344966'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </StyledArrowIcon>
);

const StyledArrowIcon = styled.svg`
  position: absolute;
  right: 8px;
  top: 12px;
  /* transform: rotate(90deg); */
`;

export default ArrowIcon;
