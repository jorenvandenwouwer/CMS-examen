import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {HeaderWrapper} from './headerStyles'
import Menu from "./Menu"

const Header = ({ siteTitle }) => {
  const {
    wpcontent: {
      menuItems
    }
  } = useStaticQuery(graphql`
    query {
      
      wpcontent {
        menuItems {
          edges {
            node {
              label
              path
            }
          }
        }
      }
    }
  `)
  console.log(menuItems.edges)
  return <HeaderWrapper>
    <Menu menuItems={menuItems.edges} />
  </HeaderWrapper>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
