import React, { Component } from 'react'
import {connect} from 'react-redux'

class NewQuestion extends Component {
  render () {
    return (
      <div>
        <h1>New Question</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <h2>Would you rather?</h2>
          <fieldset>
            <label htmlFor="option-one">Option One</label>
            <input name="option-one" type="text"></input>
          </fieldset>
          <p> or </p>
          <fieldset>
            <label htmlFor="option-two">Option Two</label>
            <input name="option-two" type="text"></input>
          </fieldset>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)