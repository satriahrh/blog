import React from "react"
import module from "../styles/layout.module.scss"
import "normalize.css"

import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <>
        <Header>{title}</Header>
        <main className={module.layout}>{children}</main>
        <Footer title={title} />
      </>
    )
  }
}

export default Layout
