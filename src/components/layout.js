import React from "react"
import module from "../styles/layout.module.scss";

import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className={module.layout}>
        <Header>{title}</Header>
        <main className={module.main}>{children}</main>
        <footer className={module.footer}>
          {title} © {new Date().getFullYear()}
        </footer>
      </div
        >
    )
  }
}

export default Layout
