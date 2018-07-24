import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Relative imports
import './404.styles.css'

class PageNotFound extends Component {
  render() {
    return (
      <div className="container center not-found">
        <h1>Error 404</h1>
        <p>Page not found. Click <Link to="/">here</Link> to go to homepage</p>
      </div>
    )
  }
}

export default PageNotFound