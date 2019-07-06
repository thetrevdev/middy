import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import 'tachyons/css/tachyons.css'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="sans-serif mt4 mb4 mt5-m mt6-l ph3">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <p>Icons by <a href="https://icons8.com/c/flat-color-icons" target="_blank">Icons 8</a></p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
