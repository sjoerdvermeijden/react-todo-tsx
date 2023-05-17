import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

type Props = {
  children: any;
};

interface Todo {
  id: number;
  name: string;
  completed: boolean;
  edit: boolean;
}

type ContextValue = [Todo[], Dispatch<SetStateAction<Todo[]>>];

const getItems = () => {
  const todoItems = JSON.parse(localStorage.getItem("todos") || "");

  if (todoItems) {
    return todoItems;
  } else {
    return [];
  }
};

export const TodoContext = createContext<ContextValue>([[], () => {}]);

export function TodoComponent({ children }: Props) {
  const [todos, setTodos] = useState<Todo[]>(getItems());

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todos") || "");
    setTodos(list);
  }, []);

  return (
    <>
      <TodoContext.Provider value={[todos, setTodos]}>
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoComponent;
