import StyledSubTitle from "./SubTitle.styles";

type TitlePropsType = {
  children: string;
  color?: string;
};

const SubTitle: React.FC<TitlePropsType> = (props) => {
  return <StyledSubTitle {...props} />;
};

export default SubTitle;
