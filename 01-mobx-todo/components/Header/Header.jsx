import React from "react";
import Link from "next/link";
import Styles from "./Header.styles";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Link href="/">
          <a className="link-title">Home</a>
        </Link>
      </div>
      <Styles />
    </>
  );
};

export default Header;
