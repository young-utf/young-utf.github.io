/**
 * Created by youngmoon on 11/10/15.
 */

import React, { Component, PropTypes } from 'react'
import { selectReddit } from '../../actions'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.keydown = this.keydown.bind(this)
    }

    keydown (e) {
        if (e.which === 13) {
            e.preventDefault()
            const reddit = document.getElementById('search').value
            this.props.dispatch(selectReddit(reddit))
        }
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input type="search" id="search" onKeyDown={e => this.keydown(e)} required />
                                <label htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}