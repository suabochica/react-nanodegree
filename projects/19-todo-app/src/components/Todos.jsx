import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
    addItem = (event) => {
        event.preventDefault();

        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }

    toggleItem = (todoId) => {
        this.props.dispatch(handleToggleTodo(todoId))
    }

    render() {
        return (
            <div className="section section--todos">
                <h1 className="section-title">Todo List</h1>
                <div className="section-form">
                    <input
                        type="text"
                        placeholder="Add a todo..."
                        className="section-input"
                        ref={(input => this.input = input)}
                    />
                    <button className="btn btn--add btn--todo" onClick={this.addItem}>
                        Add
                    </button>
                </div>

                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);
