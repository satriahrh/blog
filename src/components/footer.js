import React from "react"
import module from "../styles/footer.module.scss"
import Helmet from "react-helmet"

const Footer = ({ title }) => (
  <footer className={module.footer}>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />
    </Helmet>
    <div className={module.social}>
      <a href={"https://linkedin.com/in/satriahrh"}>
        <i className="lab la-linkedin" />
      </a>
      <a href={"https://github.com/satriahrh"}>
        <i className="lab la-github" />
      </a>
      <a href={"https://twitter.com/satriahrh"}>
        <i className="lab la-twitter" />
      </a>
      <a href={"https://instagram.com/satriahrh"}>
        <i className="lab la-instagram" />
      </a>
    </div>
    <div className={module.copy}>satriahrh © 2020</div>
  </footer>
)

export default Footer
