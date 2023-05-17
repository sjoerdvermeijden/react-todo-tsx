import styled from 'styled-components';

export const ListWrapper = styled.div`
  background: var(--lightgray);
  border-radius: 3px;

  .list {
    display: flex;
    flex-direction: column;
    list-style: none;

    &__item {

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &--completed {
        
        .list-item__todo {
          background: var(--green);
        }
        
      }

    }

  }

  .list-item {
    display: flex;

    &__button {
      padding: 8px;
      color: white;
      border-width: 0;
      border-radius: 3px;

      &:hover,
      &:focus {
        cursor: pointer;
      }

      &--edit {
        background: #2196f3;
      }
      
      &--delete {
        background: red;
      }
      
      &--completed {
        background: green;
      }

      &:not(:last-child) {
        margin-right: 5px;
      }
      
    }

    &__label {
      flex-grow: 1;
      padding: 8px;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__todo-container {
      display: flex;
      flex-grow: 1;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__todo {
      display: inline-block;
      background: white;
      border-radius: 3px;
      padding: 8px;
      width: 100%;
      font-size: 12px;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }
  }
`;