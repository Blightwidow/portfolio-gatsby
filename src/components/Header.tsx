import * as React from "react"
import styled, { withTheme } from "../utils/styled-components"

import { Accent } from "./Accent"
import { Link } from "./Link"
import { Logo } from "./Logo"

const links = [{ to: "/#blog", label: "Blog" }, { to: "/#about", label: "About" }, { to: "/#contact", label: "Contact" }]

export interface HeaderProps {
  fullName: string
  className?: string
}

export class Header extends React.PureComponent<HeaderProps> {
  render(): React.ReactNode {
    const { fullName, className } = this.props
    return (
      <Wrapper id="header" className={className}>
        <Nav>
          <Logo />
          <LinkList>
            {links.map((link, i) => (
              <ListItem key={i} last={i + 1 === links.length}>
                <Link to={link.to} primary={true} secondary={false}>
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </LinkList>
        </Nav>
        <hr />
        <Intro className="header-intro">
          Personal Blog of{" "}
          <Accent primary={false} secondary={false}>
            {fullName}
          </Accent>
          , Full Stack Engineer.
        </Intro>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  color: ${props => props.theme.lightText};
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const LinkList = styled.ul`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

const ListItem = styled<{ last: boolean }, "li">("li")`
  text-transform: uppercase;
  padding: 0 ${props => (props.last ? 0 : "40px")} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Intro = styled.p`
  line-height: 26px;
  width: 75%;

  @media (min-width: 500px) {
    width: 25%;
  }
`