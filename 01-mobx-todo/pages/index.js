/** @jsx jsx */
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import List from "../components/List/List";
import { Button } from "../components/Button/Button";
import { css, jsx } from "@emotion/core";

const MockData = [
  {
    title: "Picking weeds",
    checked: false,
  },
  {
    title: "Watch Future Man",
    checked: true,
  },
];

const Index = () => {
  const [data, setData] = useState([]);

  const checkboxClick = (itemNumber) => {
    setData((prevData) => {
      const newData = [...prevData];
      const item = newData[itemNumber];
      item.checked = !item.checked;
      return newData;
    });
  };

  return (
    <Layout title="Todo List">
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <List checkboxClick={checkboxClick} data={data} />
        <Button
          css={css`
            margin-top: 24px;
            background-color: #1b912d;
            color: white;
            &:hover: {
              background-color: #1fa633;
            }
          `}
        >
          Add New Item
        </Button>
      </div>
    </Layout>
  );
};

export default Index;
