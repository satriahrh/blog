import React from "react"
import module from "../styles/layout.module.scss"

import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <>
        <Header>{title}</Header>
        <main className={module.layout}>{children}</main>
        <footer className={module.footer}>
          {title} © 2019 2020 e:{" "}
          <a href="mailto:satria@gmail.com">satria@gmail.com</a> t:{" "}
          <a href="https://twitter.com/satriahrh">@satriahrh</a>
        </footer>
      </>
    )
  }
}

export default Layout
