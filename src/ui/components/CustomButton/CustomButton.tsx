import StyledCustomButton from "./CustomButton.styles";

export type CustomButtonPropsType = {
  onClick?: () => void;
  children: string | JSX.Element;
  backgroundColor?: string;
  width?: string;
  color?: string;
  marginTop?: string;
  fontSize?: string;
  type?: string;
  borderRadius?: string;
};

const CustomButton: React.FC<CustomButtonPropsType> = (props) => {
  return <StyledCustomButton {...props}>{props.children}</StyledCustomButton>;
};

export default CustomButton;
