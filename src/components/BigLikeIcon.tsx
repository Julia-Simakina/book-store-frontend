import styled from "styled-components";

type BigLikeIconType = {
  fill: string;
  opacity?: string;
  className?: string;
  onClick: () => void;
};

const BigLikeIcon: React.FC<BigLikeIconType> = (props) => (
  <>
    <StyledLikeIcon
      {...props}
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29.5" cy="29.5" r="29.5" fill="#344966" />
      <path
        d="M17.2122 21.0021C14.0658 24.1485 14.0658 29.2499 17.2122 32.3963L29.4161 44.6001L29.5 44.5162L29.584 44.6002L41.7879 32.3964C44.9343 29.25 44.9343 24.1486 41.7879 21.0022C38.6415 17.8558 33.5401 17.8558 30.3937 21.0022L29.8536 21.5423C29.6584 21.7376 29.3418 21.7376 29.1465 21.5423L28.6063 21.0021C25.46 17.8557 20.3586 17.8557 17.2122 21.0021Z"
        stroke="#F0F4EF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </StyledLikeIcon>
  </>
);

const StyledLikeIcon = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  opacity: ${(props) => props.opacity || "0.5"};
  border: none;
  cursor: pointer;
  z-index: 5;

  &:hover {
    opacity: 0.8;
  }
`;

export default BigLikeIcon;
