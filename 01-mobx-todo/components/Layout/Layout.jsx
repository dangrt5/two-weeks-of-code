import React from "react";
import Header from "../Header/Header";
import styled from "@emotion/styled";
import Styles from "./Layout.styles";

const Title = styled.h1`
  font-weight: 400;
  font-size: 2.4rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`;

const Layout = ({ children, title }) => {
  return (
    <div>
      <Header />
      <Content>
        <Title>{title}</Title>
        <div>{children}</div>
      </Content>
      <Styles />
    </div>
  );
};

export default Layout;
