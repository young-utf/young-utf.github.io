/**
 * Created by youngmoon on 11/7/15.
 */
import React, {Component, PropTypes} from 'react';

export default class AddTodo extends Component {
    render() {
        return (
            <div className="col s12 input-field">
                <input type="text" ref="input"
                       placeholder="Enter a todo"
                       onKeyDown={(e) => this.keypress(e)} />
                <button
                    className="btn waves-effect wave-light"
                    onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }

    keypress(e) {
        if (e.which === 13) {
            this.createTodo();
        }
    }

    handleClick() {
        this.createTodo();
    }

    createTodo () {
        const node = this.refs.input
        const text = node.value.trim()

        if (text) {
            this.props.onAddClick(text)
            node.value = ''
        }
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};