import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo: todo
    }
}

function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export function handleAddTodo (name, resetInputCallback) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo));
                resetInputCallback;
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })
    }
}

export function handleDeleteTodo (todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id))

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodo(todo))
                alert('An error ocurred. Try again.')
            })
    }
}

export function handleToggleTodo (todoId) {
    return (dispatch) => {
        dispatch(toggleTodo(todoId));

        return API.saveTodoToggle(todoId)
            .catch(() => {
                dispatch(toggleTodo(todoId));
                alert('An error ocurred. Try again.');
            })
    }
}