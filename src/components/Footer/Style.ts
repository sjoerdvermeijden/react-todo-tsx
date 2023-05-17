import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 25px 0;
  background: var(--darkgray);
  color: white;

  div {
    display: flex;
  }

  p {

    span {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 5px;
      }
      
    }
    
    &:not(:last-child) {
      margin-right: 5px;
    }
    
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
