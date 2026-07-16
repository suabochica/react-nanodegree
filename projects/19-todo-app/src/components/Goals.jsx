import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'


class Goals extends React.Component {
    addItem = (event) => {
        event.preventDefault()

        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal))
    }

    render() {
        return (
            <div className="section section--goals">
                <h1 className="section-title">Goals List</h1>
                <div className="section-form">
                    <input
                        type="text"
                        placeholder="Add a goal..."
                        className="section-input"
                        ref={(input => this.input = input)}
                    />
                    <button className="btn btn--add btn--goal" onClick={this.addItem}>
                        Add
                    </button>
                </div>

                <List
                    items={this.props.goals}
                    remove={this.removeItem}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)
