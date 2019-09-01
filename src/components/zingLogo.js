import React from "react"
import { Link } from "gatsby"

export default class ZingLogo extends React.Component {
  render() {
    return (
      <Link to="/">
        <img src="/images/zing.svg" alt="The Zing logo" />
      </Link>
    )
  }
}
