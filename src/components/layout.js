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
          {title} © {new Date().getFullYear()} e: <a href="mailto:blog.satria@gmail.com">blog.satria@gmail.com</a> t: <a href="https://twitter.com/satriahrh">@satriahrh</a>
        </footer>
      </div
        >
    )
  }
}

export default Layout
