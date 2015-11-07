/**
 * Created by youngmoon on 11/7/15.
 */

import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="col s12 collection with-header">
                <li className="collection-header">
                    <h4>
                        Todo List
                    </h4>
                </li>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}