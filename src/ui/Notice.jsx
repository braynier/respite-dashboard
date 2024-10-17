import styled from "styled-components";

const StyledNotice = styled.p`
  text-align: center;
  background-color: var(--color-yellow-100);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function Notice({ children }) {
  return <StyledNotice>{children}</StyledNotice>;
}

export default Notice;
