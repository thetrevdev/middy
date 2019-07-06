import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <div>
      <nav className="dt w-100 mw8 center">
        <div className="dtc w2 v-mid pa3">
          <Link to="/" className="dib w2 h2 pa1 ba b--black-90 grow-large border-box">
            <svg className="link black-90 hover-black" data-icon="skull" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}><title>{ siteTitle }</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
          </Link>
        </div>
        <div className="dtc v-mid tr pa3">
          <Link className="f6 fw4 hover-black no-underline black-70 pv2 ph3" to="/" >Home</Link>
          <Link className="f6 fw4 hover-black no-underline black-70 pv2 ph3" to="/docs" >Docs</Link>
          <Link className="f6 fw4 hover-black no-underline black-70 pv2 ph3" href="/packages">Packages</Link>
          <a className="f6 fw4 hover-black no-underline black-70 dib ml2 pv2 ph3 ba" href="https://github.com/middyjs/middy" >GitHub</a>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
