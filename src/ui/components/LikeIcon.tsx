import styled from "styled-components";
type LikeIconType = {
  onClick?: () => void;
  size?: "small" | "large";
  isLiked: boolean;
  top?: string;
  left?: string;
  right?: string;
};
const sizes = {
  small: {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    cx: "24",
    cy: "24",
    r: "24",
    d: "M14.0033 17.0865C11.4435 19.6463 11.4436 23.7965 14.0033 26.3563L23.9319 36.2849L24.0002 36.2166L24.0685 36.285L33.9971 26.3564C36.5568 23.7966 36.5568 19.6464 33.9971 17.0866C31.4373 14.5268 27.287 14.5268 24.7273 17.0866L24.3538 17.4601C24.1585 17.6553 23.8419 17.6553 23.6467 17.4601L23.2731 17.0865C20.7133 14.5267 16.5631 14.5267 14.0033 17.0865Z"
  },
  large: {
    width: "59",
    height: "59",
    viewBox: "0 0 59 59",
    cx: "29.5",
    cy: "29.5",
    r: "29.5",
    d: "M17.2122 21.0021C14.0658 24.1485 14.0658 29.2499 17.2122 32.3963L29.4161 44.6001L29.5 44.5162L29.584 44.6002L41.7879 32.3964C44.9343 29.25 44.9343 24.1486 41.7879 21.0022C38.6415 17.8558 33.5401 17.8558 30.3937 21.0022L29.8536 21.5423C29.6584 21.7376 29.3418 21.7376 29.1465 21.5423L28.6063 21.0021C25.46 17.8557 20.3586 17.8557 17.2122 21.0021Z"
  }
};
const LikeIcon: React.FC<LikeIconType> = props => {
  const sizeProps = sizes[props.size || "small"];
  return (
    <>
      <StyledLikeIcon
        {...props}
        width={sizeProps.width}
        height={sizeProps.height}
        viewBox={sizeProps.viewBox}
        fill={props.isLiked ? "white" : "none"}
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx={sizeProps.cx} cy={sizeProps.cy} r={sizeProps.r} fill='#344966' />
        <path
          d={sizeProps.d}
          stroke='#F0F4EF'
          strokeWidth={props.isLiked ? "0" : "2"}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </StyledLikeIcon>
    </>
  );
};
const StyledLikeIcon = styled.svg<LikeIconType>`
  position: absolute;
  top: ${props => (props.top ? props.top : "20px")};
  left: ${props => (props.left ? props.left : "none")};
  right: ${props => (props.right ? props.right : "none")};
  background: transparent;
  opacity: ${props => (props.isLiked ? "1" : "0.5")};
  border: none;
  cursor: pointer;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;
export default LikeIcon;
