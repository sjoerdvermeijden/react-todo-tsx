import React, { useState, useContext } from "react";

import { ListWrapper } from "./Style";
import { TodoContext } from "../../context/TodoContext";

function List() {
  const [todos, setTodos] = useContext(TodoContext);
  const [editValue, setEditValue] = useState<string>("");

  const editButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();

    const newList = todos.map((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
        setEditValue(item.name);
      }
      return item;
    });

    setTodos(newList);
  };
  const saveButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();

    const newList = todos.map((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
        item.name = editValue;
      }
      return item;
    });

    setTodos(newList);
  };
  const deleteButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    const newList = todos.filter((item) => item.id !== id);

    setTodos(newList);
  };
  const completedButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();

    const newList = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newList);
  };

  return (
    <ListWrapper>
      <ul className="list">
        {todos?.map((item) => {
          return (
            <>
              <li
                className={
                  "list__item " +
                  (item.completed ? "list__item--completed" : "")
                }
                key={item.id}
              >
                <div className="list-item">
                  {
                    <>
                      {item.edit ? (
                        <div className="list-item__todo-container">
                          <input
                            type="text"
                            name=""
                            id=""
                            value={editValue}
                            className="list-item__label"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ): void => setEditValue(e.target.value)}
                          />
                          <button
                            className="list-item__button list-item__button--edit"
                            onClick={(e) => saveButton(e, item.id)}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="list-item__todo-container">
                          <span className="list-item__todo">{item.name}</span>
                          <button
                            className="list-item__button list-item__button--edit"
                            onClick={(e) => editButton(e, item.id)}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </>
                  }
                  <button
                    className="list-item__button list-item__button--delete"
                    onClick={(e) => deleteButton(e, item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="list-item__button list-item__button--completed"
                    onClick={(e) => completedButton(e, item.id)}
                  >
                    Completed
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </ListWrapper>
  );
}

export default List;
