import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
//Relative imports
import { handleAddQuestion } from '../../redux/actions/questions.action'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChangeOptionOneText = (event) => {
    const optionOneText = event.target.value

    this.setState(() => ({
      optionOneText,
    }))
  }

  handleChangeOptionTwoText = (event) => {
    const optionTwoText = event.target.value

    this.setState(() => ({
      optionTwoText,
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion(
        optionOneText,
        optionTwoText,
      ))
    }

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }

  render () {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container center">
        <h1>New Question</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <h2>Would you rather?</h2>
          <fieldset>
            <label htmlFor="option-one">Option One</label>
            <input
              name="option-one"
              type="text"
              onChange={this.handleChangeOptionOneText}
            >
            </input>
          </fieldset>
          <p> or </p>
          <fieldset>
            <label htmlFor="option-two">Option Two</label>
            <input
            name="option-two"
            type="text"
            onChange={this.handleChangeOptionTwoText}
          >
          </input>
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