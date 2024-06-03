import styled from "styled-components";
type LikeIconType = {
  onClick?: () => void;
  size?: "small" | "large";
  isLiked: boolean;
};
const sizes = {
  small: {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    cx: "24",
    cy: "24",
    r: "24",
  },
  large: {
    width: "59",
    height: "59",
    viewBox: "0 0 59 59",
    cx: "29.5",
    cy: "29.5",
    r: "29.5",
  },
};
const LikeIcon: React.FC<LikeIconType> = (props) => {
  const sizeProps = sizes[props.size || "small"];
  return (
    <>
      <StyledLikeIcon
        {...props}
        width={sizeProps.width}
        height={sizeProps.height}
        viewBox={sizeProps.viewBox}
        fill={props.isLiked ? "white" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={sizeProps.cx}
          cy={sizeProps.cy}
          r={sizeProps.r}
          fill="#344966"
        />
        <path
          d="M14.0033 17.0865C11.4435 19.6463 11.4436 23.7965 14.0033 26.3563L23.9319 36.2849L24.0002 36.2166L24.0685 36.285L33.9971 26.3564C36.5568 23.7966 36.5568 19.6464 33.9971 17.0866C31.4373 14.5268 27.287 14.5268 24.7273 17.0866L24.3538 17.4601C24.1585 17.6553 23.8419 17.6553 23.6467 17.4601L23.2731 17.0865C20.7133 14.5267 16.5631 14.5267 14.0033 17.0865Z"
          stroke="#F0F4EF"
          strokeWidth={props.isLiked ? "0" : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledLikeIcon>
    </>
  );
};
const StyledLikeIcon = styled.svg<LikeIconType>`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  opacity: ${(props) => (props.isLiked ? "1" : "0.5")};
  border: none;
  cursor: pointer;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;
export default LikeIcon;
