import React, {
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";

import { FormWrapper } from "./Style";
import { TodoContext } from "../../context/TodoContext";

interface Todo {
  id: number;
  name: string;
}

function Form({}: Todo) {
  const [todoLabel, setTodoLabel] = useState<string>("");
  const [todos, setTodos] = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos([
      ...todos,
      { id: todos.length + 1, name: todoLabel, completed: false, edit: false },
    ]);
    setTodoLabel("");
  };

  return (
    <div>
      <FormWrapper>
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Todo"
            value={todoLabel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setTodoLabel(e.target.value)
            }
          />
          <input type="submit" value="Add Todo" />
        </form>
      </FormWrapper>
    </div>
  );
}

export default Form;
