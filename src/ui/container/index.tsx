import { ReactNode } from "react";
import StyledPage from "./StyledPage";
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
