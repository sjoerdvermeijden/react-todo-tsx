import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 8px;
  border-radius: 3px;
  background: var(--lightgray);

  form {
    display: flex;
    flex-grow: 1;
    

    input {
      padding: 8px;
      border-width: 0;

      &[type="text"] {
        flex-grow: 1;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      &[type="submit"] {
        background: var(--darkgray);
        color: white;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
  }
`;
