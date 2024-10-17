import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1180px) {
        flex-direction: column;
      }
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  ${(props) =>
    props.type === "grid" &&
    css`
      grid-column: 1 / span 4;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.4rem;

      @media (max-width: 1168px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.2rem;
      }
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
        row-gap: 1.2rem;
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
