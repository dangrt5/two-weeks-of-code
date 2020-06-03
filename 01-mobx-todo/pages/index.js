/** @jsx jsx */
import { useContext } from "react";
import { StoreContext } from "./_app";
import { useObserver } from "mobx-react";
import Layout from "../components/Layout/Layout";
import List from "../components/List/List";
import { Button } from "../components/Button/Button";
import { css, jsx } from "@emotion/core";

const Index = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <Layout title="Todo List">
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <List />
      </div>
    </Layout>
  ));
};

export default Index;
