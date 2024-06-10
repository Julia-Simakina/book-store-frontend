import styled from "styled-components";
type PageSelectButtonType = {
  onClick?: any;
  select: boolean;
};

const PageSelectButton: React.FC<PageSelectButtonType> = (props) => {
  return (
    <StyledPageSelectButton {...props} onClick={props.onClick}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill={props.select ? "#0D1821" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7"
          cy="6.99998"
          r="5.66667"
          stroke="#0D1821"
          stroke-width="2"
        />
      </svg>
    </StyledPageSelectButton>
  );
};
const StyledPageSelectButton = styled.button<PageSelectButtonType>`
  background: none;
  border: none;
  font-size: 0;
  cursor: pointer;
`;
export default PageSelectButton;
