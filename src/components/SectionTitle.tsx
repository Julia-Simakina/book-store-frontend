import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  color: #0d1821;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;

const SectionTitle: React.FC = () => {
  return <StyledSectionTitle>Catalog</StyledSectionTitle>;
};

export default SectionTitle;
