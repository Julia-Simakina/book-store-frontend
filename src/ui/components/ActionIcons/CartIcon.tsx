import { StyledIcon } from "./ActionIcons.styled";

const CartIcon = () => {
  return (
    <StyledIcon width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d="M1.08325 2.16675H3.81224C4.74964 2.16675 5.56127 2.81781 5.76462 3.73289L6.49992 7.04175M6.49992 7.04175L7.77082 14.0317C8.28954 16.8847 10.7743 18.9584 13.674 18.9584H17.4189C20.2203 18.9584 22.6488 17.0199 23.2697 14.2881L24.5001 8.87418C24.7134 7.93554 24 7.04175 23.0374 7.04175H6.49992Z"
        stroke="#F0F4EF"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="9.20833"
        cy="22.7501"
        rx="1.08333"
        ry="1.08333"
        stroke="#F0F4EF"
        stroke-width="2"
      />
      <ellipse
        cx="22.2083"
        cy="22.7501"
        rx="1.08333"
        ry="1.08333"
        stroke="#F0F4EF"
        stroke-width="2"
      />
    </StyledIcon>
  );
};

export default CartIcon;
