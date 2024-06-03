import StyledTitle from "./Title.styles";

type TitlePropsType = {
  children: string;
  color?: string;
};

const Title: React.FC<TitlePropsType> = props => {
  return <StyledTitle {...props} />;
};

export default Title;
