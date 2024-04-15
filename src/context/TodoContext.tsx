import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
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

  if (localStorage.getItem("todos") !== null) {
    const todoItems = JSON.parse(localStorage.getItem("todos") || "");
    //...
    return todoItems;
  } else {
    return [];
  }
};

export const TodoContext = createContext<ContextValue>([[], () => { }]);

export function TodoComponent({ children }: Props) {
  const [todos, setTodos] = useState<Todo[]>(getItems());

  return (
    <>
      <TodoContext.Provider value={[todos, setTodos]}>
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoComponent;
