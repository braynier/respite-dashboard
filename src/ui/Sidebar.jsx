import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1180px) {
    grid-row: 2;
    grid-column: span 2;
    display: flex;
    /* margin: 0 auto; */
    justify-content: center;
    flex-direction: row;
    border-right: none;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;

    justify-content: start;
    padding: 1.2rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
