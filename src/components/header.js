import React from "react";
import module from "../styles/header.module.scss";
import { Link } from "gatsby"

const Header = (props) => (
  <header className={module.header}>
    <div className={module.accent} />
    <h1 className={module.brand}>
      <Link to={"/"}>{props.children}</Link>
    </h1>
  </header>
);

export default Header;
