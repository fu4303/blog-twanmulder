import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledFooter = styled.footer`
  margin-top: ${rhythm(1.5)};
`

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <p>
          You can find me on&nbsp;
          <a
            href="https://twitter.com/toktoktwan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          &nbsp;and on&nbsp;
          <a
            href="https://github.com/twanmulder"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </StyledFooter>
    )
  }
}