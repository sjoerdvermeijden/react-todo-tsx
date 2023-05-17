import styled from "styled-components";

export const ContainerWrapper = styled.div`
  background: var(--lightgray);
  padding: 10px;
  width: 500px;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
