import styled from "styled-components";
type ArrowLrftButtonType = {
  onClick?: () => void;
  disabled: boolean;
  transform?: string;
};

const ArrowButton: React.FC<ArrowLrftButtonType> = (props) => {
  return (
    <StyledArrowButton
      {...props}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.96317 1L1 7.96317L7.96317 14.9263"
          stroke={props.disabled ? "#96969c" : "#0D1821"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledArrowButton>
  );
};
const StyledArrowButton = styled.button<ArrowLrftButtonType>`
  transform: ${(props) => (props.transform ? props.transform : "none")};
  background: none;
  border: none;
  font-size: 0;
  cursor: pointer;
`;
export default ArrowButton;
// #B9BAC3
