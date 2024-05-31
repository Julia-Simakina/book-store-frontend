import { ReactNode } from "react";
import StyledPage from "./styled";
import StyledMainWrapper from "./StyledMainWrapper";

interface IProps {
  children: ReactNode;
  FooterSlot: React.FC;
}

export default function PageContainer({ children, FooterSlot }: IProps) {
  return (
    <StyledPage>
      <StyledMainWrapper>{children}</StyledMainWrapper>
      <FooterSlot />
    </StyledPage>
  );
}
