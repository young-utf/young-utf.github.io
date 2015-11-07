/**
 * Created by youngmoon on 11/7/15.
 */

import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        var effects = 'waves-effect wave-light'
        return (
            <nav style={{"background": "#2bbbad"}}>
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a href="#" className="brand-log">Moon's todo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={effects} onClick={() => this.props.onFilterChange('SHOW_ALL')}><a href="#">All</a></li>
                            <li className={effects} onClick={() => this.props.onFilterChange('SHOW_ACTIVE')}><a href="#">Active</a></li>
                            <li className={effects} onClick={() => this.props.onFilterChange('SHOW_COMPLETED')}><a href="#">Archived</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}