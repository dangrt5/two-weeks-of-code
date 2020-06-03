import React, { useContext, createContext } from "react";
import { observer } from "mobx-react";
import StoreInstance from "../store/index";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

const TodosStore = createContext(StoreInstance);

const TodosTest = observer(() => {
  const store = useContext(TodosStore);

  return (
    <div data-testid="list-container">
      {store.list.map((task, index) => (
        <div key={task.title}>
          <input
            data-testid={`checkbox-${index + 1}`}
            type="checkbox"
            checked={task.checked}
            onChange={() => store.updateTodo(index)}
          />
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
});

describe("Testing List", () => {
  test("Todo List Renders", () => {
    const { getByTestId } = render(<TodosTest />);
    const todoList = getByTestId("list-container");

    expect(todoList.children.length).toBe(2);
  });

  test("Update a todo checkbox", () => {
    const { getByTestId } = render(<TodosTest />);
    const checkbox1 = getByTestId("checkbox-1");
    const checkbox2 = getByTestId("checkbox-2");

    expect(checkbox1.nextSibling).toHaveTextContent("Picking weeds");
    fireEvent.change(checkbox1, { target: { checked: true } });
    expect(checkbox1).toBeChecked();

    expect(checkbox2.nextSibling).toHaveTextContent("Watch Future Man");
    fireEvent.change(checkbox2, { target: { checked: true } });
    expect(checkbox2).toBeChecked();
    fireEvent.change(checkbox2, { target: { checked: false } });
    expect(checkbox2).not.toBeChecked();
  });
});
