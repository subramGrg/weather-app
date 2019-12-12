import React from 'react'
// import styles from './error.css'

const ErrorBoundary = ({ error, children, }) => (
  <React.Fragment>
    { error ? (
      <div data-testid="error">
        <p>Oops something went wrong: <span>{error}</span></p>
      </div>
    ) : children}
  </React.Fragment>
)

export default ErrorBoundary
