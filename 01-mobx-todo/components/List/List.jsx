/**  @jsx jsx  */

import { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../pages/_app";
import { css, jsx } from "@emotion/core";

const ListItem = ({ checked, title, index }) => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <input
        css={css`
          margin-right: 8px;
        `}
        onChange={() => store.updateTodo(index)}
        checked={checked}
        type="checkbox"
      />
      <p>{title}</p>
    </div>
  ));
};

const List = () => {
  const store = useContext(StoreContext);

  if (!store.listLength) return "No items in your todo list";

  return useObserver(() =>
    store.list.map((el, index) => (
      <ListItem
        key={el.title}
        index={index}
        onChange={store.updateTodo}
        checked={el.checked}
        title={el.title}
      />
    ))
  );
};

export default List;
