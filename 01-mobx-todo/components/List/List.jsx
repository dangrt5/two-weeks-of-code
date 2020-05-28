/**  @jsx jsx  */

import propTypes from "prop-types";
import { css, jsx } from "@emotion/core";

const ListItem = ({ checked, title, onChange, index }) => {
  return (
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
        onChange={() => onChange(index)}
        checked={checked}
        type="checkbox"
      />
      <p>{title}</p>
    </div>
  );
};

const List = ({ data = [], checkboxClick }) => {
  if (!data.length) return "No items in your todo list";

  return data.map((el, index) => (
    <ListItem
      index={index}
      onChange={checkboxClick}
      checked={el.checked}
      title={el.title}
    />
  ));
};

List.propTypes = {
  data: propTypes.array,
};

export default List;
