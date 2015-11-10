import React, {Component, PropTypes} from 'react'

export default class Posts extends Component {
    render() {
        return (
            <ul className="collection with-header">
                <li className="collection-header"><h2>{this.props.value}</h2></li>
                {this.props.posts.map((post, i) =>
                    <li key={i} className="collection-item">{post.title}</li>
                )}
            </ul>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}