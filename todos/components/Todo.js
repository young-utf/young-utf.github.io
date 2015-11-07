/**
 * Created by youngmoon on 11/7/15.
 */

import React, {Component, PropTypes} from 'react';

export default class Todo extends Component {
    render() {
        return <li
            className="collection-item"
            onClick={this.props.onClick}
            style={{
                textDecoration: this.props.completed ? 'line-through' : 'none',
                cursor: this.props.completed ? 'default' : 'pointer'
            }}>
            <span className="title">{this.props.text}</span>
            <a href="#!" className="secondary-content">
                <i className="material-icons">
                    {this.props.completed ? 'favorite' : 'favorite_border'}
                </i>
            </a>
        </li>
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}
