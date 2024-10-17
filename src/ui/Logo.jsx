import styled from "styled-components";
import Heading from "./Heading";

const StyledLogo = styled.div`
  text-align: center;

  @media (max-width: 1180px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="./logo-light.jpg" alt="Logo" />
      <Heading as="h3">The Respite</Heading>
    </StyledLogo>
  );
}

export default Logo;
